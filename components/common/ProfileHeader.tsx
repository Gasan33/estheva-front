import React, { useEffect, useState } from 'react'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { getInitials } from '@/lib/utils'
import { Calendar01Icon, Flag02Icon } from 'hugeicons-react'
import { WeightIcon } from 'lucide-react'
import { BsGenderMale } from 'react-icons/bs'

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

    if (loading) return <p className="text-center mt-4">Loading appointments...</p>;
    if (error) return <p className="text-center mt-4 text-red-500">{error}</p>;

    return (
        <div className="flex flex-col justify-center items-center gap-6 mb-6 lg:gap-8 lg:mb-8">
            <Avatar className="h-24 w-24 lg:h-32 lg:w-32">
                <AvatarFallback className="bg-amber-100">{getInitials("GU")}</AvatarFallback>
            </Avatar>
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
