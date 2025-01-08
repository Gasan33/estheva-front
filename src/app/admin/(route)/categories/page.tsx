"use client"
import React from 'react';
import { BiAddToQueue } from 'react-icons/bi';
import Link from 'next/link';
import { DataTable } from "../../../../components/admin/data-table/data-table";
import { CategoryProvider, useCategoryContext } from '../../../../context/admin/CategoryContext';
import { columns } from './columns';

const CategoriesContent = () => {
    const { categories, loading } = useCategoryContext();

    // if (loading) {
    //     return <div className="container mx-auto p-4">Loading...</div>;
    // }

    return (
        <div className="container mx-auto p-4 bg-gray-100">
            <div className="p-4 bg-white shadow-lg rounded-lg">
                {/* Add New Category Button */}
                <div className="flex justify-end mb-4">
                    <Link href="/admin/categories/add" className="flex items-center gap-2 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                        <BiAddToQueue />
                        Add New Category
                    </Link>
                </div>

                {/* Data Table */}
                <DataTable columns={columns} data={categories} loading={loading} />
            </div>
        </div>
    );
};

const Categories = () => {
    return (
        <CategoryProvider>
            <CategoriesContent />
        </CategoryProvider>
    );
};

export default Categories;
