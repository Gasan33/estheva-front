import React from 'react'
import FaqList from "./FaqList"
import { ArrowRightIcon, ArrowLeftIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
const data = [
    {
        id: 1,
        name: "Dr. Mathew Jr.",
        img: "/doc1.jpg",
        specialization: "Physiotherapy",
    },
    {
        id: 2,
        name: "Dr. Hithen Pan.",
        img: "/doc2.jpg",
        specialization: "Slimming",
    },
    {
        id: 3,
        name: "Dr. Mario Andaloro.",
        img: "/doc3.jpg",
        specialization: "General",
    },
]

const Consultation = () => {
    return (
        <div className='mx-0 bg-secondary w-full items-center justify-center px-4 py-16 sm:px-6 lg:px-32'>

            <div className='h-auto'>
                <h3 className="text-xl text-primary sm:text-xl">
                    Online Consultation
                </h3>
                <h2 className="text-2xl  font-[500] mt-4 text-gray-900 sm:text-3xl">
                    Meet Our Specialist Online Consultation Doctors
                </h2>

            </div>
            <div className='flex flex-col md:flex-row mx-auto mt-8 justify-between'>
                {
                    data.map((item, index) => (
                        <div key={index} className='mt-8 rounded-3xl bg-white overflow-clip hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:text-white cursor-pointer'>
                            <div className='w-full md:w-[300px]'>
                                <img src={item.img} alt={item.name} className='h-[300px] w-full object-cover' />
                            </div>
                            <div className='flex flex-col p-8 items-center'>
                                <h1 className='text-xl  font-[500]  text-gray-900 sm:text-2xl'>{item.name}</h1>
                                <h2 className='text-lg  font-[500] mt-2 text-primary sm:text-xl'>{item.specialization}</h2>

                            </div>

                        </div>
                    ))
                }

            </div>


            <div className='flex w-full mt-16 gap-4 justify-center'>
                <div className='flex justify-center text-primary rounded-full border-2 border-gray-600 p-2 hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:bg-primary hover:text-white hover:border-primary cursor-pointer'>
                    <ArrowLeftIcon />
                </div>
                <div className='flex justify-center text-primary rounded-full border-2 border-gray-600 p-2 hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:bg-primary hover:text-white hover:border-primary cursor-pointer'>
                    <ArrowRightIcon />
                </div>
            </div>

        </div>
    )
}

export default Consultation