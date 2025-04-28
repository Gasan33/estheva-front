"use client";
import React, { useEffect, useState } from 'react';
import { columns } from './columns';
import { DataTable } from '../../../../components/admin/data-table/data-table';
import Link from 'next/link';
import { BiAddToQueue } from 'react-icons/bi';
import CategoryList from '@/components/common/CategoriesList';
import { useCategories } from '@/context/CategoriesContext';

const Treatments = () => {
    const [treatments, setTreatments] = useState<Treatment[]>([]);
    const { categories } = useCategories();
    const [loading, setLoading] = useState(true);

    const fetchTreatments = async () => {
        setLoading(true);
        try {
            const response = await fetch("/api/treatments");
            const data = await response.json();
            setTreatments(data);
        } catch (error) {
            console.error("Error fetching treatments:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTreatments();
    }, []);

    return (
        <div className="container mx-auto p-4">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div className="text-primary">
                    <h1 className="font-semibold text-3xl">Treatment Menu</h1>
                    <p className="text-sm font-thin">View and manage the treatments</p>
                </div>

                <Link
                    href="/admin/treatments/add"
                    className="flex items-center gap-2 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                    <BiAddToQueue />
                    Add New Treatment
                </Link>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-[25%_73%] gap-4">
                {/* Categories Sidebar */}
                <div className="bg-white rounded-xl border p-4">
                    <h1 className="text-primary font-semibold text-xl mb-4">Categories</h1>
                    <CategoryList
                        categories={categories}
                        setLoading={setLoading}
                        setTreatments={setTreatments}
                    />
                </div>

                {/* Treatments Table */}
                <div className="bg-white rounded-xl border p-4">
                    <DataTable columns={columns} data={treatments} loading={loading} />
                </div>
            </div>
        </div>
    );
};

export default Treatments;
