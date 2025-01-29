'use client';

import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe } from '@stripe/react-stripe-js';

// Load Stripe Public Key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || '');

const ApplePayButton = () => {
    const stripe = useStripe();
    const [paymentRequest, setPaymentRequest] = useState<any>(null);

    useEffect(() => {
        // Ensure Stripe is available before setting up the payment request
        if (!stripe) return;

        const pr = stripe.paymentRequest({
            country: 'US',
            currency: 'usd',
            total: {
                label: 'Demo Product',
                amount: 2000, // Amount in cents (e.g., $20.00)
            },
            requestPayerName: true,
            requestPayerEmail: true,
        });

        // Check if the device supports Apple Pay
        pr.canMakePayment().then((result) => {
            if (result) {
                setPaymentRequest(pr);
            }
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
                        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5lc3RoZXZhLWNsaW5pYy5jb20vYXBpL3YxL2xvZ2luIiwiaWF0IjoxNzM4MDgxNjkzLCJleHAiOjE3MzgwODUyOTMsIm5iZiI6MTczODA4MTY5MywianRpIjoid1d5cE0xVHFWUGtWdjVtMiIsInN1YiI6IjExIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.vXu0yoezDh0BoqDR8ywFQNEzABYCiFvDcyrELA3-Org`,
                    },
                    body: JSON.stringify({ amount: 20 }), // Replace with dynamic amount
                });

                const { clientSecret } = await response.json();

                // Confirm the payment with Stripe
                if (stripe) { // Check if `stripe` is available
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
                    console.error('Stripe is unavailable.');
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
                <button
                    onClick={handlePayment}
                    className="bg-black text-white px-4 py-2 rounded-md"
                >
                    Pay with Apple Pay
                </button>
            ) : (
                <p>Apple Pay is not available on this device.</p>
            )}
        </div>
    );
};

export default function PaymentPage() {
    return (
        <Elements stripe={stripePromise}>
            <ApplePayButton />
        </Elements>
    );
}
