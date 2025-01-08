"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ArrowRightIcon } from 'lucide-react'

const AboutUs = () => {
    const [columns, setColumns] = useState(9);
    const [items, setItems] = useState(40);
    const gridItems = Array.from({ length: items }, (_, index) => `Item ${index + 1}`);

    return (
        <div className="mx-auto  px-4 py-8 sm:px-6 lg:px-8">

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center  md:gap-8">
                <div className="relative w-full mt-16 h-[600px] ">

                    <div className={`absolute grid grid-cols-5 gap-8 bottom-24 left-[-32px] `}>
                        {gridItems.map((item, index) => (
                            <div
                                key={index}
                                className="bg-secondary p-1 rounded-full h-1 w-1"
                            >

                            </div>
                        ))}
                    </div>


                    <div className="absolute top-12 left-[6%] w-[80%] h-[50%] rounded-xl border-2 solid border-primary  bg-transparent ">

                    </div>

                    <div className="absolute top-24 left-[12%] rounded-lg  w-[80%] h-[60%]">
                        <Image src='/about.jpg' fill alt='Book Now' sizes='400' className='w-full h-full object-cover rounded-xl' />
                    </div>
                </div>
                <div>
                    <div className="max-w-lg md:max-w-none">
                        <h3 className="text-xl font-[500] text-primary sm:text-xl">
                            About Us
                        </h3>
                        <h2 className="text-2xl font-bold mt-2 text-gray-900 sm:text-2xl">
                            We Are Fully Available to
                        </h2>
                        <h2 className="text-2xl font-bold mt-4 text-primary sm:text-2xl">
                            Support With You
                        </h2>
                        <p className="mt-4 text-gray-700">
                            dedicated to delivering world-class healthcare services with a focus on quality, innovation, and personalized care. Our team of experienced professionals and state-of-the-art facilities ensure a comprehensive approach to health and wellness. At Estheva, your health is our priority.                        </p>
                        <div className='lg:flex lg:gap-4 gap-2 items-center'>
                            <Button className='lg:mt-8 mt-4 py-6 px-8 rounded-lg shadow-lg'>
                                Descover More
                                <ArrowRightIcon />
                            </Button>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default AboutUs