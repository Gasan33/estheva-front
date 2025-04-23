"use client";

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import config from '@/lib/config';
import BookAppointment from '@/components/common/BookAppointment/BookAppointment';
import Link from 'next/link';
import { imageFormater } from '@/lib/utils';



const Consultation = () => {
    const [treatment, setTreatment] = useState<Treatment>();
    const [onlineDoctors, setOnlineDoctors] = useState<Doctor[]>([]);
    const [error, setError] = useState<string | null>(null);

    const phoneNumber = "+971501234567";


    const getOnlineDoctors = async () => {
        try {
            const response = await fetch(`/api/onlineDoctors`);
            if (!response.ok) throw new Error("Failed to fetch doctors");
            const data = await response.json();
            console.log(data)
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
        <div className='w-full px-4 py-16 sm:px-6 lg:px-16 flex flex-col justify-between'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg md:text-[28px] lg:text-[32px] text-primary font-semibold'>Consultation</h1>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 w-full'>
                {onlineDoctors.map((doctor) => (
                    <div
                        key={doctor.id}
                        className='group relative rounded-xl bg-white shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden cursor-pointer'
                    >
                        <div className='w-full h-60 relative'>
                            <Image
                                src={doctor.user.profile_picture ? imageFormater(doctor.user.profile_picture) : "/images/noavatar.png"}
                                alt={doctor.user.name ?? "user"}
                                layout='fill'
                                objectFit='cover'
                                className='rounded-t-xl object-[0px,-80px]'
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

                            <BookAppointment treatment={treatment!} triger='online' />

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
