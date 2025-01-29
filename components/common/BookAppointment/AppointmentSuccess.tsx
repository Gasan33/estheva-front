import Image from 'next/image'
import React from 'react'

const AppointmentSuccess = () => {
    return (
        <div className='h-full'>
            <h1 className='text-xs md:text-sm lg:text-lg xl:text-xl font-semibold mt-8 text-center'>Appointment Success</h1>
            <div className='h-56 w-full my-16 px-16 md:px-0'>
                <Image
                    src="/icons/success.svg"
                    alt='success'
                    width={100}
                    height={100}
                    className='w-full h-full object-contain'
                />
            </div>

            <p className='px-0 md:px-2 lg:px-4 xl:px-8 text-center text-xs md:text-sm lg:text-lg xl:text-xl font-thin'>Your appointment has been successfully scheduled. You can see details from your Appointments Page</p>


        </div>
    )
}

export default AppointmentSuccess