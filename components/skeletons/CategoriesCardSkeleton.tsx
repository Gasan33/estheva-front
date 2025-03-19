import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
const CategoriesCardSkeleton = () => {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[80px] md:h-[80px] lg:h-[80px] w-[80px] rounded-xl justify-center" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    )
}

export default CategoriesCardSkeleton