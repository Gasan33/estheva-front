"use client"
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AppBaner from '../../AppBaner';
import SearchBar from '../../SearchBar';
import { Session } from 'next-auth';
import UserDropdown from '../../UserDropDown';
import NavMenuItems from '../../NavMenuItems';

export const Header = ({ session }: { session: Session }) => {
    const pathname = usePathname();
    const hideHeaderRoutes = ["/blogs/news", "/blogs/blogs"];
    const hideHeader = !hideHeaderRoutes.includes(pathname);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showPageTitle, setShowPageTitle] = useState(false);
    const pageName = pathname.split('/')[1];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 10);
            setShowPageTitle(scrollY > 200 && scrollY < 400);
        };

        // Add event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup on unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    return (

        <div
            className={`hidden xl:block xl:fixed xl:top-0 xl:w-full xl:bg-primary 
                ${hideHeader
                    ? "xl:z-[9998] xl:sticky xl:top-0"
                    : "xl:z-10 xl:sticky xl:top-0 xl:bg-transparent"
                } `}
        >
            <div
                className={
                    `flex flex-col w-full transition-all duration-500
                    ${showPageTitle ? "bg-primary fixed  transition-all duration-500" : "fixed bg-transparent transition-all duration-500"}`
                }>
                <div
                    className={`flex w-full py-2 px-12 flex-row justify-between items-center transition-all duration-500 
                ${isScrolled ? "bg-primary " : " bg-transparent"}
            `}
                >
                    <Link href={'/'} >
                        <Image src='/icons/logo.svg' alt='Estheva Polyclinic' width={120} height={60} className='object-contain h-12' />
                    </Link>
                    <NavMenuItems />

                    <UserDropdown session={session} />
                </div>
                {showPageTitle && (
                    pageName === "" ? <div></div> : <div className='flex flex-col md:flex-row px-12 gap-4 justify-between items-center '>
                        <h1 className=' py-4  w-full font-normal sticky uppercase text-4xl transition-all duration-500 text-white'>
                            {pageName === "" ? "Home" : pageName}
                        </h1>
                        <SearchBar hint="Search for ..." />
                    </div>
                )}


            </div>

            <AppBaner />

        </div>
    );
};


