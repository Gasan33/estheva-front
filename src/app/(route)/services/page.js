"use client"
import React from 'react'
import HeaderPath from "../../../components/common/HeaderPath"
import ServiceList from '@/components/common/ServiceList';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import Image from 'next/image';
// import Carousel from "./_components/carousel/Carousel"
import ServiceType from "./_components/ServiceType"

// const slides = [
//     "https://cdn.create.vista.com/downloads/d51c4275-aced-4107-aae8-8a2adf1c71b4_1024.jpeg",
//     "https://i.pinimg.com/736x/bd/c8/89/bdc889ac1321f267146ae42f98122898.jpg",
//     "https://i.pinimg.com/736x/59/60/0f/59600f59cd4b23b279e290b9617b9310.jpg",
// ]

const Services = () => {
    return (
        <div className='m-4 md:m-16'>
            <HeaderPath title="Services" path="/services" desc="Dedicated to Providing Comprehensive and Personalized Healthcare Services, Ensuring Your Wellness, Comfort, and Peace of Mind Every Step of the Way." />

            <div>
                {/* <Carousel /> */}
                {/* <Swiper className='mb-8' spaceBetween={20} slidesPerView={1} loop={true} pagination={{ clickable: true }}>
                    {
                        slides.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-blue-300 w-full h-96 rounded-lg overflow-clip">
                                    <img src={item} alt={item} className='w-full h-96 object-cover' />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper> */}
                <div className='flex flex-col  h-96 w-full p-8'>
                    <div className='gap-4'>
                        <h1 className='text-[32px] text-primary font-semibold'>Service Type</h1>
                        <p className='text-[18px] text-gray-950 font-normal'>Choose your desired services weather in clinic, home, or office we can reach anywhere just for you.</p>
                    </div>

                    <ServiceType />

                </div>

                <div className='mt-8'>
                    <div className='gap-4'>
                        <h1 className='text-[32px] text-primary font-semibold'>Top Rated Services</h1>
                        <p className='text-[18px] text-gray-950 font-normal'>Where Satisfaction Meets Perfection.</p>
                    </div>
                    <ServiceList />
                </div>
                <div className='mt-8'>
                    <div className='gap-4'>
                        <h1 className='text-[32px] text-primary font-semibold'>Pupolar Services</h1>
                        <p className='text-[18px] text-gray-950 font-normal'>Where Satisfaction Meets Perfection.</p>
                    </div>
                    <ServiceList />
                </div>

            </div>



        </div>
    )
}

export default Services