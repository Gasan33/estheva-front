"use client"
import AppointmentsList from '@/components/common/AppointmentsList';
import ViewAllText from '@/components/common/ViewAllText';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'

const page = () => {
    const { data: session, status } = useSession();
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchAppointments = async () => {
        if (!session?.user?.id) return;

        setLoading(true);
        setError(null);

        try {
            const res = await fetch(`/api/appointments/user-appointments/${session.user.id}`);
            if (!res.ok) throw new Error("Failed to fetch appointments.");

            const data = await res.json();
            const filtered = data.filter((a: Appointment) => a.status === "upcoming");
            setAppointments(filtered);
        } catch (err: any) {
            setError(err.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (status === "authenticated") fetchAppointments();
    }, [status, fetchAppointments]);

    if (loading) return <div>loading...</div>
    return (
        <div>
            <div className='mt-8'>

                <ViewAllText href='' title='Upcoming Appointments' />

                <AppointmentsList appointments={appointments} loading={loading} />
            </div>
        </div>
    )
}

export default page