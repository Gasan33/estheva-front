"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight01Icon, HeartAddIcon, Recycle01Icon, StarIcon } from 'hugeicons-react';
import Image from 'next/image';
import BookAppointment from '../common/BookAppointment/BookAppointment';
import { useSession } from 'next-auth/react';
import SignInDialog from '../dialogs/SignInDialog';

const TreatmentCard = ({ treatment, index }: { treatment: Treatment, index: number }) => {
    const [isFav, setIsFav] = useState(false);
    const { data: session } = useSession();

    return (
        <div>
            <Link href={`/treatments/${treatment.id}`} className="bg-white overflow-hidden shadow-md flex flex-col transition hover:shadow-lg">
                {/* Image Section */}
                <div className="relative aspect-[5/4] w-full">
                    {/* Discount Badge */}
                    {treatment.discount_value && Number(treatment.discount_value) > 0 && (
                        <span className="absolute top-4 left-4 bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                            {treatment.discount_value}%
                        </span>
                    )}

                    {/* Favorite Icon */}
                    <div
                        onClick={() => setIsFav(!isFav)}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center bg-white/80 cursor-pointer"
                    >
                        {isFav ? (
                            <Image src="/icons/heartIcon.svg" alt="Favorite" width={20} height={20} />
                        ) : (
                            <HeartAddIcon className="text-gray-600" size={20} />
                        )}
                    </div>

                    {/* Main Image */}
                    <Image
                        src={treatment.images[0]}
                        alt={treatment.title}
                        fill
                        className="object-cover"
                    />

                    {/* Overlay Info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-transparent to-transparent text-white p-4">
                        <h2 className="text-sm md:text-lg font-semibold truncate">{treatment.title}</h2>
                        <p className="text-xs md:text-sm font-light">{treatment.price} AED</p>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-xs sm:text-sm md:text-base">
                        {/* Doctor Info */}
                        <div className="flex items-center gap-2">
                            <Image
                                src={treatment.doctors[0].user.profile_picture ?? "/images/noavatar.png"}
                                alt={treatment.doctors[0].user.name}
                                width={40}
                                height={40}
                                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                            />
                            <span className="truncate">By {treatment.doctors[0].user.name}</span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 text-yellow-500">
                            <StarIcon size={18} />
                            {/* Add rating value here if needed */}
                        </div>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-1">
                        {treatment.benefits.slice(0, 2).map((benefit, idx) => (
                            <div className="flex items-start gap-2 text-xs text-gray-600" key={idx}>
                                <Recycle01Icon size={14} className="mt-1" />
                                <p className="line-clamp-1">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center p-4 border-t">
                    <Link href={`/treatments/${treatment.id}`} className="flex items-center gap-0 md:gap-1 text-xs font-thin md:text-sm md:font-medium text-primaryColor">
                        View Details <ArrowRight01Icon size={16} />
                    </Link>
                    {session ? (
                        <BookAppointment treatment={treatment} triger="home" />
                    ) : (
                        <SignInDialog />
                    )}
                </div>
            </Link>
        </div>
    );
};

export default TreatmentCard;
