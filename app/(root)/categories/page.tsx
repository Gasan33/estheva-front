"use client"
import React from 'react'
import TreatmentsList from "../../../components/common/TreatmentsList"
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
import { categories } from '@/constants'



const Categories = () => {
    const parms = usePathname()
    const category = parms.split('/')[2]
    return (
        <div className='my-8 mx-8'>
            <div className='flex flex-col  gap-4 border-b-[1px] border-gray-300 pb-4'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-3xl font-semibold text-gray-950'>Categories</h1>
                    {/* <SearchBar hint="Search for service..." /> */}
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
                        <TreatmentsList />
                    </div>
                ))
            }




        </div>
    )
}

export default Categories