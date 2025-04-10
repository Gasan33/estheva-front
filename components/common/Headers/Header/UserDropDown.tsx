"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from 'next/link';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import { AiSecurity01Icon, Calendar01Icon, FavouriteIcon, HelpCircleIcon, SecurityIcon, Settings01Icon, UserIcon } from 'hugeicons-react';
import { signOut, useSession } from "next-auth/react";
import { getInitials } from "@/lib/utils";

import SignInSignUpButtons from "./SignInSignUpButtons";
import { useEffect } from "react";

const UserDropdown = () => {
    const session = useSession();
    const handleSignOut = async () => {
        try {
            await signOut({ callbackUrl: "/" });  // Corrected signOut function
        } catch (error) {
            // console.error("Error signing out:", error);
        }
    };

    if (session.data == null) {
        return <SignInSignUpButtons />
    }

    const isAdmin = session.data.user.role == "admin" || false;

    useEffect(() => {
        console.log(session.data.user)
    }, [])

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarFallback className='bg-amber-100'>
                        {getInitials(session.data.user?.name || 'GU')}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuLabel>
                    <Link href={isAdmin ? "/admin/dashboard" : "/my-profile"} className="flex flex-col justify-center items-center gap-2">
                        <Avatar className="h-16 w-16">
                            <AvatarFallback className="bg-amber-100">
                                {getInitials(session.data.user?.name || 'GU')}
                            </AvatarFallback>
                        </Avatar>
                        <h1 className="text-primary font-semibold text-xl uppercase">{session.data.user?.name || 'Guest'}</h1>
                    </Link>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    <Link href={isAdmin ? "/admin/dashboard" : "/my-profile"} className="flex gap-2 w-full">
                        {<UserIcon />}
                        <h1>{isAdmin ? "Dashboard" : "Profile"}</h1>
                    </Link>
                </DropdownMenuItem>

                {!isAdmin &&
                    <>
                        <DropdownMenuItem>
                            <div className="flex gap-2">
                                <Calendar01Icon />
                                <h1>My Appointments</h1>
                            </div>
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            <div className="flex gap-2">
                                <FavouriteIcon />
                                <h1>Favourite</h1>
                            </div>
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            <div className="flex gap-2">
                                <HelpCircleIcon />
                                <h1>Help Center</h1>
                            </div>
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            <Link href="/terms&conditions" className="flex gap-2">
                                <SecurityIcon />
                                <h1>Terms of Use</h1>
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            <Link href="/privacy-policy" className="flex gap-2">
                                <AiSecurity01Icon />
                                <h1>Privacy Policy</h1>
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem>
                            <div className="flex gap-2">
                                <Settings01Icon />
                                <h1>Settings</h1>
                            </div>
                        </DropdownMenuItem>
                    </>
                }

                <DropdownMenuSeparator />

                {/* Sign-Out Button */}
                <Button type="button" onClick={handleSignOut} className="text-red bg-transparent w-full rounded-full mt-4 hover:bg-transparent outline outline-1">
                    Logout
                </Button>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserDropdown;
