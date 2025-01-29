import TreatmentsList from '@/components/common/TreatmentsList'
import React from 'react'

const Favourite = () => {
    return (
        <div className='mt-8'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg md:text-[28px] lg:text-[32px] text-primary font-semibold'>My Favourites</h1>
            </div>
            <TreatmentsList />
        </div>
    )
}

export default Favourite