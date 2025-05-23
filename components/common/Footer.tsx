"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { AiPhone01Icon, ArrowDown01Icon, Location10Icon, Mail01Icon } from 'hugeicons-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { BsFacebook, BsInstagram, BsLinkedin, BsTiktok } from 'react-icons/bs';
import { navigationLinks } from '@/constants';
import { motion } from "framer-motion";
import { useCategories } from '@/context/CategoriesContext';

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
    const { categories } = useCategories();

    return (
        showFooter && (
            <footer>
                <div className="px-4 py-8 sm:px-8 lg:px-32 bg-primary bg-pattern text-gray-200">
                    <div className="flex justify-between flex-col lg:flex-row gap-[30px] pb-4">
                        <div className="w-auto text-xs ">
                            <div>
                                <img
                                    src="/icons/logo.svg"
                                    alt="logo"
                                    style={{ height: "auto" }}
                                    width={120}
                                    height={60}
                                    className="object-contain"
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
                            <h1 className='text-lg text-white font-thin'>{navigationLinks[1].name}</h1>
                            <div className='grid grid-cols-3 gap-8 mt-4 text-sm font-thin'>

                                {categories.map((category) => (
                                    <Link
                                        key={category.category_id}
                                        href={`/treatments/categories/${category.category_slug}`}
                                        className="text-sm text-white px-4 py-1 rounded hover:bg-white/10"
                                    >
                                        {category.category_name}
                                    </Link>
                                ))}

                            </div>
                        </div>

                        <div className='flex flex-col justify-between text-lg gap-2 text-white'>
                            {navigationLinks.map(
                                (link) => (link.dropMenu && link.name === "Medical Treatments" ?
                                    <div key={link.id} className="w-full h-full block lg:hidden">
                                        {/* Toggle button for small screens */}
                                        <h1
                                            className="flex items-center text-white text-lg font-thin justify-between"
                                            onClick={() => setIsOpen((prev) => !prev)}
                                        >
                                            {link.name}
                                            <ArrowDown01Icon
                                                className={`text-white transition-all ${isOpen && "rotate-180"
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
                                                {categories?.map((category) => (
                                                    <Link
                                                        key={category.category_id}
                                                        href={`/treatments/categories/${category.category_slug}`}
                                                        className="hover:text-secondaryColor transition-colors duration-200"
                                                    >
                                                        {category.category_name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>
                                    :

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
                            <div className='w-1 h-1 rounded-full bg-white'>

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
