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
            setLoading(false);
        } catch (error) {
            setLoading(false)
            // console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        fetchDoctors();
    }, []);

    return (
        <div className="container h-full mx-auto p-4 ">
            <div className="p-4 bg-white shadow-lg">
                <div className="flex justify-between">
                    <div className='flex flex-col text-primary'>
                        <h1 className='font-semibold text-3xl'>Team members</h1>
                        <p className='text-sm font-thin'>View, add, edit and delete your team members.</p>
                    </div>
                    <Link href="/admin/doctors/add" className="flex justify-center items-center gap-2 py-2 px-4 bg-blue-600 text-white rounded-md">
                        <BiAddToQueue />
                        Add New Member
                    </Link>
                </div>
                <DataTable columns={columns} data={doctors} loading={loading} />
            </div>
        </div>
    );
};


export default Doctors;
