import React from 'react';
// import { popularTreatments } from '@/constants';
import type { Metadata, ResolvingMetadata } from 'next';
import TreatmentDetails from '@/components/common/TreatmentDetails';
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

    // const treatment = popularTreatments.find((item) => item.id.toString() === id);
    const treatment = await fetch(`${config.env.apiEndpoint}/treatments/${id}`).then((res) => res.json());

    return {
        title: treatment ? treatment.name : 'Treatment Details',
        description: treatment ? treatment.desc : "",
        openGraph: {
            images: treatment ? treatment.img : [],
        },
    };
}

const TreatmentPage = async ({ params }: Props) => {
    return <TreatmentDetails id={(await params).id} />;
};

export default TreatmentPage;
