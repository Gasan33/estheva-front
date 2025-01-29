'use client';

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';

// Load Stripe Public Key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || '');

const CheckoutForm = () => {
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

        const cardNumberElement = elements.getElement(CardNumberElement);
        const cardExpiryElement = elements.getElement(CardExpiryElement);
        const cardCvcElement = elements.getElement(CardCvcElement);

        if (!cardNumberElement || !cardExpiryElement || !cardCvcElement) return;

        // Fetch client secret from the backend (Laravel)
        const response = await fetch('https://api.estheva-clinic.com/api/v1/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5lc3RoZXZhLWNsaW5pYy5jb20vYXBpL3YxL2xvZ2luIiwiaWF0IjoxNzM4MDgxNjkzLCJleHAiOjE3MzgwODUyOTMsIm5iZiI6MTczODA4MTY5MywianRpIjoid1d5cE0xVHFWUGtWdjVtMiIsInN1YiI6IjExIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.vXu0yoezDh0BoqDR8ywFQNEzABYCiFvDcyrELA3-Org`,
            },
            body: JSON.stringify({ amount: 20 }), // Replace with dynamic amount
        });

        const { clientSecret, error } = await response.json();

        if (error) {
            setError(error);
            setLoading(false);
            return;
        }

        // Confirm the card payment using the client secret
        const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardNumberElement,
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

    const handleCardNumberChange = (event: any) => {
        if (event.error) {
            setError(event.error.message);
        } else {
            setError(null);
        }
    };

    return (
        <div className="w-full h-full max-w-md mx-auto">
            {success ? (
                <h2 className="text-green-600 text-center">Payment Successful!</h2>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Cardholder Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Cardholder Name</label>
                        <input
                            type="text"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            className="w-full p-2 border rounded-md"
                            placeholder="John Doe"
                            required
                        />
                    </div>

                    {/* Card Number */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Card Number</label>
                        <CardNumberElement
                            className="w-full p-2 border rounded-md"
                            onChange={handleCardNumberChange}
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#32325d',
                                        '::placeholder': { color: '#a0aec0' },
                                    },
                                    invalid: { color: '#e53e3e' },
                                },
                            }}
                        />
                        {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
                    </div>

                    {/* Expiration Date */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Expiration Date</label>
                        <CardExpiryElement
                            className="w-full p-2 border rounded-md"
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#32325d',
                                        '::placeholder': { color: '#a0aec0' },
                                    },
                                    invalid: { color: '#e53e3e' },
                                },
                            }}
                        />
                    </div>

                    {/* CVC */}
                    <div>
                        <label className="block text-sm font-medium mb-1">CVC</label>
                        <CardCvcElement
                            className="w-full p-2 border rounded-md"
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#32325d',
                                        '::placeholder': { color: '#a0aec0' },
                                    },
                                    invalid: { color: '#e53e3e' },
                                },
                            }}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
                        disabled={!stripe || loading}
                    >
                        {loading ? 'Processing...' : 'Pay Now'}
                    </button>
                </form>
            )}
        </div>
    );
};

export default function PaymentPage() {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
}
