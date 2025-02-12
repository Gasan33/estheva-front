"use client";

import React, { useEffect, useState } from "react";
import AppointmentCard from "./AppointmentCard";

const AppointmentsList = ({ type }: { type?: string }) => {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const fetchAppointments = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch("/api/appointments");
            if (!response.ok) throw new Error("Failed to fetch appointments");

            const data = await response.json();
            setAppointments(data.data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {

        fetchAppointments();
    }, [type]);

    if (loading) return <p className="text-center mt-4">Loading appointments...</p>;
    if (error) return <p className="text-center mt-4 text-red-500">{error}</p>;

    return (
        <div className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 py-2 gap-5 lg:gap-[30px] hidden lg:grid">
                {appointments.map((item) => (
                    <AppointmentCard appointment={item} type={type || "upcoming"} key={item.id} />
                ))}
            </div>

            {/* Scrollable horizontal row for small screens */}
            <div className="flex lg:hidden py-2 overflow-x-auto space-x-5">
                {appointments.map((item) => (
                    <div key={item.id} className="flex-shrink-0 w-[80%] sm:w-[60%]">
                        <AppointmentCard appointment={item} type={type || "upcoming"} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppointmentsList;
