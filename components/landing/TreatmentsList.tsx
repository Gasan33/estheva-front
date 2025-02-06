import React from 'react'
import TreatmentCard from './TreatmentCard';
import SearchBar from "../common/SearchBar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Image from 'next/image'
import { categories, popularTreatments } from '@/constants';



const TreatmentsList = ({ category }: { category?: string }) => {
    return (


        <div className="mt-8">
            <div className="grid-cols-1 lg:grid-cols-3 py-2 gap-5 lg:gap-[30px] hidden lg:grid">
                {popularTreatments.map((item, index) => (
                    <TreatmentCard item={item} index={index} key={index} />
                ))}
            </div>

            {/* Scrollable horizontal row for small screens */}
            <div className="flex lg:hidden py-2 overflow-x-auto space-x-5">
                {popularTreatments.map((item, index) => (
                    <div key={index} className="flex-shrink-0 w-[80%] sm:w-[60%]">
                        <TreatmentCard item={item} index={index} />
                    </div>
                ))}
            </div>
        </div>



    )
}

export default TreatmentsList