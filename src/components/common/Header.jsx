
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown01Icon } from "hugeicons-react";
import Link from 'next/link';
import UserAvatar from "../common/UserAvatar"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
const navLinks = [
    {
        id: 1,
        path: '/',
        name: 'Home',


    },
    {
        id: 2,
        path: '/',
        name: 'Services',
        dropMenu: [
            {
                id: 1,
                path: '/services/clinic',
                name: 'Clinic Services',
            },
            {
                id: 2,
                path: '/services/home',
                name: 'Home Services',
            },
        ]

    },

    {
        id: 3,
        path: '/special-offers',
        name: 'Special Offers',

    },
    {
        id: 4,
        path: '/about',
        name: 'About us',

    },


    {
        id: 5,
        path: '/contact',
        name: 'Contact',

    },
    {
        id: 6,
        path: '/blogs',
        name: 'News & Blogs',
        dropMenu: [
            {
                id: 1,
                path: '/blogs/news',
                name: 'News',
            },
            {
                id: 2,
                path: '/blogs/blogs',
                name: 'Blogs',
            },
        ]

    },


]

export const Header = () => {
    const pathname = usePathname();
    const hideHeaderRoutes = ["/blogs/news", "/blogs/blogs"];
    const hideHeader = !hideHeaderRoutes.includes(pathname);
    const isActive = (path) => pathname === path;

    return (

        <div className={` ${hideHeader ? "sticky top-0 bg-white z-[9998] md:px-20" : "sticky top-0 bg-transparent z-10 md:px-20"}`}>

            <div className='flex items-center justify-between w-full p-4'>
                <div className='flex items-center justify-center gap-4'>
                    <Link href={'/'} >
                        <img src='/logo.png' alt='Estheva Polyclinic' className='w-[180px] h-[80px]' />
                    </Link>



                    <NavigationMenu className="hidden  md:flex md:gap-4">
                        <NavigationMenuList className="flex items-center gap-4">

                            {/* <NavigationMenuItem key={navLinks[0].id}>
                                <NavigationMenuLink
                                    className={`px-4 py-2 text-sm font-medium rounded-md ${isActive(navLinks[0].path) ? 'text-blue-600 bg-gray-200' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-200'
                                        }`}
                                    href={navLinks[0].path}
                                >
                                    {navLinks[0].name}
                                </NavigationMenuLink>
                            </NavigationMenuItem> */}

                            <NavigationMenu >
                                <NavigationMenuList >
                                    <NavigationMenuItem >
                                        <NavigationMenuTrigger className={`px-4 py-2 bg-transparent text-sm font-medium rounded-md ${isActive(navLinks[1].path) ? 'text-blue-600 bg-gray-200' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-200'
                                            }`}>
                                            <Link href={navLinks[1].path} >
                                                {navLinks[1].name}
                                            </Link>
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent className="flex items-center p-2">
                                            <NavigationMenuLink href={navLinks[1].dropMenu[0].path} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                <div className='flex items-center gap-2 justify-center w-32'>
                                                    <Image src='/clinic.png' alt='clinic' width={24} height={24} />
                                                    {navLinks[1].dropMenu[0].name}
                                                </div>

                                            </NavigationMenuLink>
                                            <NavigationMenuLink href={navLinks[1].dropMenu[1].path} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                <div className='flex items-center gap-2 justify-center w-32'>
                                                    <Image src='/home-care.png' alt='home-care' width={24} height={24} />
                                                    {navLinks[1].dropMenu[1].name}
                                                </div>

                                            </NavigationMenuLink>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>



                            <NavigationMenuItem key={navLinks[2].id}>
                                <NavigationMenuLink
                                    className={`px-4 py-2 text-sm font-medium rounded-md ${isActive(navLinks[2].path) ? 'text-blue-600 bg-gray-200' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-200'
                                        }`}
                                    href={navLinks[2].path}
                                >
                                    {navLinks[2].name}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem key={navLinks[3].id}>
                                <NavigationMenuLink
                                    className={`px-4 py-2 text-sm font-medium rounded-md ${isActive(navLinks[3].path) ? 'text-blue-600 bg-gray-200' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-200'
                                        }`}
                                    href={navLinks[3].path}
                                >
                                    {navLinks[3].name}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem key={navLinks[4].id}>
                                <NavigationMenuLink
                                    className={`px-4 py-2 text-sm font-medium rounded-md ${isActive(navLinks[4].path) ? 'text-blue-600 bg-gray-200' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-200'
                                        }`}
                                    href={navLinks[4].path}
                                >
                                    {navLinks[4].name}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem key={navLinks[5].id}>
                                <NavigationMenuLink
                                    className={`px-4 py-2 text-sm font-medium rounded-md ${isActive(navLinks[5].path) ? 'text-blue-600 bg-gray-200' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-200'
                                        }`}
                                    href={navLinks[5].path}
                                >
                                    {navLinks[5].name}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            {/* <NavigationMenu >
                                <NavigationMenuList >
                                    <NavigationMenuItem >
                                        <NavigationMenuTrigger className={`px-4 bg-transparent py-2 text-sm font-medium rounded-md ${isActive(navLinks[5].path) ? 'text-blue-600 bg-gray-200' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-200'
                                            }`}>
                                            <Link href={navLinks[5].path} >
                                                {navLinks[5].name}
                                            </Link>
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent className="flex p-2">
                                            <NavigationMenuLink href={navLinks[5].dropMenu[0].path} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                {navLinks[5].dropMenu[0].name}
                                            </NavigationMenuLink>
                                            <NavigationMenuLink href={navLinks[5].dropMenu[1].path} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                {navLinks[5].dropMenu[1].name}
                                            </NavigationMenuLink>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu> */}

                            <NavigationMenu >
                                <NavigationMenuList >
                                    <NavigationMenuItem >
                                        <NavigationMenuTrigger className="flex bg-transparent items-center gap-1 px-4  py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-200 rounded-md">

                                            More

                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent className="flex p-2 w-36">
                                            <NavigationMenuLink href="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                FAQs
                                            </NavigationMenuLink>
                                            <NavigationMenuLink href="/support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                Support
                                            </NavigationMenuLink>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>

                        </NavigationMenuList>
                    </NavigationMenu>
                </div>


                <UserAvatar />




            </div>
        </div>
    );
};
