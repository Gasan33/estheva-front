"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Location01Icon } from 'hugeicons-react'
import { Share2, Heart } from 'lucide-react'

const ServiceDetails = () => {
    const allPath = usePathname()

    const paths = allPath.split('/')
    return (
        <div className='m-4 md:mx-32'>
            <div className='flex flex-col my-8 gap-4  pb-4'>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Services</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href={paths[0] + paths[1]}>Details</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage href={paths[0] + paths[1] + paths[2]}>Service</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-gray-950 text-4xl font-semibold '>Title</h1>
                    <div className='flex gap-2'>
                        <Location01Icon height={16} width={16} className='text-gray-500' />
                        <p className='text-sm text-gray-500'>Clinic / Home</p>
                    </div>
                </div>

                <div className='flex items-center gap-8'>
                    <div className='flex items-center rounded-full px-4 py-2 bg-secondary justify-center gap-2'>
                        <Share2 height={18} width={18} className='text-gray-500' />
                        <label className='text-gray-500'>Share</label>
                    </div>

                    <div className='flex items-center rounded-full px-4 py-2 bg-secondary justify-center gap-2'>
                        <Heart height={18} width={18} className='text-gray-500' />
                        <label className='text-gray-500'>Save</label>
                    </div>

                </div>
            </div>

            <div className='rounded-lg overflow-clip grid grid-cols-['>


            </div>



        </div>
    )
}

export default ServiceDetails