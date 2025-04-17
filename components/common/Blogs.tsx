"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowRight01Icon } from "hugeicons-react";
import ViewAllText from "./ViewAllText";
import { formatMonthDate } from "@/lib/utils";
import LandingPageBlogsSkeleton from "../skeletons/LandingPageBlogsSkeleton";

const Blogs: React.FC = () => {
    const [blogs, setBlogs] = useState<Blog[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    const getBlogs = async () => {
        try {
            const response = await fetch(`/api/blogs`);
            const result = await response.json();
            setBlogs(result.data.data);
        } catch (err) {
            setError("Failed to load blogs.");
        }
    };

    useEffect(() => {
        getBlogs();
    }, []);

    if (error) {
        return <div className="text-red-500 text-center py-8">{error}</div>;
    }

    if (!blogs) {
        return <LandingPageBlogsSkeleton />;
    }

    return (
        <section className="mx-0 my-16 w-full px-4 sm:px-6 lg:px-32">
            <ViewAllText href="/blogs" title="Blogs & News" titleColor="text-primary" />

            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 7000, disableOnInteraction: false }}
                breakpoints={{
                    768: { slidesPerView: 2, spaceBetween: 24 },
                    1024: { slidesPerView: 3, spaceBetween: 32 },
                }}
                className="mt-8 pb-12"
            >
                {blogs.map((blog, index) => (
                    <SwiperSlide key={blog.id} className="px-4">
                        <article
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="pb-8 space-y-4"
                        >
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                width={400}
                                height={400}
                                className="w-full h-[300px] object-cover shadow-sm"
                            />
                            <div className="flex items-center justify-between text-sm text-gray-500">
                                <span className="py-1 px-2 rounded-full border border-gray-300">
                                    Blogs
                                </span>
                                <span>{formatMonthDate(blog.created_at)}</span>
                            </div>
                            <h2 className="text-gray-800 font-semibold text-lg md:text-xl lg:text-2xl line-clamp-2">
                                {blog.title}
                            </h2>
                            <p className="text-[#5b7e95] text-sm md:text-base line-clamp-3">
                                {blog.short_description}
                            </p>
                            <Link
                                href={`/blogs/${blog.slug}`}
                                className="flex gap-2 items-center text-primaryColor font-medium mt-2 group"
                            >
                                <span className="text-base group-hover:underline">Explore More</span>
                                <ArrowRight01Icon size={20} />
                            </Link>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Blogs;
