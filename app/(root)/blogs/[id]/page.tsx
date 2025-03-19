import React from 'react';
import { blogs } from '@/constants';
import type { Metadata, ResolvingMetadata } from 'next';
import BlogDetails from '@/components/common/BlogDetails';
import config from '@/lib/config';

type Props = {
    params: Promise<{ id: string }>
    // searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const id = (await params).id;

    const blog = await fetch(`${config.env.apiEndpoint}/blogs/${id}`).then((res) => res.json());
    console.log(blog.data)
    return {
        title: blog ? blog.data.title : 'Blog Details',
        description: blog ? blog.data.short_description : "",
        openGraph: {
            images: blog ? blog.data.image : "",
        },
    };
}

const BlogPage = async ({ params }: Props) => {
    return <BlogDetails id={(await params).id} />;
};

export default BlogPage;
