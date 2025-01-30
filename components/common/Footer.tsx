"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { AiPhone01Icon, ArrowDown01Icon, Location10Icon, Mail01Icon } from 'hugeicons-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { BsFacebook, BsInstagram, BsLinkedin, BsTiktok } from 'react-icons/bs';
import { categories, navigationLinks } from '@/constants';
import { motion } from "framer-motion";

const socialLinks: SocialLink[] = [
    {
        path: "",
        icon: <BsFacebook className=" w-4 h-5" />,
    },
    {
        path: "",
        icon: <BsTiktok className=" w-4 h-5" />,
    },
    {
        path: "",
        icon: <BsInstagram className=" w-4 h-5" />,
    },
    {
        path: "",
        icon: <BsLinkedin className=" w-4 h-5" />,
    },
];


export const Footer: React.FC = () => {
    const pathname = usePathname();
    const hideFooterRoutes: string[] = ["/blogs/news", "/blogs/blogs"];
    const showFooter = !hideFooterRoutes.includes(pathname);
    const year: number = new Date().getFullYear();
    const [isOpen, setIsOpen] = useState(false);

    return (
        showFooter && (
            <footer>
                <div className="px-4 py-8 sm:px-8 lg:px-32 bg-primary bg-pattern text-gray-200">
                    <div className="flex justify-between flex-col lg:flex-row gap-[30px] pb-4">
                        <div className="w-auto text-xs ">
                            <div>
                                <Image
                                    src="/icons/logo.svg"
                                    alt="logo"
                                    className="object-contain"
                                    width={120}
                                    height={60}
                                />
                                <div className="flex items-center gap-2 bottom-0 mt-4">
                                    <AiPhone01Icon
                                        className="p-1 bg-white rounded-full"
                                        size={24}
                                        color="#172554"
                                    />
                                    <span className="">
                                        +971 4 330 9084
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 bottom-0 mt-4">
                                    <Mail01Icon
                                        className="p-1 bg-white rounded-full"
                                        size={24}
                                        color="#172554"
                                    />
                                    <span className="">
                                        info@estheva-polyclinic.ae
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 bottom-0 mt-2">
                                    <Location10Icon
                                        className="p-1 bg-white rounded-full"
                                        size={24}
                                        color="#172554"
                                    />
                                    <span className="">
                                        UAE, Dubai, Jumeira 1, Al Wasl Road, Building 375b.
                                    </span>
                                </div>

                            </div>


                        </div>
                        <div className='w-[50%] h-full hidden lg:block'>
                            <h1 className='text-lg text-primaryColor font-thin'>{navigationLinks[0].name}</h1>
                            <div className='grid grid-cols-3 gap-8 mt-4 text-sm font-thin'>
                                {navigationLinks[0].dropMenu!.map(
                                    (link) => (
                                        <Link
                                            key={link.id}
                                            href={{
                                                pathname: `${link.path}`,
                                                query: { treatments: link.value },
                                            }}
                                        >
                                            {link.name}

                                        </Link>
                                    )
                                )}
                                {categories.map((category) => (
                                    <Link
                                        key={category.id}
                                        href={{
                                            pathname: "/treatments",
                                            query: { treatments: category.path },
                                        }}
                                    >
                                        {category.title}

                                    </Link>
                                ))}

                            </div>
                        </div>
                        <div className="w-full h-full block lg:hidden">
                            {/* Toggle button for small screens */}
                            <h1
                                className="flex items-center text-primaryColor text-lg font-thin justify-between"
                                onClick={() => setIsOpen((prev) => !prev)}
                            >
                                {navigationLinks?.[0]?.name}
                                <ArrowDown01Icon
                                    className={`text-primaryColor transition-all ${isOpen && "rotate-180"
                                        }`}
                                    size={24}
                                />
                            </h1>

                            {/* Menu Items */}
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className={`overflow-hidden ${isOpen ? "block" : "hidden"} md:block`}
                            >

                                <div className="grid grid-cols-1 gap-8 mt-4 pl-4 text-sm font-thin">
                                    {navigationLinks?.[0]?.dropMenu?.map((link) => (
                                        <Link
                                            key={link.id}
                                            href={{
                                                pathname: link.path,
                                                query: { treatments: link.value },
                                            }}
                                            className="hover:text-secondaryColor transition-colors duration-200"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                    {categories?.map((category) => (
                                        <Link
                                            key={category.id}
                                            href={{
                                                pathname: "/treatments",
                                                query: { treatments: category.path },
                                            }}
                                            className="hover:text-secondaryColor transition-colors duration-200"
                                        >
                                            {category.title}
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                        <div className='flex flex-col justify-between text-lg gap-2 text-primaryColor'>
                            {navigationLinks.slice(1, 5).map(
                                (link) => (
                                    <Link
                                        key={link.id}
                                        href={{
                                            pathname: `${link.path}`,
                                        }}
                                    >
                                        {link.name}

                                    </Link>
                                )
                            )}
                        </div>

                    </div>

                    <div className="flex justify-between flex-col md:flex-row flex-wrap ">
                        <div className="flex items-center mt-4 gap-4">
                            {socialLinks.map((link, index) => (
                                <Link
                                    href={link.path}
                                    key={index}
                                    className="flex items-center justify-center"
                                >
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-row gap-2 items-center  text-xs mt-8">

                            <Link
                                href={"/terms&conditions"}

                            >
                                Terms & Conditions
                            </Link>
                            <div className='w-1 h-1 rounded-full bg-primaryColor'>

                            </div>

                            <Link
                                href={"/privacy-policy"}

                            >
                                Privacy Policy
                            </Link>
                        </div>

                    </div>
                    <p className="text-center mt-8 text-[8px] text-gray-200">
                        Copyright © {year} Estheva-Polyclinic all right reserved.
                    </p>
                </div>
            </footer>
        )
    );
};

export default Footer;
