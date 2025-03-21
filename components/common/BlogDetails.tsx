"use client";
import { blogs } from '@/constants';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Skeleton } from '@/components/ui/skeleton';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { ArrowRight01Icon } from 'hugeicons-react';
import Image from 'next/image';
import config from '@/lib/config';

type BlogDetailsProps = {
    id: string;
};

const BlogDetails: React.FC<BlogDetailsProps> = ({ id }) => {
    const [blog, setBlog] = useState<Blog | null>(null);
    const getBlogDetails = async () => {
        try {
            const response = await fetch(`${config.env.apiEndpoint}/blogs/${id}`);

            if (!response.ok) {
                throw new Error("Failed to fetch blog");
            }
            const data = await response.json();
            console.log(data.data)
            setBlog(data.data);
            console.log(data)

        } catch (error: any) {
        }
    }



    useEffect(() => {
        getBlogDetails();
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    if (!blog) {
        return (
            <div>
                <div className="rounded-3xl my-8 overflow-clip grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="col-span-1 h-56 sm:h-auto">
                        <Skeleton className='w-full h-full' />
                    </div>
                    <div className="grid grid-cols-2 gap-2 col-span-1 ">
                        <Skeleton className='w-full h-full' />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='p-4 md:px-16 bg-pattern'>
            <div className='flex flex-col my-8 gap-4 pb-4'>
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
                            <BreadcrumbPage className='text-primaryColor'>{blog.title}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className='my-4 md:my-6 lg:my-8 xl:my-12'>
                <h1 className='text-gray-950 text-2xl md:text-4xl font-thin' data-aos="fade-up">{blog.title}</h1>

                <div className='my-4 md:my-6 lg:my-8 xl:my-12 grid grid-cols-1 lg:grid-cols-2 gap-8'>

                    <p className='text-[#5b7e95] font-thin text-sm md:text-lg lg:text-xl xl:text-2xl' data-aos="fade-up">
                        {blog.content}
                    </p>
                    <div data-aos="fade-left">
                        <Image
                            src={blog.image}
                            alt={blog.title}
                            width={400}
                            height={400}
                            className='w-full h-[600px] object-cover rounded-lg lg:ml-8'
                        />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default BlogDetails