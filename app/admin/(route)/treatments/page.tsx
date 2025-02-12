"use client";

import React, { useEffect, useState } from 'react';
import { columns } from './columns';
import { DataTable } from '../../../../components/admin/data-table/data-table';
import Link from 'next/link';
import { BiAddToQueue } from 'react-icons/bi';
import config from '@/lib/config';

const Treatments = () => {
    const [treatments, setTreatments] = useState<Treatment[]>([]);
    const [loading, setLoading] = useState(true);
    const fetchTreatments = async () => {
        try {

            const response = await fetch(`${config.env.apiEndpoint}/treatments`);
            const data = await response.json();
            setTreatments(data.data);
            console.log(data)
            setLoading(false);
        } catch (error) {
            setLoading(false)
            console.error("Error fetching treatments:", error);
        }
    };
    useEffect(() => {
        fetchTreatments();
    }, []);

    return (
        <div className="container h-full mx-auto p-4 bg-gray-100">
            <div className="p-4 bg-white shadow-lg">
                <div className="flex justify-end">
                    <Link href="/admin/treatment/add" className="flex justify-center items-center gap-2 py-2 px-4 bg-blue-600 text-white rounded-md">
                        <BiAddToQueue />
                        Add New Treatment
                    </Link>
                </div>
                <DataTable columns={columns} data={treatments} loading={loading} />
            </div>
        </div>
    );
};



export default Treatments;
