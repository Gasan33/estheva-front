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
import TreatmentReviews from '@/components/common/TreatmentReviews'
import BookAppointment from '@/components/common/BookAppointment/BookAppointment'
import AOS from 'aos'
import 'aos/dist/aos.css'
import TreatmentDetailsSkeleton from '../skeletons/TreatmentDetailsSkeleton'

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
            const response = await fetch(`/api/treatments/${id}`);

            if (!response.ok) {
                throw new Error("Failed to fetch treatments");
            }
            const data = await response.json();
            setTreatment(data);
            setFullDescription(data.description);
            setShortDescription(data.description.substring(0, 200));
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
        });
    }, []);

    if (!treatment) {
        return <TreatmentDetailsSkeleton />;
    }

    if (loading) {
        return <TreatmentDetailsSkeleton />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container px-4 md:px-12 lg:px-16 mx-auto bg-pattern">
            {/* Breadcrumb */}
            <div className="my-8 pb-4" data-aos="fade-up">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <ArrowRight01Icon className="text-primaryColor" size={20} />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/treatments/categories/body-contouring-weight-loss">Treatments</BreadcrumbLink>
                        </BreadcrumbItem>
                        <ArrowRight01Icon className="text-primaryColor" size={20} />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-primaryColor">
                                {treatment.title}
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            {/* Title & Actions */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4" data-aos="fade-right">
                <div>
                    <h1 className="text-gray-950 text-2xl md:text-4xl font-semibold">
                        {treatment.title}
                    </h1>
                    <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                        <Location01Icon width={16} height={16} />
                        <p>{treatment.home_based === 1 ? "Clinic / Home" : "Clinic"}</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center px-3 py-1.5 rounded-full bg-secondary gap-2 cursor-pointer">
                        <Share2 width={18} height={18} />
                        <span className="hidden md:block">Share</span>
                    </div>
                    <div className="flex items-center px-3 py-1.5 rounded-full bg-secondary gap-2 cursor-pointer">
                        <Heart width={18} height={18} />
                        <span className="hidden md:block">Save</span>
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="zoom-in">
                <div className="w-full h-[300px] md:h-[600px]">
                    <Image
                        src={treatment.images?.[0] ?? '/fallback.jpg'}
                        alt={treatment.title}
                        width={800}
                        height={500}
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>
                <div className="grid grid-cols-2 gap-2">
                    {treatment.images.slice(1, 5).map((img, idx) => (
                        <Image
                            key={idx}
                            src={img}
                            alt={`Gallery image ${idx + 1}`}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover rounded-md md:h-[296px]"
                            data-aos={['fade-up', 'fade-left', 'fade-right', 'fade-down'][idx % 4]}
                        />
                    ))}
                </div>
            </div>

            {/* About Section */}
            <div className="flex flex-col xl:flex-row gap-8 py-8" data-aos="fade-up">
                {/* Main Content */}
                <div className="w-full xl:w-2/3 space-y-6">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-950">
                            {treatment.title}
                        </h2>
                        <div className="flex items-center space-x-4">
                            {treatment.discount_value && Number(treatment.discount_value) > 0 ? (
                                <>
                                    <span className="bg-yellow-400 text-white font-bold px-3 py-1 rounded-lg">
                                        {treatment.discount_value}%
                                    </span>
                                    <span className="line-through text-gray-400">
                                        {treatment.price}
                                    </span>
                                    <span className="font-bold text-gray-900">{treatment.discounted_price} AED</span>
                                </>
                            ) : (
                                <span className="font-bold p-2 bg-primary text-2xl text-white rounded-lg items-center flex">{treatment.price} AED</span>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold">
                            Duration: <span className="text-primaryColor">{treatment.duration} min</span>
                        </p>
                        {/* <div className="flex items-center gap-1">
                            <Image src="/icons/starIcon.svg" alt="Rating" width={20} height={20} />
                            <p className="font-semibold">
                                {treatment.reviews?.[0]?.rating || 0} ({treatment.reviews?.length || 0} Reviews)
                            </p>
                        </div> */}
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-700">About This Treatment</h3>
                        <div className="text-gray-600 mt-2" dangerouslySetInnerHTML={{ __html: treatment.description }} />
                    </div>
                </div>

                {/* Sidebar */}
                <div className="w-full xl:w-1/3 bg-blue-50 rounded-xl p-6 space-y-4" data-aos="fade-left">
                    <h4 className="text-lg font-semibold">What This Treatment Can Do for You</h4>
                    {treatment.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2">
                            <Recycle01Icon width={24} height={24} className="mt-1" />
                            <p className="text-sm text-gray-700">{benefit}</p>
                        </div>
                    ))}
                    {treatment.instructions && (
                        <>
                            <h4 className="text-lg font-semibold mt-6 text-red-500">Pre-Treatment Instructions</h4>
                            {treatment.instructions.map((inst, index) => (
                                <div key={index} className="flex items-start gap-2">
                                    <Tag01Icon width={24} height={24} className="mt-1" />
                                    <p className="text-sm text-gray-700">{inst}</p>
                                </div>
                            ))}
                        </>
                    )}
                    <BookAppointment treatment={treatment} />
                </div>
            </div>



            {/* Video and Gallery */}
            <div data-aos="fade-up">
                <h2 className="text-2xl font-semibold text-gray-700 my-4">Gallery</h2>
                <div className="w-full h-60 md:h-[400px] overflow-hidden rounded-lg mb-4">
                    <video
                        src={treatment.video || '/images/banner_video.mp4'}
                        autoPlay
                        loop
                        controls
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {treatment.images.map((img, i) => (
                        <Image
                            key={i}
                            src={img}
                            alt={`Gallery image ${i + 1}`}
                            width={300}
                            height={300}
                            className="rounded-lg w-full h-32 md:h-40 object-cover"
                        />
                    ))}
                </div>
            </div>

            {/* Reviews */}
            <TreatmentReviews data-aos="fade-up" />
        </div>

    );
}

export default TreatmentDetails;
