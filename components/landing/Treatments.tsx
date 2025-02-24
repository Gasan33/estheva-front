import { ArrowRight01Icon } from 'hugeicons-react'
import React from 'react'
import TreatmentsList from './TreatmentsList'

const Treatments = () => {
    return (
        <div className='mt-8 mx-auto  w-full items-center justify-center px-4 py-8 sm:px-6 lg:px-16'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg md:text-[28px] lg:text-[32px] text-primary font-semibold'>Slimming Treatments</h1>
                <div
                    // onClick={() => handleTabSwitch(tab.value)}
                    className="flex gap-2 xl:gap-4 items-center cursor-pointer duration-700 transform hover:scale-105 hover:duration-300">
                    <span className="text-sm xl:text-xl text-light-500">View All</span>
                    <ArrowRight01Icon className="text-primaryColor" size={24} />
                </div>
            </div>
            <TreatmentsList />
        </div>
    )
}

export default Treatments