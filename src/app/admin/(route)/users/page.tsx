// src/components/admin/Users.tsx
"use client";

import React from 'react';
import { columns } from './columns';
import { DataTable } from '../../../../components/admin/data-table/data-table';
import Link from 'next/link';
import { BiAddToQueue } from 'react-icons/bi';
import { UserProvider, useUserContext } from '../../../../context/admin/UserContext';


const UsersContent = () => {
    const { users, loading } = useUserContext();

    // if (loading) {
    //     return <div className="container mx-auto p-4">Loading...</div>;
    // }

    return (
        <div className="container h-full mx-auto p-4 bg-gray-100">
            <div className="p-4 bg-white shadow-lg">
                <div className="flex justify-end">
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

const Users = () => {
    return (
        <UserProvider>
            <UsersContent />
        </UserProvider>
    );
};

export default Users;



