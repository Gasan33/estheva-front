"use client"
import React, { useEffect, useState } from 'react';
import FaqList from "./FaqList";
import ViewAllText from './ViewAllText';
import Image from 'next/image';
import { FaqSkeleton } from '../skeletons/FaqSkeleton';

const Faq = () => {
    const [faqs, setfaqs] = useState<FAQ[]>([]);
    const [loading, setLoading] = useState(true);
    const fetchFAQS = async () => {
        try {
            const response = await fetch(`/api/faqs/all`);
            const data = await response.json();
            setfaqs(data);

            setLoading(false);
        } catch (error) {
            setLoading(false)
            // console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchFAQS();
    }, []);

    if (loading) return <FaqSkeleton />;

    return (
        <section className='w-full px-4 py-16 sm:px-6 lg:px-32 bg-sky-100'>
            {/* <ViewAllText
                href=""
                title="Frequently Asked Questions"
            /> */}
            <h2 className={"text-sm md:text-3xl lg:text-4xl font-semibold xl:font-normal text-gray-900"}>
                Frequently Asked Questions
            </h2>

            <div className='flex flex-col-reverse lg:flex-row items-center gap-8 p-6 mt-8'>
                <div className="w-full lg:w-2/3">
                    <FaqList faqs={faqs} />
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
