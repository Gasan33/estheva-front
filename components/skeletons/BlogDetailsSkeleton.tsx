import { Skeleton } from "@/components/ui/skeleton"
import { ArrowRight01Icon } from "hugeicons-react"

export default function BlogDetailSkeleton() {
    return (
        <div className="p-4 md:px-16 bg-pattern">
            <div className="flex flex-col my-8 gap-4 pb-4">
                {/* Breadcrumb Skeleton */}
                <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-20" />
                    <ArrowRight01Icon className="text-gray-400" size={20} />
                    <Skeleton className="h-4 w-16" />
                    <ArrowRight01Icon className="text-gray-400" size={20} />
                    <Skeleton className="h-4 w-32" />
                </div>
            </div>

            <div className="my-4 md:my-6 lg:my-8 xl:my-12">
                {/* Blog Title Skeleton */}
                <Skeleton className="h-10 md:h-14 w-3/4 mb-6" />

                <div className="my-4 md:my-6 lg:my-8 xl:my-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Blog Content Skeleton */}
                    <div className="space-y-4">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                        <Skeleton className="h-4 w-2/3" />
                        <Skeleton className="h-4 w-1/2" />
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-2/3" />
                    </div>

                    {/* Blog Image Skeleton */}
                    <Skeleton className="w-full h-[600px] rounded-lg" />
                </div>
            </div>
        </div>
    )
}
