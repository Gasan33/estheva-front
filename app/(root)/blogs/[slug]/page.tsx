import React from 'react';
import type { Metadata } from 'next';
import config from '@/lib/config';
import Script from 'next/script';
import BlogDetails from '@/components/common/BlogDetails';

export const dynamic = 'force-static';

type Props = {
    params: Promise<{ slug: string }>
};

async function getBlogBySlug(slug: string) {
    const res = await fetch(`${config.env.apiEndpoint}/blogs/slug/${slug}`, {
        cache: 'no-store',
    });

    if (!res.ok) throw new Error('Blog not found');
    return res.json();
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    const slug = (await params).slug;
    const blog: Blog = await getBlogBySlug(slug);

    const title = blog?.title || 'Blog';
    const description = blog?.short_description || `Explore under ${title}`;
    const imagePath = blog?.image
        ? blog?.image
        : undefined;
    const pageUrl = `${config.env.baseUrl}/blogs/${slug}`;

    return {
        title,
        description,
        keywords: [
            title,
            'treatments',
            'Body Contouring & Weight Loss',
            'IV Therapy',
            'Aesthetic',
            'Hair Transplant',
            'Physiotherapy',
            'Health & Wellness',
            'Consultations',
            'Estheva Polyclinic',
        ],
        openGraph: {
            title,
            description,
            url: pageUrl,
            type: 'article',
            images: imagePath ? [imagePath] : [],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: imagePath ? [imagePath] : [],
        },
        alternates: {
            canonical: pageUrl,
        },
    };
}

const TreatmentByCategoryPage = async ({ params }: Props) => {
    const slug = (await params).slug;
    const blog: Blog = await getBlogBySlug(slug);
    return (
        <>
            <BlogDetails
                id={blog.id}
            />

            <Script id="ld-json" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": blog.title,
                    "description": blog.short_description,
                    "mainEntity": {
                        "@type": "MedicalSpecialty",
                        "name": blog.title,
                    },
                    "url": `${config.env.baseUrl}/treatments/categories/${slug}`,
                    "image": blog?.image
                        ? blog.image
                        : undefined,
                })}
            </Script>
        </>
    );
};

export default TreatmentByCategoryPage;
