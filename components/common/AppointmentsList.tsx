"use client";
import React from "react";
import AppointmentCard from "./AppointmentCard";
import AppointmentCardSkeleton from "../skeletons/AppointmentCardSkeleton";


interface AppointmentsListProps {
    appointments: Appointment[];
    loading: boolean
}

const AppointmentsList: React.FC<AppointmentsListProps> = ({ appointments, loading }) => {

    return (
        <div className="mt-8">
            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 py-2 gap-5 lg:gap-[30px]">
                {loading ?
                    <AppointmentCardSkeleton />
                    : appointments.map((appt) => (
                        <AppointmentCard appointment={appt} type={appt.status} key={appt.id} />
                    ))}
            </div>

            {/* Mobile Scrollable List */}
            <div className="flex lg:hidden py-2 overflow-x-auto space-x-5">
                {loading ?
                    <AppointmentCardSkeleton />
                    : appointments.map((appt) => (
                        <div key={appt.id} className="flex-shrink-0 w-[80%] sm:w-[60%]">
                            <AppointmentCard appointment={appt} type={appt.status} />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default AppointmentsList;
