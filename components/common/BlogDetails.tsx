"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { ArrowRight01Icon } from 'hugeicons-react';
import Blogs from './Blogs';

type BlogDetailsProps = {
    blog: Blog;
};

const BlogDetails: React.FC<BlogDetailsProps> = ({ blog }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <div>
            <div className="p-4 md:px-16 bg-pattern">
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
                                />
                            </div>


                            <div data-aos="fade-up" className="order-2 lg:order-1 text-[#5b7e95] font-light text-sm md:text-lg lg:text-xl xl:text-2xl" dangerouslySetInnerHTML={{ __html: blog.content }} />



                        </div>
                    </div>
                </div>
            </div>
            <Blogs />
        </div>
    );
};

export default BlogDetails;
