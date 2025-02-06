"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import RatingBar from "../common/RatingBar";
import { ArrowRightIcon, ArrowLeftIcon } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Import Navigation for arrows and Autoplay for auto sliding
import "swiper/css";
import "swiper/css/navigation";


const Testimonials = () => {
    const [items] = useState(56);
    const gridItems = Array.from({ length: items }, (_, index) => `Item ${index + 1}`);

    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 4000, // 4 seconds per slide
                disableOnInteraction: false,
            }}
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation, Autoplay]}
            className="w-full"
            breakpoints={{
                640: { slidesPerView: 1 }, // For mobile devices
                768: { slidesPerView: 1 }, // For tablets
                1024: { slidesPerView: 1 }, // For desktops
            }}
        >
            <SwiperSlide >
                <div className="mx-auto flex flex-col md:flex-row px-4 py-12 sm:px-6 lg:px-32 gap-8 md:gap-16">
                    {/* Image Section */}
                    <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
                        {/* Decorative Grid */}
                        <div className="absolute grid grid-cols-7 gap-4 sm:gap-5 bottom-[-32px] left-[-120px]">
                            {gridItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-secondary p-1 rounded-full h-1 w-1"
                                ></div>
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="absolute rounded-lg w-full h-full">
                            <Image
                                src="/images/testimonials.jpg"
                                fill
                                alt="Book Now"
                                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 400px"
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="max-w-lg md:w-1/2 py-4">
                        <div className="border-b pb-6">
                            <h3 className="text-lg font-medium text-primary sm:text-xl">
                                About Us
                            </h3>
                            <h2 className="text-2xl font-semibold mt-2 text-gray-900 sm:text-3xl">
                                What Our Patient Says
                            </h2>
                            <h2 className="text-2xl font-semibold mt-2 text-gray-900 sm:text-3xl">
                                About Us.
                            </h2>
                        </div>
                        <RatingBar readOnly={true} valueOfRating={4} />

                        <p className="mt-4 text-gray-700 text-sm sm:text-base line-clamp-3">
                            Dedicated to delivering world-class healthcare services with a
                            focus on quality, innovation, and personalized care. Our team of
                            experienced professionals and state-of-the-art facilities ensure
                            a comprehensive approach to health and wellness. At Estheva, your
                            health is our priority.
                        </p>

                        {/* User and Navigation Section */}
                        <div className="flex flex-col sm:flex-row items-center justify-between mt-4 gap-4">
                            {/* User Info */}
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/images/user1.jpg"
                                    alt="User"
                                    width={64}
                                    height={64}
                                    className="w-16 h-16 object-cover rounded-lg"
                                />
                                <div>
                                    <p className="text-base font-semibold text-gray-900">
                                        Dianne Russel
                                    </p>
                                    <p className="text-sm font-medium text-gray-500">
                                        Fat reduction Injections
                                    </p>
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex gap-4">
                                <div className="flex justify-center items-center text-primary rounded-md border-2 border-primary p-2 hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:bg-primary hover:text-white hover:border-primary cursor-pointer">
                                    <ArrowLeftIcon />
                                </div>
                                <div className="flex justify-center items-center text-primary rounded-md border-2 border-primary p-2 hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:bg-primary hover:text-white hover:border-primary cursor-pointer">
                                    <ArrowRightIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>

    );
};

export default Testimonials;
