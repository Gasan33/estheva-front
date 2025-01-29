import React from 'react'
import { popularTreatments } from '@/constants';
import AppointmentCard from './AppointmentCard';



const AppointmentsList = ({ type }: { type?: string }) => {
    return (


        <div className="mt-8">
            <div className="grid-cols-1 lg:grid-cols-3 py-2 gap-5 lg:gap-[30px] hidden lg:grid">
                {popularTreatments.map((item, index) => (
                    <AppointmentCard item={item} type={type || "upcoming"} key={index} />
                ))}
            </div>

            {/* Scrollable horizontal row for small screens */}
            <div className="flex lg:hidden py-2 overflow-x-auto space-x-5">
                {popularTreatments.map((item, index) => (
                    <div key={index} className="flex-shrink-0 w-[80%] sm:w-[60%]">
                        <AppointmentCard item={item} type={type || "upcoming"} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AppointmentsList