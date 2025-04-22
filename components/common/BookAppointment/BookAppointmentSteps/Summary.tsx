import { ArrowRight01Icon, CardExchange01Icon, Location01Icon } from 'hugeicons-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { addresses } from '@/constants'
import { CircleCheck } from 'lucide-react'
import { useSession } from 'next-auth/react'
import config from '@/lib/config'

const Summary = ({ treatment }: { treatment: Treatment }) => {
    const [user, setUser] = useState<User>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const fetchUserData = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch("/api/user");
            if (!response.ok) throw new Error("Failed to fetch User Data");
            const data = await response.json();
            setUser(data.data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {

        fetchUserData();
    }, []);


    const tax = 30;
    const total = Number(treatment.price) + tax;
    if (loading) return <p className="text-center mt-4">Loading appointments...</p>;
    if (error) return <p className="text-center mt-4 text-red-500">{error}</p>;
    return (
        <div>
            {/* Treatment */}
            <div>
                <h1 className='text-xs md:text-sm lg:text-lg xl:text-xl font-semibold mb-4'>Treatment</h1>
                <div className="flex flex-row p-2 rounded-xl border border-gray-100 shadow-md gap-4 bg-white w-full items-center">
                    {/* Image Section */}
                    <div className="w-1/3 sm:w-1/4">
                        <Image
                            src={treatment.images[0]}
                            alt={treatment.title}
                            width={300}
                            height={300}
                            className="w-full h-24 sm:h-32 object-cover rounded-lg shadow-sm"
                        />
                    </div>

                    {/* Details Section */}
                    <div className="flex flex-col h-auto gap-1 w-full text-[8px] sm:text-sm">
                        {/* Treatment Name */}
                        <div className="flex justify-between items-start w-full font-medium">
                            <h1 className="line-clamp-2">{treatment.title}</h1>
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
                                    src={treatment.doctors[0].user.profile_picture ? `${config.env.apiEndpoint}/${treatment.doctors[0].user.profile_picture}` : "/images/noavatar.png"}
                                    alt={treatment.doctors[0].user.name}
                                    width={40}
                                    height={40}
                                    className="w-6 h-6 sm:w-8 sm:h-8 object-cover rounded-full"
                                />
                                <span>{treatment.doctors[0].user.name}</span>
                            </div>
                        )}

                        {/* Date & Time */}
                        <div className="text-primaryColor font-semibold">
                            16 Nov 2024 | 09:30 PM
                        </div>

                        {/* Countdown */}
                        <div className="text-primaryColor font-medium">
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
                        <h1 className='w-[20%] text-primaryColor font-medium'>Name</h1>
                        :
                        <p >{user?.name}</p>
                    </div>
                    <div className='flex gap-2 line-clamp-1'>
                        <h1 className='w-[20%] text-primaryColor font-medium'>Age</h1>
                        :
                        <p >26 year's</p>

                    </div>
                    <div className='flex gap-2 line-clamp-1'>
                        <h1 className='w-[20%] text-primaryColor font-medium'>Weight</h1>
                        :
                        <p >65 kg</p>

                    </div>
                    <div className='flex gap-2 line-clamp-1'>
                        <h1 className='w-[20%] text-primaryColor font-medium'>Gender</h1>
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
                    className="relative flex flex-col items-start border-[1px] p-2 rounded-lg my-4 cursor-pointer border-primaryColor bg-teal-50"
                >
                    <div className="flex gap-2 items-center">
                        <Location01Icon size={16} />
                        <h1 className="text-sm font-semibold">{addresses[0].title}</h1>
                    </div>
                    <p>{addresses[0].name}</p>
                    <p>{addresses[0].phone}</p>
                    <p>{addresses[0].address}</p>
                    <CircleCheck className="absolute bottom-2 right-2 text-primaryColor w-4 h-4" />
                </div>

            </div>


            {/* Price Details */}
            <div>
                <h1 className='text-xs md:text-sm lg:text-lg xl:text-xl font-semibold mt-8'>Price Details</h1>

                <div className='text-[8px] sm:text-sm text-gray-500'>
                    <div className='flex justify-between  mt-8'>
                        <p>Subtotal</p>
                        <p>{treatment.price} AED</p>
                    </div>
                    <div className='flex justify-between mt-1'>
                        <p>Extra</p>
                        <p>0 AED</p>
                    </div>
                    <div className='flex justify-between  mt-1'>
                        <p>Tax</p>
                        <p>{tax} AED</p>
                    </div>

                    <div className='flex justify-between text-gray-950 mt-8 font-semibold'>
                        <p>Total</p>
                        <p>{total} AED</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Summary