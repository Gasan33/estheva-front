"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import RatingBar from "./RatingBar";
import { ArrowRightIcon, ArrowLeftIcon } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { TestimonialsSkeleton } from "../skeletons/TestimonialsSkeleton";
import { imageFormater } from "@/lib/utils";


const Testimonials = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [reviews, setReviews] = useState<Review[] | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchReviews = async () => {
        try {
            const response = await fetch(`/api/reviews`);
            const data = await response.json();
            setReviews(data.length > 10 ? data.slice(0, 10) : data);
        } catch (error) {
            console.error("Error fetching testimonials:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    if (loading || !reviews) return <TestimonialsSkeleton />;

    return (
        <section className="w-full px-4 py-16 sm:px-6 lg:px-32">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                // Use `navigation={true}` here first
                // navigation={true}
                modules={[Navigation, Autoplay]}
                className="relative"
                onInit={(swiper) => {
                    // Attach your refs directly on init
                    // This ensures Swiper picks them up properly
                    if (
                        swiper.params.navigation &&
                        typeof swiper.params.navigation !== "boolean"
                    ) {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
            >
                {reviews.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        <div className="flex flex-col md:flex-row items-center gap-8 px-4 py-8">
                            {/* Image Section */}
                            <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
                                <Image
                                    src={testimonial.treatment?.images[0] ?? "/images/pic1.png"}
                                    fill
                                    alt="Testimonial Image"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>

                            {/* Content */}
                            <div className="max-w-lg md:w-1/2 py-4">
                                <div className="border-b pb-6">
                                    <h3 className="text-lg font-medium text-primary sm:text-xl">
                                        What Our Patients Say
                                    </h3>
                                    <h2 className="text-2xl font-semibold mt-2 text-gray-900 sm:text-3xl">
                                        {testimonial.treatment?.title}
                                    </h2>
                                </div>

                                <RatingBar readOnly valueOfRating={testimonial.rating} />

                                <p className="mt-4 text-gray-700 text-sm sm:text-base line-clamp-4">
                                    {testimonial.review_text}
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-between mt-4 gap-4">
                                    {/* User Info */}
                                    <div className="flex items-center gap-4">
                                        <Image
                                            src={testimonial.patient.profile_picture ? imageFormater(testimonial.patient.profile_picture) : "/images/noavatar.png"}
                                            alt={testimonial.patient.name}
                                            width={64}
                                            height={64}
                                            className="w-16 h-16 object-cover rounded-lg"
                                        />
                                        <div>
                                            <p className="text-base font-semibold text-gray-900">
                                                {testimonial.patient.name}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {testimonial.treatment?.title}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Arrows */}
                                    <div className="flex gap-4">
                                        <div
                                            ref={prevRef}
                                            className="p-2 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
                                        >
                                            <ArrowLeftIcon />
                                        </div>
                                        <div
                                            ref={nextRef}
                                            className="p-2 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
                                        >
                                            <ArrowRightIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
