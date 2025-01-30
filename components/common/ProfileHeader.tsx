import React from 'react'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { getInitials } from '@/lib/utils'
import { BirthdayCakeIcon, Calendar01Icon, Calendar04Icon, Flag01Icon, Flag02Icon } from 'hugeicons-react'
import { WeightIcon } from 'lucide-react'
import { BsGenderMale, BsGenderNeuter } from 'react-icons/bs'

const ProfileHeader = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-6 mb-6 lg:gap-8 lg:mb-8">
            <Avatar className="h-24 w-24 lg:h-32 lg:w-32">
                <AvatarFallback className="bg-amber-100">{getInitials("GU")}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-primary font-semibold text-lg lg:text-xl uppercase">Guest</h1>
                <h1 className="text-secondary-900 font-thin text-sm lg:text-lg">
                    Gasan1288@gmail.com | +971 545 671677
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
                    <h1>Male</h1>
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
