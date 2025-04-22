import React from 'react';
import type { Metadata, ResolvingMetadata } from 'next';
import TreatmentDetails from '@/components/common/TreatmentDetails';
import config from '@/lib/config';
import Script from 'next/script';
export const dynamic = 'force-static';

type Props = {
    params: Promise<{ id: string }>
};

async function getTreatmentById(id: string) {
    const res = await fetch(`${config.env.apiEndpoint}/treatments/${id}`, {
        cache: 'no-store',
    });
    console.log(res)
    if (!res.ok) throw new Error('Treatment not found');
    return res.json();
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    const id = (await params).id;
    const data = await getTreatmentById(id);

    const treatment: Treatment = data.data;

    const title = `${treatment?.title} | Estheva Polyclinic` || 'Treatment';
    const description = treatment?.description || `Explore treatments under ${title}`;
    const imagePath = treatment?.images
        ? treatment?.images
        : undefined;
    const pageUrl = `${config.env.baseUrl}/treatments/${id}`;

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
            images: imagePath ? imagePath : [],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: imagePath ? imagePath : [],
        },
        alternates: {
            canonical: pageUrl,
        },
    };
}

const TreatmentPage = async ({ params }: Props) => {
    const id = (await params).id;
    const data = await getTreatmentById(id);
    const treatment: Treatment = data.data;
    return (
        <>
            <TreatmentDetails id={id} />

            <Script id="ld-json" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": `${treatment?.title} | Estheva Polyclinic`,
                    "description": treatment.description,
                    "mainEntity": {
                        "@type": "MedicalSpecialty",
                        "name": `${treatment?.title} | Estheva Polyclinic`,
                    },
                    "url": `${config.env.baseUrl}/treatments/${id}`,
                    "image": treatment?.images
                        ? treatment?.images
                        : undefined,
                })}
            </Script>
        </>


    );
};

export default TreatmentPage;
