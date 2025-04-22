import React from 'react'
import { Skeleton } from '../ui/skeleton';

const TopRatedSkeleton = () => {

    return (
        <div className="w-full items-center justify-center overflow-hidden px-4 py-8 sm:px-6 lg:px-16">
            <div className="flex justify-between items-center mb-6">
                <Skeleton className="h-8 w-64 rounded-md" />
                <Skeleton className="h-6 w-20 rounded-md" />
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-10">
                {/* Left Section Skeleton */}
                <div className="p-4 h-[600px] w-full">
                    <Skeleton className="w-full h-64 sm:h-80 md:h-96 xl:h-[50%] rounded-xl" />
                    <div className="flex w-full py-4 items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Skeleton className="w-10 h-10 rounded-full" />
                            <Skeleton className="w-24 h-4 rounded-md" />
                        </div>
                        <Skeleton className="w-16 h-4 rounded-md" />
                    </div>
                    <Skeleton className="w-3/4 h-6 rounded-md my-2" />
                    <Skeleton className="w-full h-16 rounded-md my-2" />
                    <Skeleton className="w-24 h-6 rounded-md mt-4" />
                </div>

                {/* Right Section Skeletons */}
                <div className="flex flex-col gap-4">
                    {[1, 2].map((i) => (
                        <div key={i} className="flex gap-4 p-4 h-56 sm:h-64">
                            <Skeleton className="w-[30%] h-full rounded-xl" />
                            <div className="w-[70%] flex flex-col justify-between">
                                <div>
                                    <Skeleton className="w-3/4 h-6 rounded-md mb-2" />
                                    <Skeleton className="w-full h-12 rounded-md" />
                                </div>
                                <div className="flex justify-between mt-4">
                                    <Skeleton className="w-20 h-6 rounded-md" />
                                    <Skeleton className="w-24 h-6 rounded-md" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );


}

export default TopRatedSkeleton