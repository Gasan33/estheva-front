'use client';

import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import { Button } from 'react-day-picker';
import { motion } from 'framer-motion';
import { Apple01Icon, AppleIcon, Cards01Icon, CreditCardAddIcon, Money01Icon, MoneyBag01Icon } from 'hugeicons-react';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || '');

const ApplePayButton = ({ price }: { price: number }) => {
    const stripe = useStripe();
    const [paymentRequest, setPaymentRequest] = useState<any>(null);

    useEffect(() => {
        if (!stripe) return;

        const pr = stripe.paymentRequest({
            country: 'US',
            currency: 'usd',
            total: { label: 'Demo Product', amount: 2000 },
            requestPayerName: true,
            requestPayerEmail: true,
        });

        pr.canMakePayment().then((result) => {
            if (result) setPaymentRequest(pr);
        });
    }, [stripe]);

    const handlePayment = async () => {
        if (!paymentRequest) return;

        paymentRequest.on('paymentmethod', async (event: any) => {
            try {
                const response = await fetch('https://api.estheva-clinic.com/api/v1/apple-pay-payment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer YOUR_ACCESS_TOKEN`,
                    },
                    body: JSON.stringify({ amount: 20 }),
                });

                const { clientSecret } = await response.json();

                if (stripe) {
                    const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
                        payment_method: event.paymentMethod.id,
                    });

                    if (error) {
                        event.complete('fail');
                        console.error('Payment failed:', error.message);
                    } else if (paymentIntent) {
                        event.complete('success');
                        console.log('Payment successful!', paymentIntent);
                    }
                } else {
                    event.complete('fail');
                }
            } catch (err) {
                event.complete('fail');
                console.error('Error confirming payment:', err);
            }
        });

        paymentRequest.show();
    };

    return (
        <div>
            {paymentRequest ? (
                <button onClick={handlePayment} className="bg-black text-white px-4 py-2 rounded-md">
                    Pay with Apple Pay
                </button>
            ) : (
                <p className='mx-0 md:mx-20 lg:mx-20 mb-4'>Apple Pay is not available on this device.</p>
            )}
        </div>
    );
};

const CheckoutForm = ({ price }: { price: number }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const [cardName, setCardName] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardNumberElement);
        if (!cardElement) return;

        const response = await fetch('https://api.estheva-clinic.com/api/v1/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer YOUR_ACCESS_TOKEN`,
            },
            body: JSON.stringify({ amount: 20 }),
        });

        const { clientSecret, error } = await response.json();

        if (error) {
            setError(error);
            setLoading(false);
            return;
        }

        const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: { name: cardName },
            },
        });

        if (stripeError) {
            setError(stripeError.message || 'Payment failed');
        } else if (paymentIntent) {
            setSuccess(true);
            console.log(paymentIntent);
        }

        setLoading(false);
    };

    return (
        <div className="w-full max-w-md mx-auto">
            {success ? (
                <h2 className="text-green-600 text-center">Payment Successful!</h2>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Cardholder Name</label>
                        <input
                            type="text"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            className="w-full p-2 border rounded-md"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Card Number</label>
                        <CardNumberElement className="w-full p-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Expiration Date</label>
                        <CardExpiryElement className="w-full p-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">CVC</label>
                        <CardCvcElement className="w-full p-2 border rounded-md" />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md w-full" disabled={!stripe || loading}>
                        {loading ? 'Processing...' : 'Pay Now'}
                    </button>
                </form>
            )}
        </div>
    );
};

