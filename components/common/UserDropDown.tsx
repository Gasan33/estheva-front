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
import {
    AiSecurity01Icon,
    Calendar01Icon,
    FavouriteIcon,
    HelpCircleIcon,
    SecurityIcon,
    Settings01Icon,
    UserIcon
} from 'hugeicons-react';
import { signOut, useSession } from "next-auth/react";
import { getInitials } from "@/lib/utils";
import SignInSignUpButtons from "./SignInSignUpButtons";

const UserDropdown = () => {
    const { data: session } = useSession();

    const handleSignOut = async () => {
        try {
            await signOut({ callbackUrl: "/" });
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    if (!session?.user) return <SignInSignUpButtons />;

    const isAdmin = session.user.role === "admin";
    const userName = session.user?.name || "Guest";
    const avatarInitials = getInitials(userName);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none focus-visible:ring-2 ring-offset-2 ring-primary rounded-full">
                <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-amber-100 text-primary font-bold">
                        {avatarInitials}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-72 p-2 space-y-1 rounded-xl shadow-lg z-[9999]">
                <DropdownMenuLabel className="text-center">
                    <Link href={isAdmin ? "/admin/dashboard" : "/my-profile"} className="flex flex-col items-center gap-2">
                        <Avatar className="h-16 w-16">
                            <AvatarFallback className="bg-amber-100 text-xl text-primary font-semibold">
                                {avatarInitials}
                            </AvatarFallback>
                        </Avatar>
                        <span className="text-primary font-semibold text-xl uppercase">{userName}</span>
                    </Link>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                    <Link href={isAdmin ? "/admin/dashboard" : "/my-profile"} className="flex items-center gap-3 w-full px-2 py-2 hover:bg-muted rounded-md">
                        <UserIcon className="w-5 h-5" />
                        <span>{isAdmin ? "Dashboard" : "Profile"}</span>
                    </Link>
                </DropdownMenuItem>

                {!isAdmin && (
                    <>
                        <DropdownMenuItem asChild>
                            <Link href="/my-profile/my-appointments" className="flex items-center gap-3 w-full px-2 py-2 hover:bg-muted rounded-md">
                                <Calendar01Icon className="w-5 h-5" />
                                <span>My Appointments</span>
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                            <Link href="/my-profile/favourites" className="flex items-center gap-3 w-full px-2 py-2 hover:bg-muted rounded-md">
                                <FavouriteIcon className="w-5 h-5" />
                                <span>Favourites</span>
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                            <Link href="/contact" className="flex items-center gap-3 w-full px-2 py-2 hover:bg-muted rounded-md">
                                <HelpCircleIcon className="w-5 h-5" />
                                <span>Help Center</span>
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                            <Link href="/terms&conditions" className="flex items-center gap-3 w-full px-2 py-2 hover:bg-muted rounded-md">
                                <SecurityIcon className="w-5 h-5" />
                                <span>Terms of Use</span>
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                            <Link href="/privacy-policy" className="flex items-center gap-3 w-full px-2 py-2 hover:bg-muted rounded-md">
                                <AiSecurity01Icon className="w-5 h-5" />
                                <span>Privacy Policy</span>
                            </Link>
                        </DropdownMenuItem>

                        <DropdownMenuItem asChild>
                            <Link href="/my-profile/update-profile" className="flex items-center gap-3 w-full px-2 py-2 hover:bg-muted rounded-md">
                                <Settings01Icon className="w-5 h-5" />
                                <span>Settings</span>
                            </Link>
                        </DropdownMenuItem>
                    </>
                )}

                <DropdownMenuSeparator />

                <Button
                    variant="outline"
                    onClick={handleSignOut}
                    className="w-full text-red-600 border-red-500 hover:bg-red-50"
                >
                    Logout
                </Button>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserDropdown;
