"use client"
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { ArrowRight01Icon, Location01Icon, Recycle01Icon, Tag01Icon } from 'hugeicons-react'
import { Share2, Heart } from 'lucide-react'
import { popularTreatments } from '@/constants'
import Image from 'next/image'
import RatingBar from '@/components/common/RatingBar'
import TreatmentReviews from '@/components/common/TreatmentReviews'
import { Skeleton } from '@/components/ui/skeleton'
import BookAppointment from '@/components/common/BookAppointment'
import AOS from 'aos'
import 'aos/dist/aos.css'

const TreatmentDetails = () => {
    const [treatment, setTreatment] = useState<Treatment | null>(null);
    const [showFullText, setShowFullText] = useState(false);
    const [loading, setLoading] = useState(false);
    const [fullDescription, setFullDescription] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const allPath = usePathname();
    const paths = allPath.split('/');

    const getTreatmentDetails = () => {
        popularTreatments.map((item) => {
            if (item.id === Number(paths[paths.length - 1])) {
                setTreatment(item);
                setFullDescription(item.desc);
                setShortDescription(item.desc.substring(0, 200));
            }
        });
    }

    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    useEffect(() => {
        getTreatmentDetails();
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: false,
        });
    }, [treatment]);

    if (!treatment) {
        return (
            <div>
                <div className="rounded-3xl my-8 overflow-clip grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="col-span-1 h-56 sm:h-auto">
                        <Skeleton className='w-full h-full' />
                    </div>
                    <div className="grid grid-cols-2 gap-2 col-span-1 ">
                        <Skeleton className='w-full h-full' />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='m-4 md:mx-16 bg-pattern'>
            {/* Breadcrumb */}
            <div className='flex flex-col my-8 gap-4 pb-4' data-aos="fade-up">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <ArrowRight01Icon className="text-teal-500" size={20} />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/treatments">Treatments</BreadcrumbLink>
                        </BreadcrumbItem>
                        <ArrowRight01Icon className="text-teal-500" size={20} />
                        <BreadcrumbItem>
                            <BreadcrumbPage className='text-teal-500'>{treatment.name}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            {/* Treatment Info */}
            <div className='flex flex-row items-center justify-between' data-aos="fade-right">
                <div className='flex flex-col gap-2'>
                    <h1 className='text-gray-950 text-2xl md:text-4xl font-semibold'>{treatment.name}</h1>
                    <div className='flex gap-2'>
                        <Location01Icon height={16} width={16} className='text-gray-500' />
                        <p className='text-sm text-gray-500'>{treatment.home_based === 1 ? "Clinic / Home" : "Clinic"}</p>
                    </div>
                </div>
                <div className='flex items-center gap-8'>
                    <div className='flex items-center rounded-full px-4 py-2 bg-secondary justify-center gap-2'>
                        <Share2 height={18} width={18} className='text-gray-500' />
                        <label className='hidden md:block text-gray-500'>Share</label>
                    </div>
                    <div className='flex items-center rounded-full px-4 py-2 bg-secondary justify-center gap-2'>
                        <Heart height={18} width={18} className='text-gray-500' />
                        <label className='hidden md:block text-gray-500'>Save</label>
                    </div>
                </div>
            </div>

            {/* Treatment Images */}
            <div className="rounded-3xl my-8 overflow-clip grid grid-cols-1 sm:grid-cols-2 gap-2" data-aos="zoom-in">
                <div className="col-span-1 h-56 sm:h-auto" data-aos="fade-left">
                    <Image
                        src={treatment.img[0]}
                        alt={treatment.name}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="grid grid-cols-2 gap-2 col-span-1 ">
                    {treatment.img.slice(1, 5).map((img, index) => (
                        <Image
                            key={index}
                            src={img}
                            alt={treatment.name}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover"
                            data-aos={`${index == 0 ? "fade-up" : index == 1 ? "fade-left" : index == 2 ? "fade-right" : index == 3 ? "fade-up" : "fade-up"}`}
                        />
                    ))}
                </div>
            </div>

            {/* Additional Info Section */}
            <div className='grid grid-cols-1 xl:grid-cols-3 py-8 gap-8' data-aos="fade-up">
                <div className='xl:col-span-2 h-full'>
                    <div className='flex flex-col lg:flex-row justify-between lg:items-center'>
                        <h1 className='text-gray-950 text-2xl md:text-3xl lg:text-4xl font-semibold'>{treatment.name}</h1>

                        {treatment.dicount != null ? (
                            <div className='flex  items-center '>
                                <div className="flex items-center">
                                    <span className='bg-yellow-400 py-2 px-4 text-[18px] leading-6 font-[700] mt-4  rounded-lg text-white items-center justify-center'>
                                        {treatment.dicount}%
                                    </span>
                                    <span className='px-4 text-[18px] leading-6 font-normal mt-4  rounded-lg text-gray-400 line-through'>
                                        {treatment.price}
                                    </span>
                                    <span className=' px-4 text-[18px] leading-6 font-[700] mt-4  text-black'>
                                        {treatment.price} {/* Assuming `discountedPrice` is the new price */}
                                    </span>
                                </div>
                            </div>
                        ) : (<span className='px-4 text-[18px] leading-6 font-[700] mt-4  text-black'>
                            {treatment.price} {/* Assuming `discountedPrice` is the new price */}
                        </span>)}
                    </div>
                    <div className='flex justify-between items-center md:px-4 mt-4 gap-4'>
                        <h1 className='lg:text-[18px] leading-6 font-[700] text-gray-950'>Duration : <span className='text-teal-500'>{treatment.duration} min</span></h1>

                        <div className='flex gap-2'>
                            <Image src="/icons/starIcon.svg" alt='star' width={20} height={20} />
                            <p className='font-semibold'>{treatment.rating}</p>
                            <p>({treatment.reviews.length} Reviews)</p>
                        </div>


                    </div>
                    <div>
                        <h1 className='text-gray-600 text-lg md:text-lg lg:text-2xl mt-4 lg:px-8  font-semibold'>About This Treatment</h1>
                        <div className="flex lg:px-12 text-gray-600 text-xl mt-4 font-normal line-clamp-6 lg:line-clamp-none">
                            <p className='hidden lg:block px-12 text-gray-600 text-xl mt-4 font-normal line-clamp-6 lg:line-clamp-none'>{treatment.desc}</p>
                            <p className='lg:hidden block text-sm'>
                                {showFullText ? fullDescription : `${shortDescription}...`}
                                <button onClick={toggleText} className="ml-4 text-teal-500 font-semibold">
                                    {showFullText ? 'Show Less' : 'Show More'}
                                </button>
                            </p>

                        </div>
                    </div>
                    <div>
                        <h1 className='text-gray-600 text-2xl my-4 lg:px-8 font-semibold'>Gallery</h1>
                        <div className='h-48 lg:h-[400px] lg:mx-12 overflow-clip rounded-lg'>
                            <video
                                src='/images/banner_video.mp4'
                                autoPlay
                                loop
                                // muted
                                controls
                                style={{ width: "100%", height: "100%", objectFit: 'cover' }}
                            />
                        </div>
                        <div className='grid grid-cols-3 lg:grid-cols-4 lg:mx-12 mt-4 gap-4'>
                            {treatment.img.map((image, index) => (
                                <div key={index} className='rounded-lg  h-24 md:w-48 md:h-40 overflow-clip'>
                                    <Image
                                        src={image}
                                        alt={treatment.name}
                                        width={600}
                                        height={600}
                                        className="w-48 h-40 object-cover"
                                    />
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                <div className='h-full p-4 rounded-xl bg-green-50 xl:col-span-1' data-aos="fade-left">
                    <h1 className='text-[18px] leading-6 font-[700] text-gray-95'>What This Treatment Can Do for You</h1>
                    {treatment.benfits.map((benfit, index) => (
                        <div key={index} className='px-4 mt-4 justify-start flex flex-row gap-2'>
                            <Recycle01Icon width={24} height={24} className='mt-1' />
                            <p className='book-d flex-1'>{benfit}</p>
                        </div>
                    ))}
                    {treatment.instructions != null && (
                        <>
                            <h1 className='text-[18px] mt-8 leading-6 font-[700] text-gray-95'>Pre-Treatment Preparation <span className='text-red-600'>Instructions</span></h1>
                            {treatment.instructions.map((instruct, index) => (
                                <div key={index} className='px-4 mt-4 justify-start flex flex-row gap-2'>
                                    <Tag01Icon width={24} height={24} className='mt-1' />
                                    <p className='book-d flex-1'>{instruct}</p>
                                </div>
                            ))}
                        </>
                    )}
                    <BookAppointment treatment={treatment} />
                </div>
            </div>
            <TreatmentReviews data-aos="fade-up" />
        </div>
    );
}

export default TreatmentDetails;
