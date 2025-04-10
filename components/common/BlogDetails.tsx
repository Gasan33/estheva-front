"use client";

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import config from '@/lib/config';
import BlogDetailSkeleton from '../skeletons/BlogDetailsSkeleton';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { ArrowRight01Icon } from 'hugeicons-react';
import Blogs from '../landing/Blogs';

type BlogDetailsProps = {
    id: number;
};

const BlogDetails: React.FC<BlogDetailsProps> = ({ id }) => {
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const getBlogDetails = async () => {
        try {
            const response = await fetch(`${config.env.apiEndpoint}/blogs/${id}`);
            if (!response.ok) throw new Error("Failed to fetch blog");
            const data = await response.json();
            setBlog(data.data);
        } catch (err: any) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getBlogDetails();
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    if (loading) return <BlogDetailSkeleton />;
    if (error || !blog) {
        return (
            <div className="p-6 text-red-500 text-center">
                {error || "Blog not found. Please try again later."}
            </div>
        );
    }

    return (
        <div>
            <div className="p-4 md:px-16 bg-pattern">
                {/* Breadcrumb */}
                <div className="flex flex-col my-8 gap-4 pb-4">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <ArrowRight01Icon className="text-primaryColor" size={20} />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/blogs">Blogs</BreadcrumbLink>
                            </BreadcrumbItem>
                            <ArrowRight01Icon className="text-primaryColor" size={20} />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-primaryColor">{blog.title}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                {/* Blog Content Layout */}

                <div className="my-6 lg:my-12">
                    <h1 className="text-gray-950 text-2xl md:text-4xl font-light" data-aos="fade-up">
                        {blog.title}
                    </h1>

                    <div className="relative mt-8">
                        <div className="text-gray-700 text-base leading-relaxed">
                            <div data-aos="fade-left" className="order-1 lg:order-2">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full sm:w-1/2 float-right ml-6 mb-4 object-cover"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                // onError={(e) => (e.currentTarget.src = fallbackImage)}
                                />
                            </div>


                            <div data-aos="fade-up" className="order-2 lg:order-1 text-[#5b7e95] font-light text-sm md:text-lg lg:text-xl xl:text-2xl">
                                {/* <p className="text-[#5b7e95] font-light text-sm md:text-lg lg:text-xl xl:text-2xl"> */}
                                {blog.content}
                                {/* </p> */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Related Blogs Section */}
            <Blogs />
        </div>
    );
};

export default BlogDetails;
