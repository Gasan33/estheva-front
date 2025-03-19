// src/components/admin/Doctors.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { columns } from './columns';
import { DataTable } from '../../../../components/admin/data-table/data-table';
import Link from 'next/link';
import { BiAddToQueue } from 'react-icons/bi';

const Blogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const fetchBlogs = async () => {
        try {
            const response = await fetch(`/api/blogs`);
            const data = await response.json();
            setBlogs(data);
            console.log(data)
            setLoading(false);
        } catch (error) {
            setLoading(false)
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className="container h-full mx-auto p-4 ">
            <div className="p-4 bg-white shadow-lg">
                <div className="flex justify-between">
                    <div className='flex flex-col text-primary'>
                        <h1 className='font-semibold text-3xl'>Blog Posts</h1>
                        <p className='text-sm font-thin'>View, add, edit and delete your blog posts.</p>
                    </div>
                    <Link href="/admin/blogs/add" className="flex justify-center items-center gap-2 py-2 px-4 bg-blue-600 text-white rounded-md">
                        <BiAddToQueue />
                        Add New Blog
                    </Link>
                </div>
                <DataTable columns={columns} data={blogs} loading={loading} />
            </div>
        </div>
    );
};


export default Blogs;
