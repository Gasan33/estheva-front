"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { blogs } from "@/constants";
import { ArrowRight01Icon } from "hugeicons-react";
import ViewAllText from "../common/ViewAllText";

const Blogs = () => {
    return (
        <div className="mx-0 my-16 w-full items-center justify-center px-4  sm:px-6 lg:px-32">
            <ViewAllText href="/blogs" title="Blogs & News" titleColor="text-primary" />

            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                    768: { slidesPerView: 2, spaceBetween: 24 },
                    1024: { slidesPerView: 3, spaceBetween: 32 },
                }}
                className="mt-8 pb-8"
            >
                {blogs.map((blog, index) => (
                    <SwiperSlide key={blog.id} className="px-4 mb-8 ">
                        <div data-aos="fade-up" data-aos-delay={`${index * 100}`} className="pb-8">
                            <Image
                                src={blog.img}
                                alt={blog.title}
                                className="object-cover w-full h-[300px] rounded-lg"
                                width={400}
                                height={400}
                            />
                            <div className="flex items-center justify-between mt-4">
                                <span className="py-1 px-2 rounded-full border border-gray-400 text-sm text-gray-500">
                                    Blogs
                                </span>
                                <span className="text-sm text-gray-500">{blog.date}</span>
                            </div>
                            <h1 className="mt-4 text-gray-800 font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl">
                                {blog.title}
                            </h1>
                            <p className="mt-4 text-[#5b7e95] text-sm md:text-lg line-clamp-3">
                                {blog.des}
                            </p>
                            <Link
                                href={`/blogs/${blog.id}`}
                                className="flex gap-2 xl:gap-4 items-center mt-6 text-primaryColor"
                            >
                                <span className="text-lg xl:text-xl">Explore More</span>
                                <ArrowRight01Icon size={24} />
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default Blogs;
