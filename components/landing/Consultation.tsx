"use client"
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import BookAppointment from '../common/BookAppointment/BookAppointment';
import config from '@/lib/config';

const data = [
    {
        id: 1,
        name: "Dr. Mathew Jr.",
        img: "/images/doc1.jpg",
        specialization: "Physiotherapy",
    },
    {
        id: 2,
        name: "Dr. Hithen Pan.",
        img: "/images/doc2.jpg",
        specialization: "Slimming",
    },
    {
        id: 3,
        name: "Dr. Mario Andaloro.",
        img: "/images/doc3.jpg",
        specialization: "General",
    },
];

const Consultation = () => {
    const [treatment, setTreatment] = useState<Treatment>();

    const [error, setError] = useState<string | null>(null);

    const getTreatmentDetails = async () => {
        try {
            const response = await fetch(`${config.env.apiEndpoint}/treatments/39`);

            if (!response.ok) {
                throw new Error("Failed to fetch treatments");
            }
            const data = await response.json();
            console.log(data.data)
            setTreatment(data.data);
            console.log(data)

        } catch (error: any) {
            setError(error.message);
        }
    }

    useEffect(() => {
        getTreatmentDetails();

    }, []);
    return (
        <div className='w-full px-4 py-16 sm:px-6 lg:px-16 flex flex-col items-center'>
            <h2 className='text-2xl font-semibold text-gray-900 text-center sm:text-3xl'>
                Meet Our Specialist Online Consultation Doctors
            </h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-full max-w-6xl'>
                {data.map((item) => (
                    <div key={item.id} className='rounded-xl bg-white shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden cursor-pointer'>
                        <div className='w-full h-60 relative'>
                            <Image
                                src={item.img}
                                alt={item.name}
                                layout='fill'
                                objectFit='cover'
                                className='rounded-t-xl'
                            />
                        </div>
                        <div className='p-4 '>
                            <h1 className='text-xl font-medium text-gray-900'>{item.name}</h1>
                            <h2 className='mt-2 text-primary'>{item.specialization}</h2>
                            <p className='mt-2 text-sm text-gray-700'>
                                Dr. {item.name} has extensive experience in all aspects of adult healthcare, specializing in {item.specialization}.
                            </p>
                            <BookAppointment treatment={treatment!} triger='online' />

                            {/* <Button className='mt-4 w-full bg-teal-500 uppercase font-thin text-white'>Make AN Appointment</Button> */}
                        </div>
                    </div>
                ))}
            </div>

            {/* <div className='flex gap-4 mt-12'>
                <Button variant='outline' size='icon' className='border-gray-600 text-primary hover:bg-primary hover:text-white'>
                    <ArrowLeftIcon />
                </Button>
                <Button variant='outline' size='icon' className='border-gray-600 text-primary hover:bg-primary hover:text-white'>
                    <ArrowRightIcon />
                </Button>
            </div> */}
        </div>
    );
};

export default Consultation;
