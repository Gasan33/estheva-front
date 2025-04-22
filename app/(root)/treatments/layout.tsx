import type { Metadata } from 'next'
import HeaderPath from '@/components/common/HeaderPath';
import { fetchCategories } from '@/lib/actions/categories';
import React, { ReactNode } from 'react';
import CategoryTabs from '@/components/common/CategoryTabs';
import Head from 'next/head';

export const metadata: Metadata = {
    title: 'Premium Aesthetic & Medical Treatments in Dubai | Estheva Polyclinic',
    description:
        'Explore our full range of advanced medical and cosmetic treatments at Estheva Polyclinic in Dubai. From skin rejuvenation and hair restoration to wellness therapies and body contouring — discover solutions tailored to your needs by leading experts.',
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
        name: 'Premium Aesthetic & Medical Treatments in Dubai | Estheva Polyclinic',
        description: 'Explore our full range of advanced medical and cosmetic treatments at Estheva Polyclinic in Dubai. From skin rejuvenation and hair restoration to wellness therapies and body contouring — discover solutions tailored to your needs by leading experts.',
        url: 'https://estheva-clinic.com/treatments',
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

            <div>{children}</div>

        </main>
    );
};

export default layout;
