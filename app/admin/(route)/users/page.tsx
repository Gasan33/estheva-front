// src/components/admin/Users.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { columns } from './columns';
import { DataTable } from '../../../../components/admin/data-table/data-table';
import Link from 'next/link';
import { BiAddToQueue } from 'react-icons/bi';


const Users = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const fetchUsers = async () => {
        try {

            const response = await fetch(`/api/admin/users`);
            const data = await response.json();
            setUsers(data.data);
            setLoading(false);
        } catch (error) {
            setLoading(false)
            // console.error("Error fetching treatments:", error);
        }
    };
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="container h-full mx-auto p-4">
            <div className="p-4 bg-white rounded-lg">
                <div className="flex justify-between">
                    <div className='flex flex-col text-primary'>
                        <h1 className='font-semibold text-3xl'>Clients list</h1>
                        <p className='text-sm font-thin'>View, add, edit and delete your client's details.</p>
                    </div>
                    <Link href="/users/add" className="flex justify-center items-center gap-2 py-2 px-4 bg-blue-600 text-white rounded-md">
                        <BiAddToQueue />
                        Add New User
                    </Link>
                </div>
                <DataTable columns={columns} data={users} loading={loading} />
            </div>
        </div>
    );
};


export default Users;



