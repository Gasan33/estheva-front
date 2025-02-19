"use client";

import React, { useEffect, useState, useCallback } from "react";
import AppointmentCard from "./AppointmentCard";
import { useSession } from "next-auth/react";

const AppointmentsList = ({ type }: { type: string }) => {
    const { data: session, status } = useSession();
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    const fetchAppointments = useCallback(async () => {
        if (!session?.user?.id) return;

        try {
            setLoading(true);
            setError(null);

            const response = await fetch(`/api/appointments/user-appointments/${session.user.id}`);

            if (!response.ok) throw new Error("Failed to fetch the appointments");

            const data = await response.json();
            const filteredAppointments = data.filter((appoint: Appointment) => appoint.status === type);

            setAppointments(filteredAppointments);
        } catch (err: any) {
            setError(err.message || "An error occurred while fetching appointments.");
        } finally {
            setLoading(false);
        }
    }, [session?.user?.id, type]);


    useEffect(() => {
        if (status === "authenticated") {
            fetchAppointments();
        }
    }, [fetchAppointments, type, status]);

    if (status === "loading" || loading) return <p className="text-center mt-4">Loading appointments...</p>;
    if (error) return <p className="text-center mt-4 text-red-500">{error}</p>;

    return (
        <div className="mt-8">
            {appointments.length > 0 ? (
                <>
                    <div className="grid grid-cols-1 lg:grid-cols-3 py-2 gap-5 lg:gap-[30px] hidden lg:grid">
                        {appointments.map((item) => (
                            <AppointmentCard appointment={item} type={type} key={item.id} />
                        ))}
                    </div>

                    {/* Scrollable horizontal row for small screens */}
                    <div className="flex lg:hidden py-2 overflow-x-auto space-x-5">
                        {appointments.map((item) => (
                            <div key={item.id} className="flex-shrink-0 w-[80%] sm:w-[60%]">
                                <AppointmentCard appointment={item} type={type} />
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <p className="text-center text-gray-500">No appointments found.</p>
            )}
        </div>
    );
};

export default AppointmentsList;
