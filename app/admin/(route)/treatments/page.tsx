"use client";

import React, { useEffect, useState } from 'react';
import { columns } from './columns';
import { DataTable } from '../../../../components/admin/data-table/data-table';
import Link from 'next/link';
import { BiAddToQueue } from 'react-icons/bi';
import config from '@/lib/config';
import { ClipLoader } from 'react-spinners';
import CategoryList from '@/components/common/CategoriesList';

const Treatments = () => {
    const [treatments, setTreatments] = useState<Treatment[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [categoryLoading, setCategoryLoading] = useState(true);
    const fetchCategories = async () => {
        try {

            const response = await fetch(`${config.env.apiEndpoint}/categories`);
            const data = await response.json();
            setCategories(data.data);

            setCategoryLoading(false);
        } catch (error) {
            setCategoryLoading(false)
            // console.error("Error fetching treatments:", error);
        }
    };
    const fetchTreatments = async () => {
        try {

            const response = await fetch(`${config.env.apiEndpoint}/treatments`);
            const data = await response.json();
            setTreatments(data.data);

            setLoading(false);
        } catch (error) {
            setLoading(false)
            // console.error("Error fetching treatments:", error);
        }
    };

    useEffect(() => {
        fetchCategories();
        fetchTreatments();
    }, []);

    return (
        <div className='container h-full mx-auto p-4'>
            <div className="flex justify-between mb-8">
                <div className='flex flex-col text-primary'>
                    <h1 className='font-semibold text-3xl'>Treatment Menu</h1>
                    <p className='text-sm font-thin'>View and manage the treatments</p>
                </div>

                <Link href="/admin/treatments/add" className="flex justify-center items-center gap-2 py-2 px-4 bg-blue-600 text-white rounded-md">
                    <BiAddToQueue />
                    Add New Treatment
                </Link>
            </div>
            <div className="container h-full gap-4 grid grid-cols-[22%_76%]">
                <div className='bg-white rounded-xl border-[1px] h-full p-4 py-8'>
                    <h1 className='text-primary font-semibold text-xl mb-4'>Categories</h1>
                    {
                        categoryLoading ?
                            (<div className="container mx-auto p-4 flex justify-center items-center h-full">
                                <ClipLoader size={50} color="#3498db" loading={categoryLoading} />
                            </div>)
                            : (<CategoryList categories={categories} setLoading={setLoading} setTreatments={setTreatments} />)
                    }
                </div>
                <div className="p-4 bg-white rounded-xl border-[1px] w-full h-full">
                    <DataTable columns={columns} data={treatments} loading={loading} />
                </div>
            </div>
        </div>

    );
};



export default Treatments;
