import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const TreatmentDetailsSkeleton = () => {
    return (
        <div className='m-4 md:mx-16'>
            {/* Breadcrumb Skeleton */}
            <div className='flex flex-col my-8 gap-4 pb-4'>
                <Skeleton className="h-5 w-64" />
            </div>

            {/* Title and Icons */}
            <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-col gap-2'>
                    <Skeleton className='h-6 w-60' />
                    <Skeleton className='h-4 w-32' />
                </div>
                <div className='flex items-center gap-8'>
                    <Skeleton className='h-8 w-20 rounded-full' />
                    <Skeleton className='h-8 w-20 rounded-full' />
                </div>
            </div>

            {/* Treatment Images */}
            <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-2">
                <Skeleton className="h-[600px] w-full" />
                <div className="grid grid-cols-2 gap-2">
                    {[...Array(4)].map((_, idx) => (
                        <Skeleton key={idx} className="h-[296px] w-full" />
                    ))}
                </div>
            </div>

            {/* Info + Sidebar */}
            <div className='grid grid-cols-1 xl:grid-cols-3 py-8 gap-8'>
                <div className='xl:col-span-2 space-y-4'>
                    <Skeleton className='h-6 w-1/2' />
                    <Skeleton className='h-4 w-1/4' />
                    <Skeleton className='h-4 w-1/3' />
                    <Skeleton className='h-6 w-2/3' />
                    <Skeleton className='h-32 w-full' />
                    <Skeleton className='h-64 w-full' />
                    <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
                        {[...Array(4)].map((_, idx) => (
                            <Skeleton key={idx} className="h-40 w-48" />
                        ))}
                    </div>
                </div>
                <div className='p-4 rounded-xl bg-green-50 space-y-4'>
                    <Skeleton className='h-6 w-3/4' />
                    {[...Array(3)].map((_, idx) => (
                        <Skeleton key={idx} className='h-4 w-full' />
                    ))}
                    <Skeleton className='h-6 w-2/3' />
                    {[...Array(2)].map((_, idx) => (
                        <Skeleton key={idx} className='h-4 w-full' />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TreatmentDetailsSkeleton
