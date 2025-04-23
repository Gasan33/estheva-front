"use client";

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import BookAppointment from './BookAppointment/BookAppointment';
import Link from 'next/link';
import { imageFormater } from '@/lib/utils';
import OnlineConsultationBooking from '../dialogs/OnlineConsultationBooking';

const Consultation = () => {
    const [treatment, setTreatment] = useState<Treatment>();
    const [onlineDoctors, setOnlineDoctors] = useState<Doctor[]>([]);
    const [error, setError] = useState<string | null>(null);

    const phoneNumber = "+97143309084";

    const getOnlineDoctors = async () => {
        try {
            const response = await fetch(`/api/onlineDoctors`);
            if (!response.ok) throw new Error("Failed to fetch doctors");
            const data = await response.json();
            setOnlineDoctors(data);
        } catch (error: any) {
            setError(error.message);
        }
    };

    const getTreatmentDetails = async () => {
        try {
            const response = await fetch(`/api/treatments/39`);
            if (!response.ok) throw new Error("Failed to fetch treatments");
            const data = await response.json();
            setTreatment(data.data);
        } catch (error: any) {
            setError(error.message);
        }
    };

    useEffect(() => {
        getOnlineDoctors();
        getTreatmentDetails();
    }, []);

    return (
        <div className='w-full px-4 py-16 sm:px-6 lg:px-16 flex flex-col items-center'>
            <h2 className='text-xl font-semibold text-gray-900 text-center mb-2 sm:text-2xl'>
                Do You Need More Information About The Treatments?
            </h2>
            <h2 className='text-2xl font-semibold text-gray-900 text-center sm:text-3xl'>
                Book A Free <span className='text-primary'>Consultaion</span> with Our Doctors
            </h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 w-full max-w-6xl'>
                {onlineDoctors.map((doctor) => (
                    <div
                        key={doctor.id}
                        className='group relative rounded-xl bg-white shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden cursor-pointer'
                    >
                        <div className='w-full h-60 relative'>
                            <Image
                                src={doctor.user.profile_picture ? imageFormater(doctor.user.profile_picture) : "/images/noavatar.png"}
                                alt={doctor.user.name ?? "user"}
                                fill
                                className='rounded-t-xl object-[0px,-80px] object-cover'
                            />

                            {/* Social Icons on hover */}
                            <div className='absolute bottom-4 left-[-60px] group-hover:left-4 transition-all duration-300 flex flex-col space-y-2 z-10'>
                                {/* <Link href={item.linkedIn} target='_blank' rel='noopener noreferrer'>
                                    <div className='bg-white p-2 rounded-full shadow hover:bg-blue-600 hover:text-white transition-colors'>
                                        <Linkedin01Icon size={16} />
                                    </div>
                                </Link> */}
                                <Link href={`https://wa.me/${doctor.user.phone_number.replace('+', '')}`} target='_blank' rel='noopener noreferrer'>
                                    <div className='bg-white p-2 rounded-full shadow hover:bg-green-500 hover:text-white transition-colors'>
                                        <FaWhatsapp size={16} />
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className='p-4'>
                            <h1 className='text-xl font-medium text-gray-900'>{doctor.user.name}</h1>
                            <h2 className='mt-1 text-primary'>{doctor.specialty}</h2>
                            <p className='mt-2 text-sm text-gray-700 line-clamp-3'>
                                {doctor.about}
                            </p>

                            <OnlineConsultationBooking doctor={doctor!} />

                            <Button
                                onClick={() => window.location.href = `tel:${phoneNumber}`}
                                className='mt-4 w-full bg-primaryColor uppercase font-thin text-white'
                            >
                                Speak with a Doctor
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Consultation;
