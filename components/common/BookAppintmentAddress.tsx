"use client"
import { Location01Icon } from "hugeicons-react";
import { CircleCheck, CircleCheckIcon } from "lucide-react";
import React, { useState } from "react";

const addresses = [
    {
        id: 1,
        title: "Home",
        name: "Mohammed Ali",
        phone: "+971 545 671677",
        address: "Dubai, Alwasl road, build 375.",
    },
    {
        id: 2,
        title: "Home",
        name: "Mohammed Ali",
        phone: "+971 545 671677",
        address: "Dubai, Alwasl road, build 375.",
    },
    {
        id: 3,
        title: "Home",
        name: "Mohammed Ali",
        phone: "+971 545 671677",
        address: "Dubai, Alwasl road, build 375.",
    },
];

const BookAppointmentAddress = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleSelect = (id: number) => {
        setSelectedId(id);
    };

    return (
        <div className="flex flex-col gap-4">
            {addresses.map((address) => (
                <div
                    key={address.id}
                    onClick={() => handleSelect(address.id)}
                    className={`relative flex flex-col items-start border-[1px] p-2 rounded-lg cursor-pointer ${selectedId === address.id
                        ? "border-teal-500 bg-teal-50"
                        : "border-gray-100"
                        }`}
                >
                    <div className="flex gap-2 items-center">
                        <Location01Icon size={16} />
                        <h1 className="text-sm font-semibold">{address.title}</h1>
                    </div>
                    <p>{address.name}</p>
                    <p>{address.phone}</p>
                    <p>{address.address}</p>
                    {selectedId === address.id && <CircleCheck className="absolute bottom-2 right-2 text-teal-500 w-4 h-4" />}
                </div>
            ))}
        </div>
    );
};

export default BookAppointmentAddress;
