import { ArrowRight01Icon } from 'hugeicons-react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ExploreTreatment = ({ treatment }: { treatment: Treatment }) => {
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
                <Link href={`/treatments/details/${treatment.id}`} className='flex gap-1 font-medium text-teal-500'>
                    View Details
                    <ArrowRight01Icon />

                </Link>
                <div className='flex gap-1 font-medium items-center text-teal-500'>
                    Book Now
                    <ArrowRight size={16} className='-rotate-45' />
                </div>
            </div>
        </div>
    )
}

export default ExploreTreatment