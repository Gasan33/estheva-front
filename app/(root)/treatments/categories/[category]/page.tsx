import React from 'react';
// import { popularTreatments } from '@/constants';
import type { Metadata, ResolvingMetadata } from 'next';
import TreatmentDetails from '@/components/common/TreatmentDetails';
import config from '@/lib/config';
import TreatmentByCategory from '@/components/common/TreatmentsByCategory';

type Props = {
    params: Promise<{ id: string, name: string }>
    searchParams: Promise<{ id: string, name: string }>
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const id = (await searchParams).id;
    const name = (await searchParams).name;

    const category: Category = await fetch(`${config.env.apiEndpoint}/categories/${id}`).then((res) => res.json());

    return {
        title: category ? category.category_slug : 'Category Name',
        description: category ? category.category_description : "",
        openGraph: {
            // images: category ? [category.relations.images.attributes.path] : [],
        },
    };
}

const TreatmentByCategoryPage = async ({ params, searchParams }: Props) => {
    return <TreatmentByCategory categoryId={(await searchParams).id} categoryName={(await searchParams).name} />;
};

export default TreatmentByCategoryPage;
