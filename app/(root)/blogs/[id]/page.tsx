import React from 'react';
import { blogs } from '@/constants';
import type { Metadata } from 'next';
import BlogDetails from '@/components/common/BlogDetails';

type Props = {
    params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const blog = blogs.find((item) => item.id === Number(params.id));

    return {
        title: blog ? blog.title : 'Blog Details',
        description: blog ? blog.des : "",
        openGraph: {
            images: blog ? [blog.img] : [],
        },
    };
}

const BlogPage = ({ params }: Props) => {
    return <BlogDetails id={params.id} />;
};

export default BlogPage;
