import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Skeleton } from '@/components/ui/skeleton'
import { Location01Icon } from 'hugeicons-react'
import { CircleCheckIcon } from 'lucide-react'

const AppointmentCardSkeleton = () => {
    return (
        <Dialog>
            <DialogTrigger className='flex items-start justify-start text-left'>
                <div className='flex h-[80%]'>
                    <Skeleton className='w-[25%] h-auto rounded-br-[16px]' />
                    <div className='flex flex-col p-2 gap-2 w-full'>
                        <div className='flex justify-between items-start w-full text-xs font-medium'>
                            <Skeleton className='w-1/2 h-4' />
                            <Skeleton className='w-16 h-4' />
                        </div>
                        <div className='flex gap-1 items-center text-xs text-gray-500 font-thin'>
                            <Location01Icon size={16} />
                            <Skeleton className='w-24 h-4' />
                        </div>
                        <div className='flex items-center gap-2'>
                            <Skeleton className='w-6 h-6 rounded-full' />
                            <Skeleton className='w-20 h-4' />
                        </div>
                        <Skeleton className='w-36 h-4' />
                        <Skeleton className='w-40 h-4' />
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='text-center'>Appointment Details</DialogTitle>
                    <DialogDescription />
                </DialogHeader>

                <div>
                    {/* Treatment */}
                    <div>
                        <h1 className='text-lg font-semibold mt-8'>Treatment</h1>
                        <div className='flex gap-2 mt-2'>
                            <Skeleton className='w-[25%] aspect-square rounded-lg' />
                            <div className='flex flex-col gap-2 w-full'>
                                <Skeleton className='h-5 w-3/4' />
                                <Skeleton className='h-4 w-1/2' />
                                <Skeleton className='h-4 w-1/3' />
                                <Skeleton className='h-4 w-1/3' />
                                <Skeleton className='w-20 h-4 self-end' />
                            </div>
                        </div>
                    </div>

                    {/* Doctor */}
                    <div className='w-full mt-8'>
                        <h1 className='text-lg font-semibold'>Doctor</h1>
                        <div className='flex gap-2 mt-2 w-full'>
                            <Skeleton className='w-[15%] aspect-square rounded-lg' />
                            <div className='flex flex-col gap-2 w-full'>
                                <Skeleton className='h-5 w-3/4' />
                                <Skeleton className='h-4 w-1/2' />
                                <div className='flex justify-between w-full'>
                                    <Skeleton className='h-4 w-1/6' />
                                    <Skeleton className='h-4 w-1/6' />
                                    <Skeleton className='h-4 w-1/6' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Appointment Schedule */}
                    <div className='mt-8'>
                        <h1 className='text-lg font-semibold'>Appointment Schedule</h1>
                        <div className='flex flex-col gap-2 mt-4'>
                            <Skeleton className='h-4 w-1/2' />
                            <Skeleton className='h-4 w-1/3' />
                        </div>
                    </div>

                    {/* Patient Details */}
                    <div className='mt-8'>
                        <h1 className='text-lg font-semibold'>Patient Details</h1>
                        <div className='flex flex-col gap-2 mt-4'>
                            <Skeleton className='h-4 w-1/2' />
                            <Skeleton className='h-4 w-1/4' />
                            <Skeleton className='h-4 w-1/4' />
                            <Skeleton className='h-4 w-1/4' />
                        </div>
                    </div>

                    {/* General Instructions */}
                    <div className='mt-8'>
                        <h1 className='text-lg font-semibold'>General Instructions</h1>
                        <div className='flex flex-col gap-2 mt-4'>
                            <div className='flex gap-2 items-center'>
                                <CircleCheckIcon size={20} className='text-primaryColor' />
                                <Skeleton className='h-4 w-3/4' />
                            </div>
                            <div className='flex gap-2 items-center'>
                                <CircleCheckIcon size={20} className='text-primaryColor' />
                                <Skeleton className='h-4 w-1/2' />
                            </div>
                        </div>
                    </div>
                </div>

                <DialogFooter>
                    <Skeleton className='w-full h-12 rounded-lg mt-4' />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default AppointmentCardSkeleton
