"use client";
import React, { useEffect, useState } from 'react';
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
import { usePathname } from 'next/navigation';
import BlogDetailSkeleton from '@/components/skeletons/BlogDetailsSkeleton';


const BlogDetails = () => {
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState<Boolean>(true)
    const pathName = usePathname();
    const id = pathName.split('/').pop();
    const getBlogDetails = async () => {

        try {
            const response = await fetch(`/api/admin/blogs/${id}`);

            if (!response.ok) {
                throw new Error("Failed to fetch blog");
            }
            const blog: Blog = await response.json();
            setBlog(blog);

        } catch (error: any) {
            // setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getBlogDetails();
    }, []);

    if (loading) {
        return <BlogDetailSkeleton />;
    }
    if (!blog) return <div>error</div>
    return (
        <div>
            <div className="p-4 md:px-16 bg-pattern">

                <div className="my-6 lg:my-12">
                    <h1 className="text-gray-950 text-2xl md:text-4xl font-light" >
                        {blog.title}
                    </h1>

                    <div className="relative mt-8">
                        <div className="text-gray-700 text-base leading-relaxed">
                            <div className="order-1 lg:order-2">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full sm:w-1/2 float-right ml-6 mb-4 object-cover"
                                    width={500}
                                    height={300}
                                    loading="lazy"
                                />
                            </div>


                            <div className="order-2 lg:order-1 text-[#5b7e95] font-light text-sm md:text-lg lg:text-xl xl:text-2xl" dangerouslySetInnerHTML={{ __html: blog.content }} />



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
