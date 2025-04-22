import React from 'react';
import type { Metadata, ResolvingMetadata } from 'next';
import TreatmentByCategory from '@/components/common/TreatmentsByCategory';
import config from '@/lib/config';
import Script from 'next/script';

export const dynamic = 'force-static';

type Props = {
    params: Promise<{ slug: string }>
};

async function getCategoryBySlug(slug: string) {
    const res = await fetch(`${config.env.apiEndpoint}/categories/slug/${slug}`, {
        cache: 'no-store',
    });

    if (!res.ok) throw new Error('Category not found');
    return res.json();
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    const slug = (await params).slug;
    const category: Category = await getCategoryBySlug(slug);

    const title = `${category?.category_name} | Estheva Polyclinic` || 'Treatment Category';
    const description = category?.category_description || `Explore treatments under ${title}`;
    const imagePath = category?.relations.images.attributes.path
        ? category?.relations.images.attributes.path
        : undefined;
    const pageUrl = `${config.env.baseUrl}/treatments/categories/${slug}`;

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
    const category: Category = await getCategoryBySlug(slug);
    return (
        <>
            <TreatmentByCategory
                categoryId={category.category_id}
                categoryName={category.category_name}
            />

            <Script id="ld-json" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": `${category?.category_name} | Estheva Polyclinic`,
                    "description": category.category_description,
                    "mainEntity": {
                        "@type": "MedicalSpecialty",
                        "name": `${category?.category_name} | Estheva Polyclinic`,
                    },
                    "url": `${config.env.baseUrl}/treatments/categories/${slug}`,
                    "image": category?.relations.images.attributes.path
                        ? category?.relations.images.attributes.path
                        : undefined,
                })}
            </Script>
        </>
    );
};

export default TreatmentByCategoryPage;
