"use client";

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import config from '@/lib/config';
import BookAppointment from './BookAppointment/BookAppointment';
import { doctorConsultaion } from '@/constants';
import Link from 'next/link';
import { Linkedin01Icon } from 'hugeicons-react';


const Consultation = () => {
    const [treatment, setTreatment] = useState<Treatment>();
    const [error, setError] = useState<string | null>(null);


    const phoneNumber = "+971501234567";

    const getTreatmentDetails = async () => {
        try {
            const response = await fetch(`${config.env.apiEndpoint}/treatments/39`);
            if (!response.ok) throw new Error("Failed to fetch treatments");
            const data = await response.json();
            setTreatment(data.data);
        } catch (error: any) {
            setError(error.message);
        }
    };

    useEffect(() => {
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
                {doctorConsultaion.map((item) => (
                    <div
                        key={item.id}
                        className='group relative rounded-xl bg-white shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden cursor-pointer'
                    >
                        <div className='w-full h-60 relative'>
                            <Image
                                src={item.img}
                                alt={item.name}
                                layout='fill'
                                objectFit='cover'
                                className='rounded-t-xl'
                            />

                            {/* Social Icons on hover */}
                            <div className='absolute bottom-4 left-[-60px] group-hover:left-4 transition-all duration-300 flex flex-col space-y-2 z-10'>
                                <Link href={item.linkedIn} target='_blank' rel='noopener noreferrer'>
                                    <div className='bg-white p-2 rounded-full shadow hover:bg-blue-600 hover:text-white transition-colors'>
                                        <Linkedin01Icon size={16} />
                                    </div>
                                </Link>
                                <Link href={`https://wa.me/${item.whatsapp.replace('+', '')}`} target='_blank' rel='noopener noreferrer'>
                                    <div className='bg-white p-2 rounded-full shadow hover:bg-green-500 hover:text-white transition-colors'>
                                        <FaWhatsapp size={16} />
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className='p-4'>
                            <h1 className='text-xl font-medium text-gray-900'>{item.name}</h1>
                            <h2 className='mt-1 text-primary'>{item.specialization}</h2>
                            <p className='mt-2 text-sm text-gray-700'>
                                Dr. {item.name} has extensive experience in all aspects of adult healthcare, specializing in {item.specialization}.
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
