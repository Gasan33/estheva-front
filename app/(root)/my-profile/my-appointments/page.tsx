"use client"
import AppointmentsList from '@/components/common/AppointmentsList';
import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { appointmentsTabs } from '@/constants';
import { ArrowRight01Icon } from 'hugeicons-react';
import { useSession } from 'next-auth/react';

const MyAppointments = () => {
    const session = useSession();
    const [currentTab, setCurrentTab] = useState("all");
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const handleTabSwitch = (tab: string) => {
        setCurrentTab(tab);
    };

    const fetchAppointments = async (appoit: string) => {
        if (!session?.data?.user.id) return;

        setLoading(true);
        setError(null);

        try {
            const res = await fetch(`/api/appointments/user-appointments/${session.data.user.id}`);
            if (!res.ok) throw new Error("Failed to fetch appointments.");

            const data = await res.json();
            const filtered = data.filter((a: Appointment) => a.status === appoit);
            setAppointments(filtered);
        } catch (err: any) {
            setError(err.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchAppointments("all");
    }, [])
    return (
        <div>
            <div className=''>
                {/* <Carousel /> */}
                <div className="">

                    <Tabs
                        defaultValue="all"
                        value={currentTab}
                        onValueChange={(value) => {

                            setCurrentTab(value);
                            fetchAppointments(value);
                        }}
                        className="w-full h-auto"
                    >
                        <TabsList className="flex items-center justify-start overflow-scroll h-12 md:h-16 w-full rounded-full bg-light-100">
                            {appointmentsTabs.map((tab) => (
                                <TabsTrigger
                                    key={tab.id}
                                    value={tab.value}
                                    className="px-4 py-2 md:px-6 md:py-4 rounded-full text-sm  "
                                >
                                    {tab.title} Appointments
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        <div className="mt-6 md:mt-12 ml-2 md:ml-4">
                            <TabsContent value="all" className="flex-1">
                                {appointmentsTabs.slice(1).map((tab) => (
                                    <div key={tab.id} className='mt-8'>
                                        <div className='flex justify-between items-center'>
                                            <h1 className='text-lg md:text-[28px] lg:text-[32px] text-primary font-semibold'>{tab.title} Appointments</h1>
                                            <div
                                                onClick={() => handleTabSwitch(tab.value)}
                                                className="flex gap-2 xl:gap-4 items-center cursor-pointer duration-700 transform hover:scale-105 hover:duration-300">
                                                <span className="text-sm xl:text-xl text-light-500">View All</span>
                                                <ArrowRight01Icon className="text-primaryColor" size={24} />
                                            </div>
                                        </div>
                                        <AppointmentsList appointments={appointments} loading={loading} />
                                    </div>
                                ))}

                            </TabsContent>
                            {appointmentsTabs.slice(1).map((tab) => (
                                <TabsContent key={tab.id} value={tab.value} className="flex-1">
                                    <div className='mt-8'>
                                        <div className='flex justify-between items-center'>
                                            <h1 className='text-lg md:text-[28px] lg:text-[32px] text-primary font-semibold'>{tab.title} Appointments</h1>
                                        </div>
                                        <AppointmentsList appointments={appointments} loading={loading} />
                                    </div>
                                </TabsContent>
                            ))}
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default MyAppointments