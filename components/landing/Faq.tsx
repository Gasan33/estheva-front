import React from 'react'
import FaqList from "./FaqList"
import ViewAllText from '../common/ViewAllText'
const Faq = () => {
    return (
        <div className='mx-0 w-full items-center justify-center px-4 py-16 sm:px-6 lg:px-32 bg-primary bg-pattern'>
            <ViewAllText href="/faqs" title="Frequently Asked Question" titleColor="text-white" />
            <div className='bg-primary rounded-md p-8 mt-8'>
                <FaqList />
            </div>

        </div>
    )
}

export default Faq
