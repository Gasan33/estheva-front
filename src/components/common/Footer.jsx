
import React from 'react'
import Link from 'next/link';
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import { Location10Icon, Mail01Icon } from 'hugeicons-react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

const socialLinks = [
    {
        path: "",
        icon: <AiFillYoutube className='group-hover:text-white w-4 h-5' />,
    },
    {
        path: "https://github.com/Gasan33",
        icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />,
    },
    {
        path: "",
        icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5' />,
    },
    {
        path: "",
        icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />,
    },
]

const quickLinks01 = [
    {
        path: "/home",
        display: "Home",
    },
    {
        path: "/",
        display: "About Us",
    },
    {
        path: "/services",
        display: "Services",
    },
    {
        path: "/",
        display: "Blog",
    },
]

const quickLinks02 = [
    {
        path: "/find-a-doctor",
        display: "Find a Doctor",
    },
    {
        path: "/",
        display: "Request an Appointment",
    },
    {
        path: "/",
        display: "Find a Location",
    },
    {
        path: "/",
        display: "Get a Opinion",
    },
]
const quickLinks03 = [
    {
        path: "/",
        display: "Donate",
    },
    {
        path: "/contact",
        display: "Contact Us",
    },

]
export const Footer = () => {
    const pathname = usePathname();
    console.log(pathname)
    const hideFooterRoutes = ["/blogs/news", "/blogs/blogs"];
    const showFooter = !hideFooterRoutes.includes(pathname);
    const year = new Date().getFullYear()
    return showFooter && <footer >
        {/* <div className='flex px-4 py-8 sm:py-8 sm:px-8 lg:px-32 bg-primary gap-60 text-white'>
            <div>
                <h3 className="text-xl font-[300]  sm:text-[24px]">
                    Subscribe Newsletter
                </h3>
                <h2 className="text-2xl font-[500] mt-4  sm:text-[44px]">
                    Get latest updates by
                </h2>
                <h2 className="text-2xl font-[500] mt-8  sm:text-[44px]">
                    Subscribing to our newsletter
                </h2>
            </div>
            <div className='flex items-center h-[32] '>
                <div className='py-3 px-3 w-full rounded-lg bg-white'>
                    <input type="text" placeholder='Your email address' />
                    <Button className='bg-blue-950'>
                        Subscribe
                    </Button>
                </div>

            </div>

        </div> */}

        <div className='px-4 py-8 sm:py-16 sm:px-8 lg:px-32 bg-blue-950 text-white'>
            <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px] pb-4 border-gray-600 border-b-[1px]">
                <div className='w-auto sm:w-[500px]'>
                    <div>
                        <img src='/lightLogo.png' alt="" className='w-[180px] h-[40px] mb-4' />
                        <p className='text-[14px] leading-7 font-[400] text-gray-200 '>Estheva Polyclinic is your trusted destination for premium healthcare services, offering personalized treatments and advanced medical care. Committed to your well-being, we blend expertise with innovation to ensure a healthier, happier you.</p>
                    </div>

                    <div className='flex items-center gap-2 bottom-0 mt-4'>
                        <Mail01Icon className='p-1 bg-white rounded-full' size={24} color='#172554' />
                        <span className='text-[14px] leading-7 text-gray-200 font-[400]'>info@estheva-polyclinic.ae</span>
                    </div>
                    <div className='flex items-center gap-2 bottom-0 mt-2'>
                        <Location10Icon className='p-1 bg-white rounded-full' size={24} color='#172554' />
                        <span className='text-[14px] leading-7 text-gray-200 font-[400]'>UAE,Dubai,Jumeira 1,Al Wasl Road,Building 375b.</span>
                    </div>
                </div>

                <div>
                    <h2 className='text-[18px] font-[500] mb-6 text-gray-200'>Quick Links</h2>
                    <ul>
                        {quickLinks01.map((item, index) => <li key={index} className='mb-4 pl-1'>
                            <Link href={item.path} className='text-[14px] leading-7 font-[400] text-gray-200'>
                                {item.display}
                            </Link>
                        </li>)}
                    </ul>
                </div>

                <div>
                    <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-gray-200'>I want to:</h2>
                    <ul>
                        {quickLinks02.map((item, index) => <li key={index} className='mb-4'>
                            <Link href={item.path} className='text-[16px] leading-7 font-[400] text-gray-200'>
                                {item.display}
                            </Link>
                        </li>)}
                    </ul>
                </div>

                <div>
                    <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-gray-200'>Support</h2>
                    <ul>
                        {quickLinks03.map((item, index) => <li key={index} className='mb-4'>
                            <Link href={item.path} className='text-[16px] leading-7 font-[400] text-gray-200'>
                                {item.display}
                            </Link>
                        </li>)}
                    </ul>
                </div>
            </div>

            <div className='flex justify-between flex-col md:flex-row flex-wrap '>
                <div className='flex flex-col md:flex-row '>
                    <p className='text-[14px] leading-7 h-6 font-[300] text-gray-200 mt-4 pr-4 border-r-[1px] border-gray-600'>Copyright © {year} Estheva-Polyclinic all right reserved.</p>
                    <Link href={'/terms&conditions'} className='text-[14px] h-6 leading-7 font-[300] text-gray-200 mt-4 px-4 border-r-[1px] border-gray-600'>
                        Terms & Conditions
                    </Link>

                    <Link href={'/privacy-policy'} className='text-[14px] h-6 leading-7 font-[300] text-gray-200 mt-4 px-4'>
                        Privacy Policy
                    </Link>

                </div>
                <div className='flex items-center gap-3 mt-4'>
                    {socialLinks.map((link, index) => <Link href={`${link.path}`} key={index} className='w-9 h-9 border-2 border-white rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'>{link.icon}</Link>)}
                </div>
            </div>
        </div>


    </footer>


}

export default Footer