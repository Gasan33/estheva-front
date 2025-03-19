"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import RatingBar from "../common/RatingBar";
import { ArrowRightIcon, ArrowLeftIcon } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import config from "@/lib/config";


const testimonials = [
    {
        id: 1,
        name: "Dianne Russel",
        service: "Fat Reduction Injections",
        image: "/images/user1.jpg",
        rating: 4,
        feedback:
            "Dedicated to delivering world-class healthcare services with a focus on quality, innovation, and personalized care. Our team of experienced professionals ensures a comprehensive approach to health and wellness. At Estheva, your health is our priority.",
        testimonialImage: "/images/testimonials.jpg",
    },
    {
        id: 2,
        name: "John Doe",
        service: "Skin Rejuvenation",
        image: "/images/user2.jpg",
        rating: 5,
        feedback:
            "Estheva has truly changed my life. The staff is caring, the treatments are top-notch, and I always feel my best after every visit. Highly recommended!",
        testimonialImage: "/images/testimonials2.jpg",
    },
];

const Testimonials = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [reviews, setReviews] = useState<Review[]>([]);

    const fetchReviews = async () => {
        try {
            const response = await fetch(`/api/reviews`);
            const data = await response.json();
            console.log(data)
            if (data.length > 10) { setReviews(data.slice(0, 10)) } else { setReviews(data); };
        } catch (error) {
            console.error("Error fetching treatments:", error);
        }
    };
    useEffect(() => {
        fetchReviews();
    }, []);

    if (!reviews) return <div>loading..</div>
    return (
        <div className="w-full px-4 py-12 sm:px-6 lg:px-32">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                modules={[Navigation, Autoplay]}
                className="relative w-full"
                onInit={(swiper) => {
                    if (swiper.navigation) {
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }
                }}
            >
                {reviews.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        <div className="flex flex-col md:flex-row items-center gap-8 px-4 py-8">
                            {/* Image Section */}
                            <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
                                {/* Main Image */}
                                <Image
                                    src={testimonial.treatment?.images[0] ?? "/images/pic1.png"}
                                    fill
                                    alt="Testimonial"
                                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 400px"
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>

                            {/* Text Section */}
                            <div className="max-w-lg md:w-1/2 py-4">
                                <div className="border-b pb-6">
                                    <h3 className="text-lg font-medium text-primary sm:text-xl">
                                        What Our Patients Says About Our Treatments
                                    </h3>
                                    <h2 className="text-2xl font-semibold mt-2 text-gray-900 sm:text-3xl">
                                        {testimonial.treatment?.title}
                                    </h2>
                                </div>

                                {/* Rating Bar */}
                                <RatingBar readOnly={true} valueOfRating={testimonial.rating} />

                                {/* Feedback */}
                                <p className="mt-4 text-gray-700 text-sm sm:text-base line-clamp-3">
                                    {testimonial.review_text}
                                </p>

                                {/* User & Navigation */}
                                <div className="flex flex-col sm:flex-row items-center justify-between mt-4 gap-4">
                                    {/* User Info */}
                                    <div className="flex items-center gap-4">
                                        <Image
                                            src={testimonial.patient.profile_picture ?? "/images/noavatar.png"}
                                            alt={testimonial.patient.name}
                                            width={64}
                                            height={64}
                                            className="w-16 h-16 object-cover rounded-lg"
                                        />
                                        <div>
                                            <p className="text-base font-semibold text-gray-900">
                                                {testimonial.patient.name}
                                            </p>
                                            <p className="text-sm font-medium text-gray-500">
                                                {testimonial.treatment?.title}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Navigation Buttons */}
                                    <div className="flex gap-4">
                                        <div
                                            ref={prevRef}
                                            className="flex justify-center items-center text-primary rounded-md border-2 border-primary p-2 hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:bg-primary hover:text-white hover:border-primary cursor-pointer"
                                        >
                                            <ArrowLeftIcon />
                                        </div>
                                        <div
                                            ref={nextRef}
                                            className="flex justify-center items-center text-primary rounded-md border-2 border-primary p-2 hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:bg-primary hover:text-white hover:border-primary cursor-pointer"
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
        </div>
    );
};

export default Testimonials;
