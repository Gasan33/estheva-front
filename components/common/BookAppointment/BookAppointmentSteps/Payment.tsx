'use client';

import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    Elements,
    useStripe,
    useElements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
} from '@stripe/react-stripe-js';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCardAddIcon, GoogleIcon, Money01Icon } from 'hugeicons-react';
import { Dialog } from '@headlessui/react';
import { ShieldCheckIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';
import config from '@/lib/config';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || '');

const AppleGooglePayButton = ({ price, appointmentId }: { price: number; appointmentId: number }) => {
    const stripe = useStripe();
    const [paymentRequest, setPaymentRequest] = useState<any>(null);

    useEffect(() => {
        if (!stripe) return;

        const pr = stripe.paymentRequest({
            country: 'AE',
            currency: 'aed',
            total: { label: 'Estheva Treatment', amount: price * 100 },
            requestPayerName: true,
            requestPayerEmail: true,
        });

        pr.canMakePayment().then((result) => {
            if (result) setPaymentRequest(pr);
        });
    }, [stripe, price]);

    const handlePayment = async () => {
        if (!paymentRequest) return;

        paymentRequest.on('paymentmethod', async (event: any) => {
            try {
                const res = await fetch('https://api.estheva-clinic.com/api/v1/apple-pay-payment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer YOUR_ACCESS_TOKEN`,
                    },
                    body: JSON.stringify({
                        amount: price,
                        appointment_id: appointmentId,
                    }),
                });

                const { clientSecret } = await res.json();

                const { error, paymentIntent } = await stripe!.confirmCardPayment(clientSecret, {
                    payment_method: event.paymentMethod.id,
                });

                if (error) {
                    event.complete('fail');
                } else if (paymentIntent) {
                    event.complete('success');
                }
            } catch (err) {
                event.complete('fail');
            }
        });

        paymentRequest.show();
    };

    return paymentRequest ? (
        <button onClick={handlePayment} className="bg-black text-white px-4 py-2 rounded-lg w-full mt-2">
            Pay with Apple Pay / Google Pay
        </button>
    ) : (
        <p className="text-sm text-center text-gray-500 mt-2">Apple or Google Pay not available on this device.</p>
    );
};

const CheckoutForm = ({
    price,
    onSuccess,
    appointmentId,
}: {
    price: number;
    onSuccess: () => void;
    appointmentId: number;
}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [cardName, setCardName] = useState('');
    const [error, setError] = useState<string | null>(null);
    const session = useSession();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
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

        const response = await fetch(`${config.env.apiEndpoint}/payment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${session?.data?.user.access_token}`,
            },
            body: JSON.stringify({
                amount: price,
                appointment_id: appointmentId,
                token: paymentMethod.id,
            }),
        });

        const result = await response.json();

        if (result.error) {
            setError(result.error);
            setLoading(false);
            return;
        }

        onSuccess();
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
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
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" className="bg-primaryColor text-white px-4 py-2 rounded-md w-full text-sm" disabled={!stripe || loading}>
                {loading ? 'Processing...' : 'Pay Now'}
            </button>
        </form>
    );
};

export default function PaymentPage({ price, appointmentId }: { price: number; appointmentId: number }) {
    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState<'applepay' | 'debit' | 'cod'>('applepay');
    const [showConfirmation, setShowConfirmation] = useState(false);

    const applyPromoCode = async () => {
        if (!promoCode) return;
        const res = await fetch('https://api.estheva-clinic.com/api/v1/apply-promo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer YOUR_ACCESS_TOKEN`,
            },
            body: JSON.stringify({ code: promoCode }),
        });
        const data = await res.json();
        if (data.valid) {
            setDiscount(data.discountAmount || 0);
        }
    };

    const total = price - discount + 30;

    return (
        <div className="p-4 sm:p-6 lg:p-8">
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

            <h2 className="text-sm font-semibold mt-8">Select Payment Method</h2>
            <Elements stripe={stripePromise}>
                <div className="flex flex-col gap-3 mt-4">
                    {[{
                        id: 'applepay', label: 'Apple / Google Pay', icon: <GoogleIcon />
                    }, {
                        id: 'debit', label: 'Debit Card', icon: <CreditCardAddIcon />
                    }, {
                        id: 'cod', label: 'Cash on Delivery', icon: <Money01Icon />
                    }].map((option) => (
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
                        {paymentMethod === 'applepay' && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <AppleGooglePayButton price={total} appointmentId={appointmentId} />
                            </motion.div>
                        )}

                        {paymentMethod === 'debit' && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <CheckoutForm price={total} onSuccess={() => setShowConfirmation(true)} appointmentId={appointmentId} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </Elements>

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
                        <p>30 AED</p>
                    </div>
                    <div className="flex justify-between font-semibold text-black mt-4">
                        <p>Total</p>
                        <p>{total} AED</p>
                    </div>
                </div>
            </div>

            <Dialog open={showConfirmation} onClose={() => setShowConfirmation(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
                    <Dialog.Panel className="bg-white rounded-xl p-6 max-w-sm w-full text-center">
                        <ShieldCheckIcon className="text-green-500 mx-auto mb-2" size={32} />
                        <Dialog.Title className="text-lg font-semibold">Payment Successful!</Dialog.Title>
                        <Dialog.Description className="text-sm text-gray-600 mt-1">
                            Thank you for your purchase. You’ll receive a confirmation email shortly.
                        </Dialog.Description>
                        <button onClick={() => setShowConfirmation(false)} className="mt-4 bg-primaryColor text-white px-4 py-2 rounded-md text-sm">
                            Close
                        </button>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    );
}
