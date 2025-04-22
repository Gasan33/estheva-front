'use client';

import React, { useEffect, useState } from 'react';
import {

    useStripe,
    useElements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
} from '@stripe/react-stripe-js';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCardAddIcon, GoogleIcon, Money01Icon } from 'hugeicons-react';
import { useSession } from 'next-auth/react';
import config from '@/lib/config';
import { Button } from '@/components/ui/button';



export default function PaymentPage({
    price,
    appointmentId,
    loading,
    setAppointmentSuccess,
    setLoading,
    setCurrentStep,
}: {
    price: number;
    appointmentId: number;
    loading: boolean;
    setAppointmentSuccess: (success: boolean) => void;
    setLoading: (loading: boolean) => void;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}) {
    const stripe = useStripe();
    const elements = useElements();
    const session = useSession();

    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [cardName, setCardName] = useState('');
    const [paymentMethod, setPaymentMethod] = useState<'applepay' | 'debit' | 'cod'>('applepay');
    const [error, setError] = useState<string | null>(null);
    const [paymentRequest, setPaymentRequest] = useState<any>(null);
    const tax = 30;
    const total = price - discount + tax;

    useEffect(() => {
        if (!stripe) return;
        const pr = stripe.paymentRequest({
            country: 'AE',
            currency: 'aed',
            total: { label: 'Estheva Treatment', amount: total * 100 },
            requestPayerName: true,
            requestPayerEmail: true,
        });

        pr.canMakePayment().then((result) => {
            if (result) setPaymentRequest(pr);
        });
    }, [stripe, total]);

    const handleApplePay = async () => {
        if (!paymentRequest) return;
        paymentRequest.on('paymentmethod', async (event: any) => {
            try {
                const res = await fetch(`${config.env.apiEndpoint}/apple-pay-payment`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${session?.data?.user.access_token}`,
                    },
                    body: JSON.stringify({ amount: price, appointment_id: appointmentId }),
                });

                const { clientSecret } = await res.json();
                const { error, paymentIntent } = await stripe!.confirmCardPayment(clientSecret, {
                    payment_method: event.paymentMethod.id,
                });

                if (error) {
                    event.complete('fail');
                    setAppointmentSuccess(false);
                    setCurrentStep((prev) => prev + 1);
                }
                else if (paymentIntent) {
                    event.complete('success');
                    setAppointmentSuccess(true);
                    setCurrentStep((prev) => prev + 1);
                }
            } catch (err) {
                setAppointmentSuccess(false);
                setCurrentStep((prev) => prev + 1);
                event.complete('fail');
            }
        });

        paymentRequest.show();
    };

    const handleCardSubmit = async () => {
        setLoading(true);
        setError(null);

        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardNumberElement);
        if (!cardElement) return;

        const { paymentMethod, error: pmError } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: { name: cardName },
        });

        if (pmError || !paymentMethod) {
            setError(pmError?.message || 'Failed to create payment method');
            setLoading(false);
            return;
        }

        const response = await fetch(`${config.env.apiEndpoint}/payments/card`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${session?.data?.user.access_token}`,
            },
            body: JSON.stringify({
                amount: total,
                appointment_id: appointmentId,
                token: paymentMethod.id,
            }),
        });

        const result = await response.json();
        if (result.error) {
            setError(result.error);
            setLoading(false);
            setAppointmentSuccess(false);
            setCurrentStep((prev) => prev + 1);
            return;
        }

        setAppointmentSuccess(true);
        setCurrentStep((prev) => prev + 1);
        setLoading(false);
    };

    const handleCashSubmit = async () => {
        setLoading(true);
        setError(null);


        const response = await fetch(`/api/payments/cash`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${session?.data?.user.access_token}`,
            },
            body: JSON.stringify({
                amount: total,
                appointment_id: appointmentId,
            }),
        });

        const result = await response.json();
        if (result.error) {
            setError(result.error);
            setLoading(false);
            setAppointmentSuccess(false);
            setCurrentStep((prev) => prev + 1);
            return;
        }
        setAppointmentSuccess(true);
        setCurrentStep((prev) => prev + 1);
        setLoading(false);
    };

    const applyPromoCode = async () => {
        if (!promoCode) return;
        const res = await fetch(`${config.env.apiEndpoint}/apply-promo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${session?.data?.user.access_token}`,
            },
            body: JSON.stringify({ code: promoCode }),
        });

        const data = await res.json();
        if (data.valid) {
            setDiscount(data.discountAmount || 0);
        }
    };

    return (
        <div className="p-4 sm:p-6 lg:p-8">
            {/* Promo Code */}
            <div>
                <h2 className="text-sm font-semibold">Promo Code</h2>
                <div className="flex mt-2 border rounded-md overflow-hidden h-12">
                    <input
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1 px-3 outline-none text-sm"
                        placeholder="Enter code"
                    />
                    <button className="bg-primaryColor text-white px-4 text-sm" onClick={applyPromoCode}>
                        Apply
                    </button>
                </div>
                {discount > 0 && <p className="text-green-500 text-xs mt-1">Promo applied: -{discount} AED</p>}
            </div>

            {/* Payment Method Selection */}
            <h2 className="text-sm font-semibold mt-8">Select Payment Method</h2>

            <div className="flex flex-col gap-3 mt-4">
                {[
                    { id: 'applepay', label: 'Apple / Google Pay', icon: <GoogleIcon /> },
                    { id: 'debit', label: 'Debit Card', icon: <CreditCardAddIcon /> },
                    { id: 'cod', label: 'Cash on Delivery', icon: <Money01Icon /> },
                ].map((option) => (
                    <div
                        key={option.id}
                        className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition ${paymentMethod === option.id ? 'border-primaryColor' : 'border-gray-300'
                            }`}
                        onClick={() => setPaymentMethod(option.id as any)}
                    >
                        <div className="flex gap-2 items-center">
                            {option.icon}
                            <span className="text-sm">{option.label}</span>
                        </div>
                        {paymentMethod === option.id && (
                            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-primaryColor to-cyan-300" />
                        )}
                    </div>
                ))}

                <AnimatePresence>
                    {paymentMethod === 'applepay' && paymentRequest && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <button
                                onClick={handleApplePay}
                                className="bg-black text-white px-4 py-2 rounded-lg w-full mt-2"
                            >
                                Pay with Apple Pay / Google Pay
                            </button>
                        </motion.div>
                    )}

                    {paymentMethod === 'debit' && (
                        <motion.form
                            onSubmit={handleCardSubmit}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden space-y-4 mt-4"
                        >
                            <input
                                type="text"
                                value={cardName}
                                onChange={(e) => setCardName(e.target.value)}
                                className="w-full p-2 border rounded-md text-sm"
                                placeholder="Cardholder Name"
                                required
                            />
                            <CardNumberElement className="w-full p-2 border rounded-md text-sm" />
                            <div className="flex flex-col sm:flex-row gap-4">
                                <CardExpiryElement className="w-full sm:w-1/2 p-2 border rounded-md text-sm" />
                                <CardCvcElement className="w-full sm:w-1/2 p-2 border rounded-md text-sm" />
                            </div>
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>


            {/* Price Details */}
            <div className="mt-8">
                <h2 className="text-sm font-semibold">Price Details</h2>
                <div className="text-sm text-gray-600 mt-4 space-y-2">
                    <div className="flex justify-between">
                        <p>Subtotal</p>
                        <p>{price} AED</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Discount</p>
                        <p className="text-green-600">-{discount} AED</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Tax</p>
                        <p>{tax} AED</p>
                    </div>
                    <div className="flex justify-between font-semibold text-black mt-4">
                        <p>Total</p>
                        <p>{total} AED</p>
                    </div>
                </div>
            </div>


            <Button
                className="flex bg-primaryColor w-full text-white mt-4"
                onClick={() => {
                    paymentMethod === "applepay" ?
                        handleApplePay() :
                        paymentMethod === "debit" ?
                            handleCardSubmit() :
                            handleCashSubmit();

                }
                }
            >
                {loading ? 'Booking...' : 'Confirm Booking'}
            </Button>

        </div>
    );
}
