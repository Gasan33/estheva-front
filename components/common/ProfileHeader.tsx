import React, { useEffect, useState } from 'react'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { getInitials } from '@/lib/utils'
import { Calendar01Icon, Edit01Icon, Flag02Icon } from 'hugeicons-react'
import { EditIcon, WeightIcon } from 'lucide-react'
import { BsGenderMale } from 'react-icons/bs'
import { Skeleton } from '../ui/skeleton'

const ProfileHeader = () => {
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

    if (loading) return <div className="flex flex-col justify-center items-center gap-6 mb-6 lg:gap-8 lg:mb-8">
        <Skeleton className="h-32 w-32 rounded-full" />
        <div className="flex flex-col items-center gap-2">
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-4 w-56" />
        </div>
        <div className="flex gap-2 w-full p-2 rounded-xl justify-between items-center">
            {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-20 w-full lg:h-24 lg:w-1/4 rounded-lg" />
            ))}
        </div>
    </div>;
    if (error) return <p className="text-center mt-4 text-red-500">{error}</p>;

    return (
        <div className="flex flex-col justify-center items-center gap-6 mb-6 lg:gap-8 lg:mb-8">
            <div className='relative'>
                <Avatar className=" h-24 w-24 lg:h-32 lg:w-32">
                    {/* Avatar Fallback */}
                    <AvatarFallback className="bg-amber-100">
                        {getInitials("GU")}
                    </AvatarFallback>

                    {/* Edit Icon */}

                </Avatar>
                <div className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 cursor-pointer">
                    <Edit01Icon className="w-5 h-5 text-primary" />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-primary font-semibold text-lg lg:text-xl uppercase">{user?.name}</h1>
                <h1 className="text-secondary-900 font-thin text-sm lg:text-lg">
                    {user?.email} | {user?.phone_number}
                </h1>
            </div>
            <div className="flex gap-2 w-full bg-primaryColor p-2 h-auto rounded-xl justify-between items-center lg:flex-nowrap lg:h-24">
                <div className="flex flex-col lg:flex-row bg-white w-full h-20 lg:h-full lg:w-1/4 rounded-lg  items-center justify-center text-base lg:text-lg font-semibold gap-2">
                    <Calendar01Icon />
                    <h1>27 year's</h1>
                </div>
                <div className="flex flex-col lg:flex-row bg-white w-full h-20 lg:h-full lg:w-1/4 rounded-lg items-center justify-center text-base lg:text-lg font-semibold gap-2">
                    <WeightIcon />
                    <h1>64 kg</h1>
                </div>
                <div className=" flex flex-col lg:flex-row bg-white w-full h-20 lg:h-full lg:w-1/4 rounded-lg items-center justify-center text-base lg:text-lg font-semibold gap-2">
                    <BsGenderMale />
                    <h1>{user?.gender}</h1>
                </div>
                <div className="flex flex-col lg:flex-row bg-white w-full h-20 lg:h-full lg:w-1/4 rounded-lg items-center justify-center text-base lg:text-lg font-semibold gap-2">
                    <Flag02Icon />
                    <h1>Sudan</h1>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader
