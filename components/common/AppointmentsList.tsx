"use client";
import React, { useEffect, useState, useCallback } from "react";
import AppointmentCard from "./AppointmentCard";
import { useSession } from "next-auth/react";

interface AppointmentsListProps {
    type: string;
}

const AppointmentsList: React.FC<AppointmentsListProps> = ({ type }) => {
    const { data: session, status } = useSession();
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchAppointments = useCallback(async () => {
        if (!session?.user?.id) return;

        setLoading(true);
        setError(null);

        try {
            const res = await fetch(`/api/appointments/user-appointments/${session.user.id}`);
            if (!res.ok) throw new Error("Failed to fetch appointments.");

            const data = await res.json();
            const filtered = data.filter((a: Appointment) => a.status === type);
            setAppointments(filtered);
        } catch (err: any) {
            setError(err.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    }, [session?.user?.id, type]);

    useEffect(() => {
        if (status === "authenticated") fetchAppointments();
    }, [status, fetchAppointments]);

    if (status === "loading" || loading) {
        return <p className="text-center mt-4">Loading appointments...</p>;
    }

    if (error) {
        return <p className="text-center mt-4 text-red-500">{error}</p>;
    }

    if (appointments.length === 0) {
        return <p className="text-center text-gray-500 mt-4">No appointments found.</p>;
    }

    return (
        <div className="mt-8">
            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 py-2 gap-5 lg:gap-[30px]">
                {appointments.map((appt) => (
                    <AppointmentCard appointment={appt} type={type} key={appt.id} />
                ))}
            </div>

            {/* Mobile Scrollable List */}
            <div className="flex lg:hidden py-2 overflow-x-auto space-x-5">
                {appointments.map((appt) => (
                    <div key={appt.id} className="flex-shrink-0 w-[80%] sm:w-[60%]">
                        <AppointmentCard appointment={appt} type={type} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppointmentsList;
