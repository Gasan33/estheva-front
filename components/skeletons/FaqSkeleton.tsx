import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const FaqSkeleton = () => {
    return (
        <section className="w-full px-4 py-16 sm:px-6 lg:px-32 bg-sky-100 bg-pattern">
            <div className="mb-6">
                <Skeleton className="h-6 w-60 bg-gray-300" />
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center gap-8 rounded-md p-6 mt-4 bg-white shadow-sm">
                <div className="w-full lg:w-2/3 space-y-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <Skeleton key={i} className="h-5 w-full bg-gray-200" />
                    ))}
                </div>

                <div className="w-full lg:w-1/3 flex justify-center">
                    <Skeleton className="h-[300px] w-[300px] rounded-md bg-gray-200" />
                </div>
            </div>
        </section>
    );
};
