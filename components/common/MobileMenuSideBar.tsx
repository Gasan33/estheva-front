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
import { profileSideBarList } from '@/constants'
import { getInitials } from '@/lib/utils'
import { Avatar, AvatarFallback } from '../ui/avatar'
import {
    AiSecurity01Icon,
    Calendar01Icon,
    FavouriteIcon,
    Notification01Icon,
    PasswordValidationIcon,
    SecurityIcon,
    SystemUpdate01Icon,
} from 'hugeicons-react'
import { Button } from '../ui/button'
import { signOut, useSession } from 'next-auth/react'

const MobileMenuSideBar = () => {
    const pathname = usePathname()
    const session = useSession();
    const activePath = pathname.split('/')[2]

    const handleSignOut = async () => {
        try {
            await signOut({ callbackUrl: "/" });
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <div className="relative flex flex-col py-6 px-4 bg-gray-50 border-r border-gray-200 justify-between">
            {/* User Info */}
            <div>
                <Link href="/my-profile" className="flex flex-col items-center gap-4 mb-8">
                    <Avatar className="h-16 w-16 lg:h-20 lg:w-20">
                        <AvatarFallback className="bg-amber-100 text-xl">
                            {getInitials("Guest User")}
                        </AvatarFallback>
                    </Avatar>
                    <h1 className="text-primary font-semibold text-lg lg:text-xl uppercase">{session.data?.user.name}</h1>
                </Link>

                {/* Sidebar Navigation */}
                <Command className="w-full mb-8">
                    <CommandList>
                        <CommandEmpty>No options found.</CommandEmpty>
                        <CommandGroup >
                            {profileSideBarList.map((item, index) => (
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
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </div>


            {/* Logout Button */}
            <div className="mt-auto">

                <Button
                    variant="outline"
                    onClick={handleSignOut}
                    className="w-full text-sm lg:text-base text-red-600 border border-red-600 bg-transparent hover:bg-red-50 rounded-full py-2"
                >
                    Logout
                </Button>

            </div>
        </div>
    )
}

export default MobileMenuSideBar
