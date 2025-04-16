"use client"
import React from 'react'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigationLinks, profileSideBarList } from '@/constants'
import { getInitials } from '@/lib/utils'
import {
    AiSecurity01Icon,
    Calendar01Icon,
    FavouriteIcon,
    Home01Icon,
    Notification01Icon,
    PasswordValidationIcon,
    SecurityIcon,
    SystemUpdate01Icon,
} from 'hugeicons-react'
import { signOut, useSession } from 'next-auth/react'
import { useCategories } from '@/context/CategoriesContext'
import { BsFacebook, BsTiktok, BsInstagram, BsLinkedin } from 'react-icons/bs'
import SignInSignUpButtons from './SignInSignUpButtons'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

type MobileNavProps = {
    mobileMenuOpen?: boolean;
    toggleSidebar?: () => void;
};
const socialLinks = [
    { path: '', icon: <BsFacebook className="w-4 h-5" /> },
    { path: '', icon: <BsTiktok className="w-4 h-5" /> },
    { path: '', icon: <BsInstagram className="w-4 h-5" /> },
    { path: '', icon: <BsLinkedin className="w-4 h-5" /> },
];

const MobileNav: React.FC<MobileNavProps> = ({ mobileMenuOpen = false, toggleSidebar }) => {
    const { categories } = useCategories();
    const year = new Date().getFullYear();
    const pathname = usePathname()
    const { data: session } = useSession();
    const activePath = pathname.split('/').pop();

    const handleSignOut = async () => {
        try {
            await signOut({ callbackUrl: "/" });
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    // if (!session?.user) return <SignInSignUpButtons />;

    const isAdmin = session?.user.role === "admin";
    const userName = session?.user?.name || "Guest";
    const avatarInitials = getInitials(userName);

    return (

        <div className='relative'>

            <div
                className={`fixed overflow-scroll inset-y-0 left-0 z-[999999] w-64 bg-white shadow-lg transition-transform duration-300 xl:hidden ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <Link href="/" className=" w-full h-20 bg-primary">
                    <Image
                        src="/icons/logo.svg"
                        alt="Estheva Polyclinic"
                        width={280}
                        height={160}
                        priority
                        className="object-contain h-16"
                        style={{ height: "auto", width: "100%" }}
                    />
                </Link>
                <div className="relative flex flex-col py-6 px-4 bg-gray-50 border-r border-gray-200 justify-between">
                    {/* User Info */}
                    <div>
                        <Link href={isAdmin ? "/admin/dashboard" : "/my-profile"} className="flex flex-col items-center gap-2">
                            <Avatar className="h-16 w-16">
                                <AvatarFallback className="bg-amber-100 text-xl text-primary font-semibold">
                                    {avatarInitials}
                                </AvatarFallback>
                            </Avatar>
                            <span className="text-primary font-semibold text-xl uppercase">{userName}</span>
                        </Link>

                        {!session?.user && (
                            <div className="flex justify-center my-8">
                                <Link
                                    href="/sign-in"
                                    className="w-1/2 bg-primary rounded-lg text-center py-2 text-white "
                                >
                                    Sign in
                                </Link>

                            </div>
                        )}

                        {/* Sidebar Navigation */}
                        <Command className="w-full mb-8">
                            <CommandList>
                                <CommandEmpty>No options found.</CommandEmpty>
                                <CommandGroup >
                                    <CommandItem className="w-full">
                                        <Link
                                            href="/"
                                            className={`flex items-center gap-3 p-3 rounded-md text-sm lg:text-base font-medium w-full ${activePath === "/"
                                                ? "bg-primary/10 text-primary"
                                                : "text-gray-600"
                                                }`}
                                        >
                                            <Home01Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                                            Home
                                        </Link>
                                    </CommandItem>
                                    {categories.map((category) => (
                                        <CommandItem key={category.category_id} className="w-full">
                                            <Link
                                                href={`/treatments/categories/${category.category_slug}`}
                                                className={`flex items-center gap-3 p-3 rounded-md text-sm lg:text-base font-medium w-full ${activePath === category.category_slug
                                                    ? "bg-primary/10 text-primary"
                                                    : "text-gray-600"
                                                    }`}
                                            >
                                                <Image
                                                    src={category.relations.images.attributes.path}
                                                    alt={category.category_name}
                                                    className="w-4 h-4"
                                                    width={64}
                                                    height={64}
                                                />
                                                <span>{category.category_name}</span>
                                            </Link>
                                        </CommandItem>
                                    ))}

                                    {session?.user && (profileSideBarList.map((item, index) => (
                                        <CommandItem key={index} className="w-full">
                                            <Link
                                                href={`/my-profile/${item.path}`}
                                                className={`flex items-center gap-3 p-3 rounded-md text-sm lg:text-base font-medium w-full ${activePath === item.path
                                                    ? "bg-primary/10 text-primary"
                                                    : "text-gray-600"
                                                    }`}
                                            >
                                                {item.id === 1 ? (
                                                    <Calendar01Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                                                ) : item.id === 2 ? (
                                                    <FavouriteIcon className="w-5 h-5 lg:w-6 lg:h-6" />
                                                ) : item.id === 3 ? (
                                                    <SystemUpdate01Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                                                ) : item.id === 4 ? (
                                                    <PasswordValidationIcon className="w-5 h-5 lg:w-6 lg:h-6" />
                                                ) : item.id === 5 ? (
                                                    <Notification01Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                                                ) : item.id === 6 ? (
                                                    <SecurityIcon className="w-5 h-5 lg:w-6 lg:h-6" />
                                                ) : (
                                                    <AiSecurity01Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                                                )}
                                                <span>{item.title}</span>
                                            </Link>
                                        </CommandItem>
                                    )))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </div>


                    {session?.user && (
                        <div className="mt-auto">

                            <Button
                                variant="outline"
                                onClick={handleSignOut}
                                className="w-full text-sm lg:text-base text-red-600 border border-red-600 bg-transparent hover:bg-red-50 rounded-full py-2"
                            >
                                Logout
                            </Button>

                        </div>)}
                </div>

                <div className="mt-6">
                    <div className="flex justify-center gap-4">
                        {socialLinks.map((link, index) => (
                            <Link key={index} href={link.path} className="flex items-center justify-center text-primary">
                                {link.icon}
                            </Link>
                        ))}
                    </div>

                    <div className="flex justify-center items-center gap-2 text-xs mt-2">
                        <Link href="/terms&conditions">Terms & Conditions</Link>
                        <span className="w-1 h-1 bg-primaryColor rounded-full" />
                        <Link href="/privacy-policy">Privacy Policy</Link>
                    </div>

                    <p className="text-center mt-2 text-[8px] text-primary-600">
                        © {year} Estheva-Polyclinic. All rights reserved.
                    </p>
                </div>
            </div>
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black/50 xl:hidden" onClick={toggleSidebar} />
            )}
        </div>

    );
};

export default MobileNav;
