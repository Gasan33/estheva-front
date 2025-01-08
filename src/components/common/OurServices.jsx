import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

const categories = [
    {
        id: 1,
        title: "Plastic Surgery",
        path: "plastic-surgery",
        description: "we offer expert plastic surgery services designed to enhance your natural beauty and boost your confidence.",
        icon: "/plastic.png",
    },
    {
        id: 2,
        title: "Slimming",
        path: "slimming",
        description: "Estheva Polyclinic provide effective slimming treatments to help you achieve your ideal body shape.",
        icon: "/slimming.png",
    },
    {
        id: 3,
        title: "Dermatology",
        path: "dermatology",
        description: "comprehensive dermatology services to address a wide range of skin concerns.",
        icon: "/dermatology.png",
    },
    {
        id: 4,
        title: "IV Drips",
        path: "iv-drips",
        description: "our IV drip treatments are designed to quickly replenish essential nutrients, hydration, and vitamins for optimal health and wellness.",
        icon: "/ivDripsIcon.png",
    },
    {
        id: 5,
        title: "Physiotherapy",
        path: "physiotherapy",
        description: "Estheva Polyclinic provides comprehensive physiotherapy services aimed at restoring movement, reducing pain, and improving overall physical well-being.",
        icon: "/daigosticsIcon.png",
    },
    {
        id: 6,
        title: "Daigostics",
        path: "daigostics",
        description: "Our diagnostic tests are designed to accurately assess your health, ensuring timely detection and effective treatment for a wide range of conditions.",
        icon: "/physiotherapyIcon.png",
    },

]

const OurServices = () => {
    return (
        <div className="mx-0 bg-secondary w-full items-center justify-center px-4 py-8 sm:px-6 lg:px-32">
            <h3 className="text-xl text-primary sm:text-xl">
                Our Services
            </h3>
            <h2 className="text-2xl font-[500] text-gray-900 sm:text-2xl">
                Exceptional Services Tailored Just for You
            </h2>

            <div className="grid grid-cols-2 my-8 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {
                    categories.map((category, index) => (
                        <Link key={index} href={'/categories/' + category.path} className="bg-white rounded-xl p-8 hover:bg-primary hover:shadow-xl hover:text-white cursor-pointer">
                            <Image src={category.icon} alt={category.title} width={72} height={72} className='p-2 rounded-full object-contain bg-[#eef3f7]' />
                            <h2 className="mt-8 text-lg font-semibold sm:text-lg">
                                {category.title}
                            </h2>
                            <p className='mt-2 line-clamp-3'>
                                {category.description}
                            </p>

                        </Link>
                    ))
                }

            </div>

            <div className='flex w-full mt-16 justify-center'>
                <Link href='/categories'>
                    <Button className='flex gap-2 py-4 px-6 h-12'>
                        View Details
                        <ArrowRightIcon />
                    </Button>
                </Link>

            </div>


        </div>
    )
}

export default OurServices