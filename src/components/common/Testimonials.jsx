"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import RatingBar from './RatingBar'
import { ArrowRightIcon, ArrowLeftIcon } from 'lucide-react'

const Testimonials = () => {
    const [columns, setColumns] = useState(9);
    const [items, setItems] = useState(56);
    const gridItems = Array.from({ length: items }, (_, index) => `Item ${index + 1}`);
    return (
        <div className="mx-auto flex px-4 py-16 sm:px-6 lg:px-32 gap-16">


            <div className="relative   w-full h-[400px] ">
                <div className={`absolute grid grid-cols-7 gap-5 bottom-[-32px] left-[-120px] `}>
                    {gridItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-secondary p-1 rounded-full h-1 w-1"
                        >

                        </div>
                    ))}
                </div>
                <div className="absolute rounded-lg mr-4 w-full h-full">
                    <Image src='/testimonials.jpg' fill alt='Book Now' sizes='400' className='w-full h-full object-cover rounded-xl' />
                </div>
            </div>

            <div className="max-w-lg md:max-w-none py-4  ">
                <div className='border-b pb-6'>
                    <h3 className="text-xl font-[500] text-primary sm:text-xl">
                        About Us
                    </h3>
                    <h2 className="text-2xl font-[600] mt-2 text-gray-900 sm:text-4xl">
                        What Our Patient Says
                    </h2>
                    <h2 className="text-2xl font-[600] mt-2 text-gray-900 sm:text-4xl">
                        About Us.
                    </h2>
                </div>
                <RatingBar readOnly={true} valueOfRating={4} />

                <p className=" text-gray-700 line-clamp-3">
                    dedicated to delivering world-class healthcare services with a focus on quality, innovation, and personalized care. Our team of experienced professionals and state-of-the-art facilities ensure a comprehensive approach to health and wellness. At Estheva, your health is our priority.                        </p>
                <div className='flex items-center mt-4 justify-between'>
                    <div className='flex gap-4'>
                        <img src="/user1.jpg" alt="" className='w-16 h-16 object-cover rounded-lg' />

                        <div className='flex flex-col justify-center '>
                            <label className="text-[16px] font-semibold text-gray-900">
                                Dianne Russel
                            </label>
                            <label className="text-[14px] font-[500] text-gray-900">
                                Fat reduction Injections
                            </label>
                        </div>
                    </div>

                    <div className='flex gap-4'>

                        <div className='flex justify-center text-primary rounded-md border-2 border-primary p-2 hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:bg-primary hover:text-white hover:border-primary cursor-pointer'>
                            <ArrowLeftIcon />
                        </div>
                        <div className='flex justify-center text-primary rounded-md border-2 border-primary p-2 hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:bg-primary hover:text-white hover:border-primary cursor-pointer'>
                            <ArrowRightIcon />
                        </div>

                    </div>
                </div>

            </div>





        </div>
    )
}

export default Testimonials