import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const TreatmentCardSkeleton = () => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col animate-pulse w-full">
            {/* Image Section */}
            <div className="relative aspect-[5/4] w-full">
                {/* Discount Badge Placeholder */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <Skeleton className="w-[50px] h-[20px] sm:w-[60px] sm:h-[24px] rounded-full" />
                </div>

                {/* Favorite Icon Placeholder */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <Skeleton className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
                </div>

                {/* Main Image Placeholder */}
                <Skeleton className="absolute top-0 left-0 w-full h-full object-cover rounded-none" />
            </div>

            {/* Content */}
            <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between space-y-4">
                {/* Avatar & Title */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Skeleton className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
                        <Skeleton className="w-[80px] h-4 sm:w-[100px]" />
                    </div>
                    <Skeleton className="w-5 h-5 sm:w-6 sm:h-6 rounded-full" />
                </div>

                {/* Treatment Info */}
                <div className="space-y-2">
                    <Skeleton className="w-full h-3 sm:h-4" />
                    <Skeleton className="w-4/5 h-3 sm:h-4" />
                </div>

                {/* Location & Duration */}
                <div className="space-y-2">
                    <Skeleton className="w-[160px] h-3 sm:w-[200px]" />
                    <Skeleton className="w-[120px] h-3 sm:w-[150px]" />
                </div>
            </div>

            {/* Footer */}
            <div className="p-3 sm:p-4 border-t flex justify-between items-center">
                <Skeleton className="w-[80px] h-3 sm:w-[100px] sm:h-4" />
                <Skeleton className="w-[100px] h-9 sm:w-[120px] sm:h-10 rounded-md" />
            </div>
        </div>
    )
}

export default TreatmentCardSkeleton;
