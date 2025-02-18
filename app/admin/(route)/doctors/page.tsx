// src/components/admin/Doctors.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { columns } from './columns';
import { DataTable } from '../../../../components/admin/data-table/data-table';
import Link from 'next/link';
import { BiAddToQueue } from 'react-icons/bi';

const Doctors = () => {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [loading, setLoading] = useState(true);
    const fetchDoctors = async () => {
        try {

            const response = await fetch(`/api/admin/doctors`);
            const data = await response.json();
            setDoctors(data.data);
            console.log(data)
            setLoading(false);
        } catch (error) {
            setLoading(false)
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        fetchDoctors();
    }, []);

    return (
        <div className="container h-full mx-auto p-4 bg-gray-100">
            <div className="p-4 bg-white shadow-lg">
                <div className="flex justify-end">
                    <Link href="/doctors/add" className="flex justify-center items-center gap-2 py-2 px-4 bg-blue-600 text-white rounded-md">
                        <BiAddToQueue />
                        Add New Doctor
                    </Link>
                </div>
                <DataTable columns={columns} data={doctors} loading={loading} />
            </div>
        </div>
    );
};


export default Doctors;