export default function PaymentPage({ price }: { price: number }) {
    const [promoCode, setPromoCode] = useState<string | null>(null);
    const [paymentMethod, setPaymentMethod] = useState<"applepay" | "debit" | "cod">("applepay");

    return (
        <div className="">
            {/* Promo Code Section */}
            <div>
                <h1 className="text-xs md:text-sm lg:text-lg xl:text-xl font-semibold mt-8">Promo Code</h1>
                <div className="relative flex rounded-lg w-full h-14 border border-gray-200 my-4 p-2">
                    <input
                        className="w-full outline-none bg-transparent border-none focus:ring-0 placeholder-gray-400"
                        placeholder="Enter Code..."
                    />
                    <button
                        className="bg-primaryColor py-1 px-4 rounded-lg text-white text-sm font-semibold"
                        disabled={!!promoCode} // Ensures proper boolean check
                    >
                        Apply
                    </button>
                </div>
            </div>

            {/* Payment Method Selection */}
            <h1 className="text-xs md:text-sm lg:text-lg xl:text-xl font-semibold mt-8">Select Payment Method</h1>

            {/* Payment Form */}
            <Elements stripe={stripePromise}>
                <div className="flex flex-col gap-4 mt-4">
                    {/* Apple Pay */}
                    <div
                        className={`flex justify-between p-3 rounded-lg border cursor-pointer items-center transition ${paymentMethod === "applepay" ? "border-primaryColor" : "border-gray-300"
                            }`}
                        onClick={() => setPaymentMethod("applepay")}
                    >
                        <div className="flex gap-2 items-center">
                            <AppleIcon />
                            <h2>Apple Pay</h2>
                        </div>
                        {paymentMethod === "applepay" && (
                            <div className="w-3 h-3 rounded-full bg-[radial-gradient(circle,_rgba(20,184,166,1)_0%,_rgba(45,212,191,0.5)_100%)]" />
                        )}
                    </div>
                    {paymentMethod === "applepay" && <ApplePayButton price={price} />}

                    {/* Debit Card */}
                    <div
                        className={`flex justify-between p-3 rounded-lg border cursor-pointer items-center transition ${paymentMethod === "debit" ? "border-primaryColor" : "border-gray-300"
                            }`}
                        onClick={() => setPaymentMethod("debit")}
                    >
                        <div className="flex gap-2 items-center">
                            <CreditCardAddIcon />
                            <h2>Debit Card</h2>
                        </div>
                        {paymentMethod === "debit" && (
                            <div className="w-3 h-3 rounded-full bg-[radial-gradient(circle,_rgba(20,184,166,1)_0%,_rgba(45,212,191,0.5)_100%)]" />
                        )}
                    </div>
                    {paymentMethod === "debit" && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <CheckoutForm price={price} />
                        </motion.div>
                    )}

                    {/* Cash on Delivery */}
                    <div
                        className={`flex justify-between p-3 rounded-lg border cursor-pointer items-center transition ${paymentMethod === "cod" ? "border-primaryColor" : "border-gray-300"
                            }`}
                        onClick={() => setPaymentMethod("cod")}
                    >
                        <div className="flex gap-2 items-center">
                            <Money01Icon />
                            <h2>Cash on Delivery</h2>
                        </div>
                        {paymentMethod === "cod" && (
                            <div className="w-3 h-3 rounded-full bg-[radial-gradient(circle,_rgba(20,184,166,1)_0%,_rgba(45,212,191,0.5)_100%)]" />
                        )}
                    </div>
                </div>
            </Elements>

            {/* Price Details Section */}
            <div>
                <h1 className="text-xs md:text-sm lg:text-lg xl:text-xl font-semibold mt-8">Price Details</h1>
                <div className="text-[8px] sm:text-sm text-gray-500">
                    <div className="flex justify-between mt-8">
                        <p>Subtotal</p>
                        <p>1,300 AED</p>
                    </div>
                    <div className="flex justify-between mt-1">
                        <p>Extra</p>
                        <p>0 AED</p>
                    </div>
                    <div className="flex justify-between mt-1">
                        <p>Tax</p>
                        <p>30 AED</p>
                    </div>
                    <div className="flex justify-between text-gray-950 mt-8 font-semibold">
                        <p>Total</p>
                        <p>1,330 AED</p>
                    </div>
                </div>
            </div>
        </div>
    );
}