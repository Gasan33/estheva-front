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
import Image from 'next/image'
import TreatmentReviews from '@/components/landing/TreatmentReviews'
import { Skeleton } from '@/components/ui/skeleton'
import BookAppointment from '@/components/common/BookAppointment/BookAppointment'
import AOS from 'aos'
import 'aos/dist/aos.css'
import config from '@/lib/config'

type TreatmentDetailsProps = {
    id: string;
};

const TreatmentDetails: React.FC<TreatmentDetailsProps> = ({ id }) => {
    const [treatment, setTreatment] = useState<Treatment | null>(null);
    const [showFullText, setShowFullText] = useState(false);
    const [fullDescription, setFullDescription] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState<string | null>(null); // Error state
    const allPath = usePathname();
    const paths = allPath.split('/');

    const getTreatmentDetails = async () => {
        try {
            const response = await fetch(`${config.env.apiEndpoint}/treatments/${id}`);

            if (!response.ok) {
                throw new Error("Failed to fetch treatments");
            }
            const data = await response.json();
            console.log(data.data)
            setTreatment(data.data);
            setFullDescription(data.data.description);
            setShortDescription(data.data.description.substring(0, 200));
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
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
    }, []);

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

    if (loading) {
        return <div>Loading...</div>; // Handle loading state
    }

    if (error) {
        return <div>Error: {error}</div>; // Handle error state
    }

    return (
        <div className='m-4 md:mx-16 bg-pattern'>
            <div className='flex flex-col my-8 gap-4 pb-4' data-aos="fade-up">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <ArrowRight01Icon className="text-primaryColor" size={20} />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/treatments">Treatments</BreadcrumbLink>
                        </BreadcrumbItem>
                        <ArrowRight01Icon className="text-primaryColor" size={20} />
                        <BreadcrumbItem>
                            <BreadcrumbPage className='text-primaryColor'>{treatment.title}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            {/* Treatment Info */}
            <div className='flex flex-row items-center justify-between' data-aos="fade-right">
                <div className='flex flex-col gap-2'>
                    <h1 className='text-gray-950 text-2xl md:text-4xl font-semibold'>{treatment.title}</h1>
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
            <div
                className="rounded-3xl my-8 overflow-clip grid grid-cols-1 sm:grid-cols-2 gap-2"
                data-aos="zoom-in"
            >
                <div className="col-span-1 h-[400px]" data-aos="fade-left">
                    <Image
                        src={treatment.images[0]}
                        alt={treatment.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="grid grid-cols-2 gap-2 col-span-1">
                    {treatment.images.slice(1, 5).map((img, index) => (
                        <Image
                            key={index}
                            src={img}
                            alt={treatment.title}
                            width={400}
                            height={400}
                            className="w-full h-[196px] object-cover"
                            data-aos={
                                ["fade-up", "fade-left", "fade-right", "fade-up"][index] || "fade-up"
                            }
                        />
                    ))}
                </div>
            </div>


            {/* Additional Info Section */}
            <div className='grid grid-cols-1 xl:grid-cols-3 py-8 gap-8' data-aos="fade-up">
                <div className='xl:col-span-2 h-full'>
                    <div className='flex flex-col lg:flex-row justify-between lg:items-center'>
                        <h1 className='text-gray-950 text-2xl md:text-3xl lg:text-4xl font-semibold'>{treatment.title}</h1>

                        {treatment.discounted_price != null ? (
                            <div className='flex  items-center '>
                                <div className="flex items-center">
                                    <span className='bg-yellow-400 py-2 px-4 text-[18px] leading-6 font-[700] mt-4  rounded-lg text-white items-center justify-center'>
                                        {treatment.discounted_price}%
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
                        <h1 className='lg:text-[18px] leading-6 font-[700] text-gray-950'>Duration : <span className='text-primaryColor'>{treatment.duration} min</span></h1>

                        <div className='flex gap-2'>
                            <Image src="/icons/starIcon.svg" alt='star' width={20} height={20} />
                            <p className='font-semibold'>{treatment.reviews.length != 0 ? treatment.reviews[0].rating : "0"}</p>
                            <p>({treatment.reviews.length} Reviews)</p>
                        </div>


                    </div>
                    <div>
                        <h1 className='text-gray-600 text-lg md:text-lg lg:text-2xl mt-4 lg:px-8  font-semibold'>About This Treatment</h1>
                        <div className="flex lg:px-12 text-gray-600 text-xl mt-4 font-normal line-clamp-6 lg:line-clamp-none">
                            <p className='hidden lg:block px-12 text-gray-600 text-xl mt-4 font-normal line-clamp-6 lg:line-clamp-none'>{treatment.description}</p>
                            <p className='lg:hidden block text-sm'>
                                {showFullText ? fullDescription : `${shortDescription}...`}
                                <button onClick={toggleText} className="ml-4 text-primaryColor font-semibold">
                                    {showFullText ? 'Show Less' : 'Show More'}
                                </button>
                            </p>

                        </div>
                    </div>
                    <div>
                        <h1 className='text-gray-600 text-2xl my-4 lg:px-8 font-semibold'>Gallery</h1>
                        <div className='h-48 lg:h-[400px] lg:mx-12 overflow-clip rounded-lg'>
                            <video
                                src={treatment.video != null ? treatment.video : '/images/banner_video.mp4'}
                                autoPlay
                                loop
                                // muted
                                controls
                                style={{ width: "100%", height: "100%", objectFit: 'cover' }}
                            />
                        </div>
                        <div className='grid grid-cols-3 lg:grid-cols-4 lg:mx-12 mt-4 gap-4'>
                            {treatment.images.map((image, index) => (
                                <div key={index} className='rounded-lg  h-24 md:w-48 md:h-40 overflow-clip'>
                                    <Image
                                        src={image}
                                        alt={treatment.title}
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
                    {treatment.benefits.map((benfit, index) => (
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
