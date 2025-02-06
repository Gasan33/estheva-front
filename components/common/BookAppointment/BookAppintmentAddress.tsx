"use client"
import { addresses } from "@/constants";
import { Location01Icon } from "hugeicons-react";
import { CircleCheck, CircleCheckIcon } from "lucide-react";
import React, { useState } from "react";



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
                        ? "border-primaryColor bg-teal-50"
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
                    {selectedId === address.id && <CircleCheck className="absolute bottom-2 right-2 text-primaryColor w-4 h-4" />}
                </div>
            ))}
        </div>
    );
};

export default BookAppointmentAddress;
