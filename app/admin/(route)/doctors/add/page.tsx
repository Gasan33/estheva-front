"use client"

import React, { useState } from 'react';

const AddTeamMember = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        additionalPhoneNumber: '',
        country: '',
        birthday: '',
        year: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // You can handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-1/4 bg-white shadow-md p-4">
                <h2 className="font-bold mb-4">Add team member</h2>
                <ul className="space-y-2">
                    <li className="text-purple-500">Profile</li>
                    <li>Addresses</li>
                    <li>Emergency contacts</li>
                </ul>
                <h3 className="font-bold mt-6 mb-2">Workspace</h3>
                <ul className="space-y-2">
                    <li>Services (67)</li>
                    <li>Locations (1)</li>
                    <li>Settings</li>
                </ul>
                <h3 className="font-bold mt-6 mb-2">Pay</h3>
                <ul className="space-y-2">
                    <li>Wages and timesheets</li>
                    <li>Commissions</li>
                    <li>Pay runs</li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-gray-50 p-6">
                <h1 className="text-3xl font-bold mb-6">Profile</h1>
                <p className="mb-4">Manage your team members personal profile</p>

                <div className="bg-white p-6 rounded shadow">
                    <div className="flex items-center mb-4">
                        <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center">
                            <span className="text-purple-600">👤</span>
                        </div>
                        <button className="ml-4 text-purple-600">Edit</button>
                    </div>

                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-1">First name *</label>
                                <input type="text" className="border rounded w-full p-2" />
                            </div>
                            <div>
                                <label className="block mb-1">Last name</label>
                                <input type="text" className="border rounded w-full p-2" />
                            </div>
                            <div>
                                <label className="block mb-1">Email *</label>
                                <input type="email" className="border rounded w-full p-2" />
                            </div>
                            <div>
                                <label className="block mb-1">Phone number</label>
                                <div className="flex">
                                    <input type="tel" className="border rounded-l w-1/4 p-2" placeholder="+971" />
                                    <input type="tel" className="border rounded-r w-3/4 p-2" />
                                </div>
                            </div>
                            <div>
                                <label className="block mb-1">Additional phone number</label>
                                <input type="tel" className="border rounded w-full p-2" />
                            </div>
                            <div>
                                <label className="block mb-1">Country</label>
                                <select className="border rounded w-full p-2">
                                    <option>Select country</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1">Birthday</label>
                                <input type="date" className="border rounded w-full p-2" />
                            </div>
                            <div>
                                <label className="block mb-1">Year</label>
                                <input type="number" className="border rounded w-full p-2" />
                            </div>
                        </div>
                        <div className="flex justify-end mt-6">
                            <button className="bg-black text-white px-4 py-2 rounded">Add</button>
                            <button className="ml-2 border border-black px-4 py-2 rounded">Close</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTeamMember;