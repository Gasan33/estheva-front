import HeaderPath from '@/components/common/HeaderPath'
import OurTreatments from '@/components/common/OurTreatments'
import TopRatedTreatments from '@/components/common/TopRatedTreatments'
import React from 'react'

const MedicalTretments = () => {
    return (
        <div className='my-6'>
            <HeaderPath title="Treatments" path="/treatments"
            />
            <TopRatedTreatments />
            <OurTreatments bgColor='white' />
        </div>
    )
}

export default MedicalTretments