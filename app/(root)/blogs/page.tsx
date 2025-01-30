"use client"
import { useEffect } from "react";
import Image from "next/image";
import HeaderPath from "../../../components/common/HeaderPath";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { blogs } from "@/constants";
import { ArrowRight01Icon } from "hugeicons-react";

const Blogs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='mt-6'>
            <HeaderPath title="News & Blogs" path="/blogs" showSearchBar={false} />

            <div className="pb-4 mt-4 md:pb-6 lg:pb-20 px-4 md:px-8 lg:px-12 xl:px-16 blogs-wrapper">
                <div className="bg-pattern">
                    <h3 className="text-primary text-2xl md:text-2xl lg:text-3xl xl:text-4xl">
                        Featured News
                    </h3>

                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={0}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 1, spaceBetween: 0 },
                            768: { slidesPerView: 1, spaceBetween: 0 },
                            1024: { slidesPerView: 1, spaceBetween: 0 },
                        }}
                    >
                        {blogs.map((blog) => (
                            <SwiperSlide key={blog.id} className="px-4">
                                <div
                                    className="grid grid-cols-1 lg:grid-cols-2 mt-4 md:mt-6 lg:mt-8 xl:mt-12 gap-8 md:gap-4 lg:gap-6 xl:gap-8"
                                    data-aos="fade-up"
                                >
                                    <div
                                        className="w-full bg-green-500 rounded-lg overflow-clip md:max-h-[80%]"
                                        data-aos="zoom-in"
                                    >
                                        <Image
                                            src={blog.img}
                                            alt={blog.title}
                                            width={400}
                                            height={400}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="w-full pb-16">
                                        <div className="flex items-center justify-between">
                                            <label className="py-1 px-2 rounded-full border-solid border-[0.5px] border-gray-400 text-sm text-gray-500 font-semibold">
                                                Blogs
                                            </label>
                                            <label className="text-sm text-gray-500 font-semibold">
                                                {blog.date}
                                            </label>
                                        </div>
                                        <h1 className="mt-4 text-gray-800 font-thin text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                                            {blog.title}
                                        </h1>
                                        <p className="mt-4 text-[#5b7e95] font-medium md:font-thin text-sm md:text-lg lg:text-xl xl:text-2xl">
                                            {blog.des}
                                        </p>
                                        <Link
                                            href={`/blogs/${blog.id}`}
                                            className="flex gap-2 xl:gap-4 items-center cursor-pointer mt-8"
                                        >
                                            <span className="text-lg xl:text-xl text-primaryColor">
                                                Explore More
                                            </span>
                                            <ArrowRight01Icon
                                                className="text-primaryColor"
                                                size={24}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <h3 className="text-primary my-4 md:my-6 lg:my-8 xl:my-12 text-2xl md:text-2xl lg:text-3xl xl:text-4xl">
                    Estheva Polyclinic Posts
                </h3>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {blogs.map((blog, index) => (
                        <div
                            key={blog.id}
                            data-aos="fade-up"
                            data-aos-delay={`${index * 100}`}
                        >
                            <Image
                                src={blog.img}
                                alt={blog.title}
                                className="object-cover w-full h-[300px] rounded-lg"
                                width={400}
                                height={400}
                            />
                            <div className="flex items-center justify-between mt-4">
                                <label className="py-1 px-2 rounded-full border-solid border-[0.5px] border-gray-400 text-sm text-gray-500 font-thin">
                                    Blogs
                                </label>
                                <label className="text-sm text-gray-500 font-normal">
                                    {blog.date}
                                </label>
                            </div>
                            <h1 className="mt-4 text-gray-800 font-thin text-lg md:text-xl lg:text-2xl xl:text-3xl">
                                {blog.title}
                            </h1>
                            <p className="mt-4 text-[#5b7e95] font-thin text-sm md:text-lg line-clamp-3">
                                {blog.des}
                            </p>
                            <Link
                                href={`/blogs/${blog.id}`}
                                className="flex gap-2 xl:gap-4 items-center cursor-pointer mt-8"
                            >
                                <span className="text-lg xl:text-xl text-primaryColor">
                                    Explore More
                                </span>
                                <ArrowRight01Icon
                                    className="text-primaryColor"
                                    size={24}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
