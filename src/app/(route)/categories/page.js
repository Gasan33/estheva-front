"use client"
import React from 'react'
import ServiceList from "../../../components/common/ServiceList"
import SearchBar from "../../../components/common/SearchBar"
import { usePathname } from 'next/navigation'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Image from 'next/image'


const categories = [
    {
        id: 1,
        title: "Plastic Surgery",
        description: "we offer expert plastic surgery services designed to enhance your natural beauty and boost your confidence.",
        icon: "/plastic.png",
    },
    {
        id: 2,
        title: "Slimming",
        description: "Estheva Polyclinic provide effective slimming treatments to help you achieve your ideal body shape.",
        icon: "/slimming.png",
    },
    {
        id: 3,
        title: "Dermatology",
        description: "comprehensive dermatology services to address a wide range of skin concerns.",
        icon: "/dermatology.png",
    },
    {
        id: 4,
        title: "IV Drips",
        description: "our IV drip treatments are designed to quickly replenish essential nutrients, hydration, and vitamins for optimal health and wellness.",
        icon: "/ivDripsIcon.png",
    },
    {
        id: 5,
        title: "Physiotherapy",
        description: "Estheva Polyclinic provides comprehensive physiotherapy services aimed at restoring movement, reducing pain, and improving overall physical well-being.",
        icon: "/daigosticsIcon.png",
    },
    {
        id: 6,
        title: "Daigostics",
        description: "Our diagnostic tests are designed to accurately assess your health, ensuring timely detection and effective treatment for a wide range of conditions.",
        icon: "/physiotherapyIcon.png",
    },

]

const Categories = () => {
    const parms = usePathname()
    const category = parms.split('/')[2]
    return (
        <div className='my-8 mx-8'>
            <div className='flex flex-col  gap-4 border-b-[1px] border-gray-300 pb-4'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-3xl font-semibold text-gray-950'>Categories</h1>
                    <SearchBar hint="Search for service..." />
                </div>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/categories">Categories</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{category}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <h2 className=' ml-2 text-gray-950'>Explore the Comprehensive Range of Services Offered at Estheva Polyclinic</h2>
            </div>



            {
                categories.map((item, index) => (
                    <div key={index}>
                        <div className='flex gap-4 m-4 text-3xl font-semibold text-primary'>
                            <Image src={item.icon} alt='icon' width={32} height={32} />
                            <h1>{item.title}</h1>
                        </div>
                        <ServiceList />
                    </div>
                ))
            }




        </div>
    )
}

export default Categories