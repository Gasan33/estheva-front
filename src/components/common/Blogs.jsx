"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ArrowRightIcon, Calendar1Icon } from 'lucide-react'
import Link from 'next/link';

const data = [
    {
        author: "ESTHEVA",
        title: "Lymphatic drainage",
        topic: "MASSAGE",
        date: "21/08/2024",
        des: "Lymphatic drainage massage is more than just a relaxing treatment—it's a crucial part of maintaining overall well-being and a healthy body shape. At Estheva Polyclinic, we incorporate lymphatic drainage into our weight loss programs to help the body naturally detoxify and eliminate waste.",
        img: "https://estheva-polyclinic.com/cdn/shop/articles/Want_perfect_skin_17.png",
    },
    {
        author: "ESTHEVA",
        title: "IV Drip",
        topic: "BEAUTY",
        date: "15/01/2024",
        des: "IV Drip Therapy has gained significant attention in the wellness industry, especially in the UAE. Backed by recent medical research, IV Drips effectively deliver essential nutrients, antioxidants, and hydration directly into the bloodstream, providing quick and efficient benefits.",
        img: "https://estheva-polyclinic.com/cdn/shop/articles/9.png",
    },
    {
        author: "ESTHEVA",
        title: "Medical Laboratory",
        topic: "HEALTH",
        date: "07/05/2024",
        des: "As we age, it becomes crucial to monitor our health proactively. At Estheva Polyclinic in Dubai, we recommend 10 essential medical laboratory tests everyone over 40 should consider doing once a year to maintain optimal health. These tests help detect potential health issues early and enable timely interventions.",
        img: "https://estheva-polyclinic.com/cdn/shop/articles/Want_perfect_skin_16.png",
    },
    {
        author: "ESTHEVA",
        title: "Weight Loss",
        topic: "HEALTH",
        date: "12/12/2023",
        des: "If you're searching for the best weight loss programs in Dubai, Estheva Polyclinic offers personalized solutions tailored to your unique body composition. Our weight loss journey begins with a free consultation to assess your body composition using advanced tools. Understanding your body's fat distribution, muscle mass, and metabolic rate is essential to creating an effective weight loss plan. Based on these results, our expert doctors will design a program that combines non-invasive slimming treatments for optimal fat loss.",
        img: "https://estheva-polyclinic.com/cdn/shop/articles/Want_perfect_skin_15.png",
    },
]

const Blogs = () => {
    const [columns, setColumns] = useState(9);
    const [items, setItems] = useState(40);
    const gridItems = Array.from({ length: items }, (_, index) => `Item ${index + 1}`);

    return (
        <div className="mx-0 my-16 w-full items-center justify-center px-4 py-16 sm:px-6 lg:px-32">
            <div className='items-center'>
                <h3 className="text-xl flex justify-center text-primary sm:text-xl">
                    Blogs & News
                </h3>
                <h2 className="text-2xl flex justify-center font-[600] mt-8 text-gray-900 sm:text-[48px]">
                    Let's See Our leatest Blog & News
                </h2>
            </div>


            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 mt-10">
                <div className="relative w-full">
                    <div className={`absolute grid grid-cols-5 gap-4 top-24 left-[-120px] `}>
                        {gridItems.map((item, index) => (
                            <div
                                key={index}
                                className="bg-secondary p-1 rounded-full h-1 w-1"
                            >
                            </div>
                        ))}
                    </div>
                    <div className="rounded-lg p-4 w-full h-full">
                        <div className='bg-white rounded-xl h-[40%] w-full'>
                            <img src={data[0].img} alt='Book Now' className='w-full h-full object-cover rounded-xl' />
                        </div>
                        <div className='flex w-full py-4 items-center justify-between '>
                            <div className='flex items-center gap-2'>
                                <img src={data[0].img} alt='Maria Calzoni' className='w-10 h-10 object-cover rounded-sm' />
                                <span>By {data[0].author}</span>
                            </div>

                            <div className='flex items-center gap-2'>
                                <Calendar1Icon size={24} />
                                <span>{data[0].date}</span>
                            </div>

                        </div>
                        <div className='w-full py-4 '>
                            <h2 className="text-xl font-[700] text-gray-900 sm:text-2xl">
                                {data[0].title}
                            </h2>
                        </div>
                        <div className='w-full py-4 '>
                            <p className='text-gray-500'>
                                {data[0].des}
                            </p>
                        </div>

                    </div>
                </div>
                <div>
                    {data.map((item, index) => (
                        <div className="flex gap-4 p-4 h-56" key={index}>
                            <div className=' w-[30%]'>
                                <img src={item.img} alt="" className='w-[100%] h-full object-cover rounded-xl' />
                            </div>
                            <div className=' w-[70%]'>
                                <h2 className="text-xl font-[700] text-gray-900 sm:text-2xl">
                                    {item.title}
                                </h2>
                                <p className='text-gray-500 mt-4 line-clamp-4'>
                                    {item.des}                                </p>
                                <Link href={'/blogs/news'}>
                                    <span className='flex items-center gap-1 mt-4 text-primary'>
                                        Read More
                                        <ArrowRightIcon size={16} />
                                    </span>
                                </Link>
                            </div>


                        </div>
                    ))}

                </div>


            </div>
            <div className='lg:flex lg:gap-4 gap-2 mt-8 justify-center'>
                <Link href={'/blogs/news'}>
                    <Button className='lg:mt-8 mt-4 py-6 px-8 rounded-lg shadow-lg'>
                        See More Blogs
                        <ArrowRightIcon />
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Blogs