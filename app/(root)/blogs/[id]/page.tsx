import React from 'react';
import { blogs } from '@/constants';
import type { Metadata, ResolvingMetadata } from 'next';
import BlogDetails from '@/components/common/BlogDetails';

type Props = {
    params: Promise<{ id: string }>
    // searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const id = (await params).id;

    const blog = blogs.find((item) => item.id.toString() === id);

    return {
        title: blog ? blog.title : 'Blog Details',
        description: blog ? blog.des : "",
        openGraph: {
            images: blog ? [blog.img] : [],
        },
    };
}

const BlogPage = async ({ params }: Props) => {
    return <BlogDetails id={(await params).id} />;
};

export default BlogPage;
