"use client"
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRightIcon, CalendarIcon } from "lucide-react";
import Link from "next/link";
import { blogs } from "@/constants";
import { ArrowRight01Icon } from "hugeicons-react";

const Blogs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Automatically update the active index every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % blogs.length);
        }, 3000); // Change slides every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mx-0 my-16 w-full items-center justify-center px-4 py-8 sm:px-6 lg:px-32">
            {/* Header */}
            <div className="items-center text-center">
                <h3 className="text-lg sm:text-xl text-primary">
                    Blogs & News
                </h3>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold mt-4 text-gray-900">
                    Let's See Our Latest Blog & News
                </h2>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-10">
                {/* Left Section */}
                <div className="relative w-full">
                    <div className="rounded-lg p-4 w-full h-full">
                        <div className="bg-white rounded-xl w-full h-64 sm:h-80 md:h-96 overflow-hidden">
                            <img
                                src={blogs[activeIndex]?.img}
                                alt="Blog Now"
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                        <div className="flex w-full py-4 items-center justify-between text-sm sm:text-base">
                            <div className="flex items-center gap-2">
                                <img
                                    src={blogs[activeIndex]?.img}
                                    alt={blogs[activeIndex]?.author}
                                    className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
                                />
                                <span>By {blogs[activeIndex]?.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CalendarIcon size={20} />
                                <span>{blogs[activeIndex]?.date}</span>
                            </div>
                        </div>
                        <div className="w-full py-4">
                            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
                                {blogs[activeIndex]?.title}
                            </h2>
                        </div>
                        <div className="w-full py-4">
                            <p className="text-gray-500 text-sm sm:text-base">
                                {blogs[activeIndex]?.des}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div>
                    {blogs.map((item, index) => {
                        const isActive = index === activeIndex;
                        const isNext = index === (activeIndex + 1) % blogs.length;

                        return (
                            <div
                                key={index}
                                className={`flex gap-4 p-4 h-56 sm:h-64 transition-transform duration-500 ${isActive
                                    ? "transform -translate-x-full opacity-0"
                                    : isNext
                                        ? "transform -translate-y-0 opacity-100"
                                        : "transform translate-y-full opacity-50"
                                    }`}
                            >
                                <div className="w-[30%]">
                                    <img
                                        src={item.img}
                                        alt=""
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                </div>
                                <div className="w-[70%]">
                                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                                        {item.title}
                                    </h2>
                                    <p className="text-gray-500 mt-2 sm:mt-4 text-sm sm:text-base line-clamp-4">
                                        {item.des}
                                    </p>
                                    <Link href={"/blogs/news"}>
                                        <span className="flex items-center gap-1 mt-4 text-primary text-sm sm:text-base">
                                            Read More
                                            <ArrowRightIcon size={16} />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex justify-center mt-8">
                <Link href={"/blogs/news"}>
                    <Button className="py-4 px-6 rounded-full bg-white shadow-lg">
                        See More Blogs
                        <ArrowRight01Icon size={24} className="text-primaryColor ml-2" />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Blogs;
