import React from 'react'
import { Skeleton } from '../ui/skeleton'

const BlogsPageSkeleton = () => {
    return (
        <div className="mt-6 px-4 md:px-8 lg:px-12 xl:px-16 space-y-12">
            {/* Header */}
            <div className="space-y-4">
                <Skeleton className="h-8 w-1/3 bg-gray-300 rounded-md" />
            </div>

            {/* Featured Articles (Swiper-like layout) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Skeleton className="h-[300px] w-full rounded-lg bg-gray-300" />
                <div className="space-y-4">
                    <div className="flex justify-between">
                        <Skeleton className="h-6 w-20 bg-gray-300 rounded-full" />
                        <Skeleton className="h-6 w-24 bg-gray-300 rounded-full" />
                    </div>
                    <Skeleton className="h-8 w-3/4 bg-gray-300 rounded" />
                    <Skeleton className="h-20 w-full bg-gray-300 rounded-md" />
                    <Skeleton className="h-6 w-32 bg-gray-300 rounded" />
                </div>
            </div>

            {/* Section Title */}
            <Skeleton className="h-8 w-1/3 bg-gray-300 rounded-md mt-12" />

            {/* Grid posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-8">
                {[...Array(6)].map((_, index) => (
                    <div key={index} className="space-y-4">
                        <Skeleton className="h-[300px] w-full bg-gray-300 rounded-lg" />
                        <div className="flex justify-between">
                            <Skeleton className="h-5 w-16 rounded bg-gray-300" />
                            <Skeleton className="h-5 w-20 rounded bg-gray-300" />
                        </div>
                        <Skeleton className="h-6 w-3/4 rounded bg-gray-300" />
                        <Skeleton className="h-4 w-full rounded bg-gray-300" />
                        <Skeleton className="h-4 w-5/6 rounded bg-gray-300" />
                        <Skeleton className="h-6 w-24 bg-gray-300 rounded" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogsPageSkeleton