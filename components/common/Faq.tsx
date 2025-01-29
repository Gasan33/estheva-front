import React from 'react'
import FaqList from "./FaqList"
import { ArrowRightIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ArrowRight01Icon } from 'hugeicons-react'
const Faq = () => {
    return (
        <div className='mx-0 bg-secondary w-full items-center justify-center px-4 py-16 sm:px-6 lg:px-32'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-8"'>
                <div className='h-auto'>
                    <h3 className="text-xl text-primary sm:text-xl">
                        FAQ questions
                    </h3>
                    <h2 className="text-2xl   font-[500] mt-8 text-gray-900 sm:text-[48px]">
                        Frequently Asked
                    </h2>
                    <h2 className="text-2xl   font-[500] mt-4 text-gray-900 sm:text-[48px]">
                        Question
                    </h2>

                </div>
                <div className='bg-white rounded-md p-8'>
                    <FaqList />
                </div>
            </div>

            <div className='flex w-full mt-16 justify-center'>
                <Button className='lg:mt-8 mt-4 py-6 px-8 rounded-full bg-white shadow-lg'>
                    View All
                    <ArrowRight01Icon size={32} className='text-teal-500' />
                </Button>
            </div>

        </div>
    )
}

export default Faq
