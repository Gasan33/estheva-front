/* eslint-disable react/prop-types */
"use client"
import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const FaqItem = ({ item }: { item: FAQ }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggelAccordion = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className='p-3 lg:p-5 rounded-[12px] border border-solid border-primaryColor mb-5 cursor-pointer'>
            <div className="flex items-center justify-between gap-5" onClick={toggelAccordion}>
                <h4 className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-primaryColor">{item.title}</h4>
                <div className={`${isOpen && "bg-primaryColor text-white border-none"}
                 w-7 h-7 lg:h-8 border border-solid text-primaryColor border-primary rounded flex items-center justify-center`}>
                    {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
            </div>

            {isOpen && <div className='mt-4'>
                <p className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-gray-950'>{item.answer}</p>
            </div>}
        </div>
    )
}

export default FaqItem