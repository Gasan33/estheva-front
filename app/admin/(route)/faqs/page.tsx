// src/components/admin/Doctors.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { columns } from './columns';
import { DataTable } from '../../../../components/admin/data-table/data-table';
import Link from 'next/link';
import { BiAddToQueue } from 'react-icons/bi';

const FAQs = () => {
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

    return (
        <div className="container h-full mx-auto p-4 ">
            <div className="p-4 bg-white shadow-lg">
                <div className="flex justify-between">
                    <div className='flex flex-col text-primary'>
                        <h1 className='font-semibold text-3xl'>Frequently Asked Questions</h1>
                        <p className='text-sm font-thin'>View, add, edit and delete your FAQs.</p>
                    </div>
                    <Link href="/admin/faqs/add" className="flex justify-center items-center gap-2 py-2 px-4 bg-blue-600 text-white rounded-md">
                        <BiAddToQueue />
                        Add New FAQ
                    </Link>
                </div>
                <DataTable columns={columns} data={faqs} loading={loading} />
            </div>
        </div>
    );
};


export default FAQs;
