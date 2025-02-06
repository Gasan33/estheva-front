import { ArrowRight01Icon } from 'hugeicons-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BookAppointment from '../common/BookAppointment/BookAppointment'
import SignInDialog from '../dialogs/SignInDialog'

const ExploreTreatment = ({ treatment, session }: { treatment: Treatment, session: boolean }) => {
    return (
        <div className='relative h-full w-full flex-col justify-between gap-4'>
            <h1 className='text-gray-900 text-xl font-semibold line-clamp-1'>
                {treatment.name}
            </h1>
            <div className='relative my-4 h-[55%]'>
                <Image src="/images/explore-bg.jpg" alt='explore' width={600} height={600} className=' absolute bottom-0 right-0 w-[85%] h-[85%] rounded-lg object-cover' />
                <Image src={treatment.img[0]} alt='explore' width={600} height={600} className='absolute top-0 left-0 w-[85%] h-[80%] rounded-lg object-cover' />
            </div>

            <p className='line-clamp-3'>{treatment.desc}</p>

            <div className='flex gap-4 mt-4'>
                <Link href={`/treatments/${treatment.id}`} className='flex items-center gap-0 md:gap-1 text-xs font-thin md:text-sm md:font-medium text-primaryColor'>
                    View Details
                    <ArrowRight01Icon className="h-4 md:h-6" />

                </Link>
                {session ? <BookAppointment treatment={treatment} triger='home' /> : <SignInDialog />}
            </div>
        </div>
    )
}

export default ExploreTreatment