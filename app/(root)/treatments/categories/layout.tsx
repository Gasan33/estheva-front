import type { Metadata } from 'next'
import HeaderPath from '@/components/common/HeaderPath';
import { fetchCategories } from '@/lib/actions/categories';
import React, { ReactNode } from 'react';
import CategoryTabs from '@/components/common/CategoryTabs';
import Head from 'next/head';

export const metadata: Metadata = {
    title: 'Explore Advanced Aesthetic & Medical Treatments | Estheva Polyclinic Dubai',
    description:
        'Discover a wide range of expert treatments at Estheva Polyclinic, Dubai’s leading destination for aesthetic, dermatology, and wellness care. Browse our treatment categories to find personalized solutions crafted by top specialists using cutting-edge technology.',
    keywords: [
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
}
export function viewport() {
    return 'width=device-width, initial-scale=1.0';
}

const layout = async ({ children }: { children: ReactNode }) => {
    const categories = await fetchCategories();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        name: 'Explore Advanced Aesthetic & Medical Treatments | Estheva Polyclinic Dubai',
        description: 'Discover a wide range of expert treatments at Estheva Polyclinic, Dubai’s leading destination for aesthetic, dermatology, and wellness care. Browse our treatment categories to find personalized solutions crafted by top specialists using cutting-edge technology.',
        url: 'https://estheva-clinic.com/treatments/categories',
        image: 'https://estheva-clinic.com/images/pic1.png',
        logo: 'https://estheva-clinic.com/icons/logo.svg',
        sameAs: [
            'https://www.facebook.com/estheva-clinic',
            'https://twitter.com/estheva_clinic',
            'https://www.instagram.com/estheva_clinic'
        ],
        address: {
            '@type': 'PostalAddress',
            streetAddress: "375 Al Wasl Rd - Al Bada'a",
            addressLocality: 'Dubai',
            addressRegion: 'Dubai',
            postalCode: '00000',
            addressCountry: 'AE',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            telephone: '+971-433-09084',
            areaServed: 'AE',
            availableLanguage: 'en',
        },
    };

    return (
        <main className="root-container">
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>
            <div className="my-6">
                <HeaderPath title="Treatments" path="/treatments" />
                <div className="px-4 md:px-8 xl:px-12">
                    <CategoryTabs categories={categories} />

                    <div>{children}</div>
                </div>
            </div>
        </main>
    );
};

export default layout;
