import { ArrowRight01Icon } from 'hugeicons-react'
import Link from 'next/link'
import React from 'react'

const ViewAllText = ({ title, href, titleColor }: { title: string, href: string, titleColor?: string }) => {
    return (
        <div className="flex w-full text-gray-900 justify-between items-center">

            <h2 className={`text-sm md:text-3xl lg:text-4xl font-semibold xl:font-normal ${titleColor != null ? titleColor : "text-gray-900"} `}>
                {title}
            </h2>
            <Link href={href}>
                <div
                    // onClick={() => handelClick(idx)}
                    className="flex gap-2 xl:gap-4 items-center cursor-pointer  duration-700 transform hover:scale-105 hover:duration-300"
                >
                    <span className="text-sm xl:text-xl text-light-500">View All</span>
                    <ArrowRight01Icon className="text-primaryColor" size={24} />

                </div>
            </Link>
        </div>
    )
}

export default ViewAllText