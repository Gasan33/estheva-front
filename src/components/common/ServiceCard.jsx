import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Link from 'next/link'
import { Share } from 'lucide-react'



const ServiceCard = ({ item, index }) => {
    const { name, desc, img, price, benfits, dicount, bgColor, textColor } = item
    return (
        <div className='border-2 border-white shadow-xl rounded-[16px] transform transition duration-500 hover:shadow-xl hover:border-primary hover:-translate-y-2 cursor-pointer'>
            <div className="stack">
                {dicount != null && <span className='bg-yellow-400 py-2 px-4 text-[18px] leading-6 font-[700] mt-4 ml-4 rounded-lg text-white items-center justify-center absolute'>
                    {dicount}%
                </span>}
                <img className='w-[100%] h-[250px] object-cover rounded-t-[16px] ' src={img} alt="" />

            </div>

            <div className='p-3 lg:p-5 border-b-2 h-[45%]'>
                <h2 className='text-[24px] leading-7 text-headingColor font-[700] line-clamp-2'>{name}</h2>
                <p className="text-[16px] leading-7 font-[400] text-textColor mt-2 line-clamp-3" >{desc}</p>
                <div className='flex gap-2 mt-2'>
                    <Share size={24} className='p-1 text-primaryColor bg-gray-50 rounded-full w-[32px]' />
                    <p className="text-[12px] leading-6 font-[400] text-textColor line-clamp-1" >{benfits[0]}</p>
                </div>

                <div className='flex gap-2 mt-2'>
                    <Share size={24} className='p-1 text-primaryColor bg-gray-50 rounded-full' />
                    <p className="text-[12px] leading-6 font-[400] text-textColor line-clamp-1" >{benfits[1]}</p>
                </div>




            </div>
            <div className='flex items-center justify-between  p-3 lg:px-5'>
                <h2 className='text-[18px] leading-9 text-headingColor font-[700]'>{price}</h2>
                <Link href={''} className='bg-primary py-2 px-4 shadow-lg rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                    <span className='text-[12px] font-[500] text-white'>View Details</span>
                </Link>
            </div>

        </div>
    )
}

export default ServiceCard