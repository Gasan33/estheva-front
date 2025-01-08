"use client"
import React from 'react'
import SearchBar from "../../components/common/SearchBar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from 'next/navigation'

const HeaderPath = ({ title, path, desc, showSearchBar = true }) => {
    const allPath = usePathname()

    const paths = allPath.split('/')
    console.log(paths)
    return (
        <div className='flex flex-col my-8 mx-8 gap-4 border-b-[1px] border-gray-300 pb-4'>
            <div className='flex flex-col md:flex-row  gap-4 md:gap-0 md:items-center justify-between '>
                <h1 className='text-3xl font-semibold mb-0 md:mb-4 text-gray-950'>{title}</h1>
                {showSearchBar && <SearchBar hint="Search for service..." />}
            </div>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{title}</BreadcrumbPage>
                    </BreadcrumbItem>

                </BreadcrumbList>
            </Breadcrumb>
            {desc != null && <h2 className=' ml-2 text-gray-950'>{desc}</h2>}
        </div>
    )
}

export default HeaderPath