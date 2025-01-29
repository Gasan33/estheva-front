"use client"
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { categories, navigationLinks } from '@/constants';
import { getInitials } from '@/lib/utils';
import { useEffect, useState } from 'react';
import AppBaner from '../../AppBaner';
import SearchBar from '../../SearchBar';
import HeaderPath from '../../HeaderPath';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';
import { AiSecurity01Icon, Calendar01Icon, FavouriteIcon, HelpCircleIcon, Profile02Icon, SecurityIcon, Settings01Icon, UserAccountIcon, UserIcon } from 'hugeicons-react';

export const Header = () => {
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
                    {
                        navigationLinks.map((title) => (
                            <NavigationMenu key={title.id}>
                                <NavigationMenuList
                                    className="flex items-center font-normal text-lg text-white tracking-wide gap-4 hover:bg-transparent"
                                >
                                    {title.dropMenu != null ? (
                                        <NavigationMenuItem >
                                            <NavigationMenuTrigger
                                                className="relative !bg-transparent text-lg font-normal !text-white hover:!text-gray-100 after:bg-transparent"
                                            >
                                                <Link href={title.path} >
                                                    {title.name}
                                                </Link>
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent
                                                className="flex flex-col p-2  w-auto text-gray-50 rounded-lg shadow-lg"
                                            >
                                                {title.dropMenu.map((item: DropMenu) => (
                                                    <Link
                                                        key={item.id}
                                                        href={{
                                                            pathname: `${item.path}`,
                                                            query: { treatments: item.value },
                                                        }}
                                                    // href={item.path}
                                                    >
                                                        <div className="p-2 items-center gap-2 rounded-md justify-center w-56 hover:bg-gray-800">
                                                            {item.name}

                                                        </div>
                                                    </Link>
                                                ))}
                                                {title.name === "Treatments" && categories.map((category) => (
                                                    <Link
                                                        key={category.id}
                                                        href={{
                                                            pathname: "/treatments",
                                                            query: { treatments: category.path },
                                                        }}
                                                    // href={item.path}
                                                    >
                                                        <div className="p-2 items-center gap-2 rounded-md justify-center w-56 hover:bg-gray-800">
                                                            {category.title}
                                                        </div>
                                                    </Link>
                                                ))}
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>

                                    ) : (
                                        <NavigationMenuItem key={title.id}>
                                            <NavigationMenuLink
                                                className='hover:text-gray-300 hover:bg-transparent'

                                                href={title.path}
                                            >
                                                {title.name}
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    )}
                                </NavigationMenuList>
                            </NavigationMenu>
                        ))
                    }

                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                                <AvatarFallback className='bg-amber-100'>{getInitials("GU")}</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>
                                <Link href="/my-profile" className='flex flex-col justify-center items-center gap-2'>
                                    <Avatar className='h-16 w-16' >
                                        {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                                        <AvatarFallback className='bg-amber-100'>{getInitials("GU")}</AvatarFallback>
                                    </Avatar>
                                    <h1 className='text-primary font-semibold text-xl uppercase'>Guest</h1>

                                </Link>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link href="/my-profile" className='flex gap-2 w-full'>
                                    <UserIcon />
                                    <h1>Profile</h1>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <div className='flex gap-2'>
                                    <Calendar01Icon />
                                    <h1>My Appointments</h1>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <div className='flex gap-2'>
                                    <FavouriteIcon />
                                    <h1>Favourite</h1>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <div className='flex gap-2'>
                                    <HelpCircleIcon />
                                    <h1>Help Center</h1>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/terms&conditions" className='flex gap-2'>
                                    <SecurityIcon />
                                    <h1>Terms of use</h1>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/privacy-policy" className='flex gap-2'>
                                    <AiSecurity01Icon />
                                    <h1>Privacy Policy</h1>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <div className='flex gap-2'>
                                    <Settings01Icon />
                                    <h1>Settings</h1>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {/* <DropdownMenuItem> */}
                            <form action={async () => {
                                // "use server";
                                // await signOut();
                            }}
                                className='mb-10'
                            >
                                <Button type='submit' className=' outline text-red bg-transparent w-full rounded-full mt-4 hover:bg-transparent outline-1'>
                                    Logout
                                </Button>
                            </form>
                            {/* </DropdownMenuItem> */}
                        </DropdownMenuContent>
                    </DropdownMenu>
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


