"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight01Icon } from "hugeicons-react";
import RatingBar from "./RatingBar";
import AOS from "aos";
import "aos/dist/aos.css";
import BookAppointment from "./BookAppointment/BookAppointment";
import config from "@/lib/config";
import TopRatedSkeleton from "../skeletons/TopRatedSkeleton";
import { imageFormater } from "@/lib/utils";

const TopRatedTreatments = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animate, setAnimate] = useState(false);
    const [treatments, setTreatments] = useState<Treatment[]>([]); // State for fetched treatments
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState<string | null>(null); // Error state

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        setAnimate(true);
        const timeout = setTimeout(() => setAnimate(false), 500);

        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % treatments.length);
        }, 10000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [activeIndex, treatments]);

    const fetchTopRatedTreatments = async () => {
        try {
            const response = await fetch(`${config.env.apiEndpoint}/treatments/top-rated`);

            if (!response.ok) {
                throw new Error("Failed to fetch treatments");
            }
            const data = await response.json();
            setTreatments(data.data);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTopRatedTreatments();
    }, []);

    if (loading) {
        return <TopRatedSkeleton />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="w-full items-center justify-center overflow-hidden px-4 py-8 sm:px-6 lg:px-16 bg-pattern">
            {/* Header */}
            <div className="flex text-gray-900 justify-between items-center">
                <h2 className="text-sm md:text-3xl lg:text-4xl font-semibold xl:font-normal text-gray-900">
                    Let's See Our Top Rated Treatments
                </h2>
                <div className="flex gap-2 xl:gap-4 items-center cursor-pointer duration-700 transform hover:scale-105 hover:duration-300">
                    <span className="text-sm xl:text-xl text-light-500">View All</span>
                    <ArrowRight01Icon className="text-primaryColor" size={24} />
                </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-10">
                {/* Left Section */}
                <div className={`rounded-lg p-4 h-[600px] w-full${animate ? "fade-in" : ""}`}>
                    <div className="rounded-xl w-full h-64 sm:h-80 md:h-96 xl:h-[50%] overflow-hidden">
                        <Image
                            src={treatments[activeIndex]?.images[0]}
                            alt="Top Treatment"
                            width={400}
                            height={400}
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                    <div className="flex w-full py-4 items-center justify-between text-sm sm:text-base">
                        <div className="flex items-center gap-2">
                            <Image
                                src={treatments[activeIndex]?.doctors[0].user.profile_picture ? imageFormater(treatments[activeIndex]?.doctors[0].user.profile_picture) : "/images/noavatar.png"}
                                alt={treatments[activeIndex]?.doctors[0].user.name}
                                width={50}
                                height={50}
                                className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
                            />
                            <span>By {treatments[activeIndex]?.doctors[0].user.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <RatingBar
                                readOnly
                                valueOfRating={treatments[activeIndex]?.reviews[0].rating || 0}
                            />
                            <span>{treatments[activeIndex]?.reviews[0].rating}</span>
                        </div>
                    </div>
                    <div className="w-full py-4">
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
                            {treatments[activeIndex]?.title}
                        </h2>
                    </div>
                    <div className="w-full py-4">
                        <p className="text-gray-500 text-sm sm:text-base line-clamp-3" dangerouslySetInnerHTML={{ __html: treatments[activeIndex]?.description }} />

                    </div>
                    <div className="flex gap-4 mt-4">
                        <Link
                            href={`/treatments/${treatments[activeIndex].id}`}
                            className="flex gap-1 font-medium text-primaryColor"
                        >
                            View Details
                            <ArrowRight01Icon />
                        </Link>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex flex-col gap-4 transition-transform duration-500">
                    {treatments.map((item, index) => {
                        const position = (index - activeIndex + treatments.length) % treatments.length;
                        const isActive = position === 0;
                        const isNext = position === 1;
                        const isNextNext = position === 2;
                        const isVisible = isNext || isNextNext;

                        return (
                            <div
                                key={index}
                                className={`flex gap-4 p-4 h-56 sm:h-64 transform transition-transform duration-500 ease-in-out
                                                  ${isActive ? "scale-105 opacity-100 translate-y-0" : ""}
                                                  ${isNext ? "scale-100 opacity-90 translate-y-2 " : ""}
                                                  ${isNextNext ? "scale-95 opacity-80 translate-y-4" : ""}
                                                  ${isVisible ? "block" : "hidden"}`}
                            >
                                <div className="w-[30%]">
                                    <Image
                                        src={item.images[0]}
                                        alt={item.title}
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                </div>
                                <div className="w-[70%]">
                                    <h2 className="text-lg sm:text-xl font-semibold line-clamp-2 xl:line-clamp-none text-gray-900">
                                        {item.title}
                                    </h2>
                                    <p className="text-gray-500 mt-2 sm:mt-4 text-sm sm:text-base line-clamp-4" dangerouslySetInnerHTML={{ __html: item.description }} />

                                    <div className="flex justify-between mt-4">
                                        <Link
                                            href={`/treatments/${item.id}`}
                                            className="flex items-center gap-0 md:gap-1 text-xs font-thin md:text-sm md:font-medium text-primaryColor"
                                        >
                                            View Details
                                            <ArrowRight01Icon className="h-4 md:h-6" />
                                        </Link>

                                        <BookAppointment treatment={item} triger="home" />

                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TopRatedTreatments;
