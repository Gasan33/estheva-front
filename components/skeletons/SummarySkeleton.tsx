import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SummarySkeleton = () => {
    return (
        <div>
            {/* Treatment Section Skeleton */}
            <div>
                <h1 className="text-xs md:text-sm lg:text-lg xl:text-xl font-semibold mb-4">Treatment</h1>
                <div className="flex flex-row p-2 rounded-xl border border-gray-100 shadow-md gap-4 bg-white w-full items-center">
                    {/* Image Skeleton */}
                    <Skeleton className="w-1/3 sm:w-1/4 h-24 sm:h-32 rounded-lg" />

                    {/* Details Skeleton */}
                    <div className="flex flex-col gap-2 w-full text-[8px] sm:text-sm">
                        <Skeleton className="h-4 w-1/2" />
                        <Skeleton className="h-3 w-3/4" />
                        <div className="flex items-center gap-2">
                            <Skeleton className="w-6 h-6 sm:w-8 sm:h-8 rounded-full" />
                            <Skeleton className="h-3 w-1/2" />
                        </div>
                        <Skeleton className="h-4 w-1/3" />
                        <Skeleton className="h-4 w-1/4" />
                    </div>
                </div>
            </div>

            {/* Patient Details Skeleton */}
            <div className="mt-8">
                <h1 className="text-xs md:text-sm lg:text-lg xl:text-xl font-semibold">Patient Details</h1>
                <div className="flex flex-col gap-2 p-2 md:p-4 mt-4 rounded-xl border border-gray-100 shadow-md">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="flex gap-2">
                            <Skeleton className="w-[20%] h-3" />
                            <Skeleton className="h-3 w-full" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Address Details Skeleton */}
            <div className="mt-8">
                <h1 className="text-xs md:text-sm lg:text-lg xl:text-xl font-semibold">Address Details</h1>
                <div className="flex flex-col gap-1 border border-primaryColor bg-teal-50 p-2 rounded-lg my-4">
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-3 w-1/2" />
                    <Skeleton className="h-3 w-2/3" />
                    <Skeleton className="h-3 w-3/4" />
                </div>
            </div>

            {/* Price Details Skeleton */}
            <div className="mt-8">
                <h1 className="text-xs md:text-sm lg:text-lg xl:text-xl font-semibold">Price Details</h1>
                <div className="text-[8px] sm:text-sm text-gray-500 mt-8">
                    {["Subtotal", "Extra", "Tax", "Total"].map((label, idx) => (
                        <div key={idx} className="flex justify-between mb-2">
                            <Skeleton className="w-1/4 h-3" />
                            <Skeleton className="w-1/6 h-3" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SummarySkeleton;
