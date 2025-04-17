"use client"
import React, { useEffect, useState } from 'react';
import FaqList from "./FaqList";
import ViewAllText from './ViewAllText';
import Image from 'next/image';
import { FaqSkeleton } from '../skeletons/FaqSkeleton';

const Faq = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <FaqSkeleton />;

    return (
        <section className='w-full px-4 py-16 sm:px-6 lg:px-32 bg-sky-100'>
            <ViewAllText
                href="/faqs"
                title="Frequently Asked Questions"

            />

            <div className='flex flex-col-reverse lg:flex-row items-center gap-8 p-6 mt-8'>
                <div className="w-full lg:w-2/3">
                    <FaqList />
                </div>

                <div className="w-full lg:w-1/3 flex justify-center">
                    <Image
                        src="/images/faqs.png"
                        alt="FAQs Illustration"
                        width={400}
                        height={400}
                        className="object-contain rounded-md"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default Faq;
