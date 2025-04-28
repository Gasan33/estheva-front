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
        setLoading(true);
        try {
            const response = await fetch(`/api/blogs/all`);
            const data = await response.json();
            setBlogs(data.data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <div className="p-4 bg-white shadow-lg rounded-xl">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <div className="text-primary">
                        <h1 className="font-semibold text-3xl">Blog Posts</h1>
                        <p className="text-sm font-thin">View, add, edit, and delete your blog posts.</p>
                    </div>
                    <Link
                        href="/admin/blogs/add"
                        className="flex items-center gap-2 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                    >
                        <BiAddToQueue />
                        Add New Blog
                    </Link>
                </div>

                {/* Data Table */}
                <DataTable columns={columns} data={blogs} loading={loading} />
            </div>
        </div>
    );
};

export default Blogs;
