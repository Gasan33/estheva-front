import React from 'react'
import { Skeleton } from '../ui/skeleton'

const LandingPageBlogsSkeleton = () => {
    return (
        <div className="mx-0 my-16 w-full items-center justify-center px-4 sm:px-6 lg:px-32">
            <div className="h-10 w-40 mb-4">
                <Skeleton className="h-full w-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {[...Array(3)].map((_, idx) => (
                    <div key={idx} className="space-y-4">
                        <Skeleton className="w-full h-[300px] rounded-lg" />
                        <div className="flex justify-between">
                            <Skeleton className="w-16 h-5 rounded-full" />
                            <Skeleton className="w-20 h-5 rounded-full" />
                        </div>
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-[90%]" />
                        <Skeleton className="h-5 w-1/2" />
                        <Skeleton className="w-32 h-6 mt-4" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LandingPageBlogsSkeleton