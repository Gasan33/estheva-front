"use client"
import TreatmentsList from '@/components/landing/TreatmentsList';
import TreatmentReviews from '@/components/landing/TreatmentReviews';
import config from '@/lib/config';
import { useEffect, useState } from 'react';
type TreatmentByCategoryProps = {
    categoryId: number;
    categoryName: string;
};
const TreatmentByCategory: React.FC<TreatmentByCategoryProps> = ({ categoryId, categoryName }) => {
    const [treatments, setTreatments] = useState<Treatment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    console.log(categoryId)

    const fetchTreatmentsByCategory = async (category_id: number) => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(`/api/treatments/search/${category_id}`);
            if (!response.ok) throw new Error("Failed to fetch treatments");

            const data = await response.json();
            console.log(data)
            setTreatments(data || []);
        } catch (err: any) {
            // console.error("Error fetching treatments:", err);
            setError(err.message || "An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (categoryId !== undefined && categoryId !== null) {
            fetchTreatmentsByCategory(categoryId);
        }
    }, [categoryId]);


    return (
        <div className='my-6'>
            <div className='mt-8'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-lg md:text-[28px] lg:text-[32px] text-primary font-semibold'>{categoryName}</h1>
                </div>
                <TreatmentsList treatments={treatments} loading={loading} error={error} />
            </div>

            <TreatmentReviews />
        </div>
    )
}

export default TreatmentByCategory