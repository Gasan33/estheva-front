"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ArrowRight01Icon, HeartAddIcon, Recycle01Icon, StarIcon } from 'hugeicons-react';
import Image from 'next/image';
import BookAppointment from './BookAppointment';


const TreatmentCard = ({ item, index }: { item: Treatment, index: number }) => {
    const { name, desc, img, price, benfits, dicount, bgColor, textColor } = item;
    const [isFav, setIsFav] = useState(false);

    return (
        <div className="shadow-md rounded-[16px] cursor-pointer">
            <div className="relative">
                {dicount != null && (
                    <span className="bg-yellow-400 py-1 px-3 text-[14px] leading-6 font-bold absolute top-4 left-4 rounded-lg text-white">
                        {dicount}%
                    </span>
                )}
                <div
                    onClick={() => setIsFav(!isFav)}
                    className="bg-gray-50 flex w-12 h-12 items-center justify-center object-cover absolute top-4 right-4 rounded-full text-gray-800"
                >
                    {isFav ? <Image src="/icons/heartIcon.svg" alt="love" width={50} height={50} className='w-8 h-8' /> : <HeartAddIcon />}
                </div>
                <div className="relative w-full -z-10 h-[160px] md:h-[180px] lg:h-[180px]">
                    <Image
                        className="w-full  h-full object-cover rounded-t-[16px]"
                        src={img[0]}
                        alt={name}
                        width={600}
                        height={600}
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black  opacity-80 rounded-t-[16px]"></div> {/* Gradient Overlay */}
                </div>
                <div className='absolute flex flex-row justify-between items-center bottom-2 left-2 right-2 text-xs md:text-sm lg:text-xl font-semibold md:font-medium text-white line-clamp-2'>
                    <h2 className="flex-1">{name}</h2>
                    <h2 className="">{price}</h2>
                </div>

            </div>

            <div className="p-2 md:p-2 h-auto">
                <div className="flex w-full items-center justify-between text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                        <Image
                            src={item?.doctors[0].img}
                            alt={item?.doctors[0].name}
                            width={50}
                            height={50}
                            className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
                        />
                        <span>By {item?.doctors[0].name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <StarIcon
                            className="star"
                            size={24}
                            color="#FFD700"
                        />
                        <span>{item?.rating}</span>
                    </div>
                </div>

                <p className="text-xs md:text-sm leading-6 font-thin md:font-normal text-textColor mt-1 line-clamp-3">
                    {desc}
                </p>

                {benfits.slice(0, 2).map((benefit, idx) => (
                    <div className="flex items-center gap-2 mt-2" key={idx}>
                        <Recycle01Icon size={16} className="w-4 h-4" />
                        <p className="text-xs font-light text-textColor line-clamp-1">
                            {benefit}
                        </p>
                    </div>
                ))}
            </div>

            <div className='flex justify-between items-center p-4'>
                <Link href={`/treatments/details/${item.id}`} className='flex gap-1 font-medium text-primaryColor'>
                    View Details
                    <ArrowRight01Icon />

                </Link>
                <BookAppointment treatment={item} triger='home' />
            </div>
        </div>
    );
};

export default TreatmentCard;
