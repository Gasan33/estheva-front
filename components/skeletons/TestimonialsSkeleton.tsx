import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const TestimonialsSkeleton = () => {
    return (
        <section className="w-full px-4 py-16 sm:px-6 lg:px-32">
            <div className="flex flex-col md:flex-row items-center gap-8 px-4 py-8">
                {/* Image Skeleton */}
                <div className="w-full md:w-1/2 h-[300px] md:h-[400px]">
                    <Skeleton className="w-full h-full rounded-xl bg-gray-200" />
                </div>

                {/* Text Skeleton */}
                <div className="max-w-lg md:w-1/2 py-4 space-y-4">
                    <Skeleton className="h-5 w-1/2 bg-gray-300" />
                    <Skeleton className="h-8 w-2/3 bg-gray-300" />
                    <Skeleton className="h-4 w-40 bg-gray-200" />
                    <Skeleton className="h-4 w-full bg-gray-100" />
                    <Skeleton className="h-4 w-3/4 bg-gray-100" />
                    <Skeleton className="h-4 w-2/3 bg-gray-100" />

                    <div className="flex items-center justify-between mt-6 gap-6">
                        {/* Avatar */}
                        <div className="flex items-center gap-4">
                            <Skeleton className="h-16 w-16 rounded-full bg-gray-300" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-32 bg-gray-200" />
                                <Skeleton className="h-4 w-24 bg-gray-100" />
                            </div>
                        </div>

                        {/* Arrows */}
                        <div className="flex gap-4">
                            <Skeleton className="h-10 w-10 rounded-md bg-gray-200" />
                            <Skeleton className="h-10 w-10 rounded-md bg-gray-200" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
