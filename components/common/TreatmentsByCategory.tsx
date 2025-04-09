"use client"
import TreatmentsList from '@/components/landing/TreatmentsList';
import TreatmentReviews from '@/components/landing/TreatmentReviews';
type TreatmentByCategoryProps = {
    categoryId: number;
    categoryName: string;
};
const TreatmentByCategory: React.FC<TreatmentByCategoryProps> = ({ categoryId, categoryName }) => {
    return (
        <div className='my-6'>
            <div className='mt-8'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-lg md:text-[28px] lg:text-[32px] text-primary font-semibold'>{categoryName}</h1>
                </div>
                <TreatmentsList category={Number(categoryId)} />
            </div>

            <TreatmentReviews />
        </div>
    )
}

export default TreatmentByCategory