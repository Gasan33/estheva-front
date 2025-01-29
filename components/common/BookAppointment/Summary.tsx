import { ArrowRight01Icon, CardExchange01Icon, Location01Icon } from 'hugeicons-react'
import Image from 'next/image'
import React from 'react'
import BookAppointmentAddress from '../BookAppintmentAddress'
import { addresses } from '@/constants'
import { CircleCheck } from 'lucide-react'

const Summary = ({ treatment }: { treatment: Treatment }) => {
    return (
        <div>
            {/* Treatment */}
            <div>
                <h1 className='text-xs md:text-sm lg:text-lg xl:text-xl font-semibold mb-4'>Treatment</h1>
                <div className="flex flex-row p-2 rounded-xl border border-gray-100 shadow-md gap-4 bg-white w-full items-center">
                    {/* Image Section */}
                    <div className="w-1/3 sm:w-1/4">
                        <Image
                            src={treatment.img[0]}
                            alt={treatment.name}
                            width={300}
                            height={300}
                            className="w-full h-24 sm:h-32 object-cover rounded-lg shadow-sm"
                        />
                    </div>

                    {/* Details Section */}
                    <div className="flex flex-col h-auto gap-1 w-full text-[8px] sm:text-sm">
                        {/* Treatment Name */}
                        <div className="flex justify-between items-start w-full font-medium">
                            <h1 className="line-clamp-2">{treatment.name}</h1>
                        </div>

                        {/* Location */}
                        <div className="flex gap-2 items-center text-gray-500 font-light truncate">
                            <Location01Icon size={14} />
                            <h2 className="flex-1 truncate">{treatment.id % 2 === 1 ? 'Dubai - 375 Al-wasl Road' : 'Home'}</h2>
                        </div>

                        {/* Doctor Info */}
                        {treatment.doctors?.[0] && (
                            <div className="flex items-center gap-2 text-gray-700">
                                <Image
                                    src={treatment.doctors[0].img}
                                    alt={treatment.doctors[0].name}
                                    width={40}
                                    height={40}
                                    className="w-6 h-6 sm:w-8 sm:h-8 object-cover rounded-full"
                                />
                                <span>{treatment.doctors[0].name}</span>
                            </div>
                        )}

                        {/* Date & Time */}
                        <div className="text-teal-500 font-semibold">
                            16 Nov 2024 | 09:30 PM
                        </div>

                        {/* Countdown */}
                        <div className="text-teal-500 font-medium">
                            Starts in 2 days
                        </div>
                    </div>
                </div>
            </div>

            {/* Patient Details */}
            <div>
                <h1 className='text-xs md:text-sm lg:text-lg xl:text-xl font-semibold mt-8'>Patient Details</h1>


                <div className='flex flex-col gap-1 p-2 md:p-4 rounded-xl border border-gray-100 shadow-md text-gray-400 w-full mt-4 text-[8px] sm:text-sm'>

                    <div className='flex gap-2 line-clamp-1'>
                        <h1 className='w-[20%] text-teal-500 font-medium'>Name</h1>
                        :
                        <p >Mohammed Khalid</p>
                    </div>
                    <div className='flex gap-2 line-clamp-1'>
                        <h1 className='w-[20%] text-teal-500 font-medium'>Age</h1>
                        :
                        <p >26 year's</p>

                    </div>
                    <div className='flex gap-2 line-clamp-1'>
                        <h1 className='w-[20%] text-teal-500 font-medium'>Weight</h1>
                        :
                        <p >65 kg</p>

                    </div>
                    <div className='flex gap-2 line-clamp-1'>
                        <h1 className='w-[20%] text-teal-500 font-medium'>Gender</h1>
                        :
                        <p >Male</p>

                    </div>
                </div>
            </div>

            {/* Address Details */}
            <div>
                <h1 className='text-xs md:text-sm lg:text-lg xl:text-xl font-semibold mt-8'>Address Details</h1>



                <div
                    key={addresses[0].id}
                    className="relative flex flex-col items-start border-[1px] p-2 rounded-lg my-4 cursor-pointer border-teal-500 bg-teal-50"
                >
                    <div className="flex gap-2 items-center">
                        <Location01Icon size={16} />
                        <h1 className="text-sm font-semibold">{addresses[0].title}</h1>
                    </div>
                    <p>{addresses[0].name}</p>
                    <p>{addresses[0].phone}</p>
                    <p>{addresses[0].address}</p>
                    <CircleCheck className="absolute bottom-2 right-2 text-teal-500 w-4 h-4" />
                </div>

            </div>


            {/* Price Details */}
            <div>
                <h1 className='text-xs md:text-sm lg:text-lg xl:text-xl font-semibold mt-8'>Price Details</h1>

                <div className='text-[8px] sm:text-sm text-gray-500'>
                    <div className='flex justify-between '>
                        <CardExchange01Icon />
                        <div className='flex gap-1 items-center justify-center '>
                            <p>************3647</p>
                            <ArrowRight01Icon />
                        </div>
                    </div>

                    <div className='flex justify-between  mt-8'>
                        <p>Subtotal</p>
                        <p>1,300 AED</p>
                    </div>
                    <div className='flex justify-between mt-1'>
                        <p>Extra</p>
                        <p>0 AED</p>
                    </div>
                    <div className='flex justify-between  mt-1'>
                        <p>Tax</p>
                        <p>30 AED</p>
                    </div>

                    <div className='flex justify-between text-gray-950 mt-8 font-semibold'>
                        <p>Total</p>
                        <p>1,330 AED</p>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default Summary