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
            'The Importance of Lymphatic Drainage Massage for Well-Being and Body Shape',
            '10 Essential Medical Laboratory Tests Everyone Over 40 Should Do Annually',
            'Achieve Your Body Goals with Weight Loss Programs',
            'The Science Behind IV Drip Therapy: Proven Effectiveness with Medical Research',
            'Medically Proven Effectiveness of Ultrasound Cavitation and Radiofrequency for Fat Reduction',
            'The Anti-Aging Power of Diabetes Medications: Exploring Metformin, Mounjaro, and Ozempic',
            'Dealing with Physical and Mental Burnout: How IV Drips Therapy Can Help Regain Focus and Vitality',
            'Understanding Insulin Resistance: The Hidden Cause of Weight Gain and How to Manage It',
            'Non-Invasive Slimming Treatments at Estheva Polyclinic: The Benefits and Right Candidates',
            'A Comprehensive Guide to Hair Transplants: Techniques, Benefits, and Finding the Right Candidate',
            'The Powerful Benefits of NAD+ IV Drips',
            'The Ultimate Skin Ritual: Combining Hydrofacial with IV Drips'
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
                blog={blog}
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
                    "url": `${config.env.baseUrl}/blogs/${slug}`,
                    "image": blog?.image
                        ? blog.image
                        : undefined,
                })}
            </Script>
        </>
    );
};

export default TreatmentByCategoryPage;
