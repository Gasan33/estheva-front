import Image from 'next/image'
import React from 'react'

const AppointmentFailed = () => {
    return (
        <div className='h-full'>
            <h1 className='text-xs md:text-sm lg:text-lg xl:text-xl font-semibold mt-8 text-center'>Appointment Failed</h1>
            <div className='h-56 w-full my-16 px-16 md:px-0'>
                <Image
                    src="/icons/fail.png"
                    alt='success'
                    width={100}
                    height={100}
                    className='w-full h-full object-contain'
                />
            </div>

            <p className='px-0 md:px-2 lg:px-4 xl:px-8 text-center text-xs md:text-sm lg:text-lg xl:text-xl font-thin'>An error occurred while processing your request. Kindly try again or contact support.</p>


        </div>
    )
}

export default AppointmentFailed