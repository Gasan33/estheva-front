"use client";
import React, { useState } from 'react';
import { Location01Icon } from 'hugeicons-react';
import Image from 'next/image';
import CancelAppointmentDailog from './CancelAppointmentDailog';
import RescheduleAppointmentDailog from './RescheduleAppointmentDailog';
import ReviewDailog from './ReviewDailog';
import BookAppointment from './BookAppointment';
import AppointmentDetailsDailog from './AppointmentDetailsDailog';


const AppointmentCard = ({ item, type }: { item: Treatment, type?: string }) => {
    const { name, img, id, doctors } = item;


    return (
        <div
            className={`shadow-md rounded-[16px] cursor-pointer ${type === 'canceled' ? 'h-48 pb-0' : 'h-56 pb-2'
                }`}
        >
            <AppointmentDetailsDailog item={item} type={type} />

            <div className="flex gap-4 w-full items-center px-2 mt-2">
                {type === 'canceled' ? (
                    <></>
                ) : type === 'completed' ? (
                    <>
                        <ReviewDailog />
                        <BookAppointment treatment={item} triger="profile" />
                    </>
                ) : (
                    <>
                        <CancelAppointmentDailog />
                        <RescheduleAppointmentDailog />
                    </>
                )}
            </div>
        </div>
    );
};

export default AppointmentCard;
