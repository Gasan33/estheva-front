"use client"
import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { usePathname } from 'next/navigation'
import { ArrowRight01Icon } from 'hugeicons-react'

const HeaderPath = ({ title, path, desc, showSearchBar = true }: { title: string, path: string, desc?: string, showSearchBar?: boolean }) => {
    const allPath = usePathname()

    const paths = allPath.split('/')
    // console.log(paths)
    return (
        <div className='flex flex-col mx-4 md:mx-8 lg:mx-12 gap-4 text-lg  pb-4'>

            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <ArrowRight01Icon className="text-primaryColor" size={20} />
                    <BreadcrumbItem>
                        <BreadcrumbPage className='text-primaryColor'>{title}</BreadcrumbPage>
                    </BreadcrumbItem>

                </BreadcrumbList>
            </Breadcrumb>
            {desc != null && <h2 className='text-gray-950'>{desc}</h2>}
        </div>
    )
}

export default HeaderPath