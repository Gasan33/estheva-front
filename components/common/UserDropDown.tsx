
// "use server"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from 'next/link';
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
import { Session } from 'next-auth';
import { signOut } from '@/auth';
import { getInitials } from "@/lib/utils";

const UserDropdown = ({ session }: { session: Session }) => {
    const handleSignOut = async () => {
        try {
            await signOut({
                redirect: true,
                redirectTo: "/"
            });
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    {/* Avatar image can be added here */}
                    <AvatarFallback className='bg-amber-100'>
                        {getInitials(session?.user?.name || 'GU')}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuLabel>
                    <Link href="/my-profile" className="flex flex-col justify-center items-center gap-2">
                        <Avatar className="h-16 w-16">
                            {/* Avatar image can be added here */}
                            <AvatarFallback className="bg-amber-100">
                                {getInitials(session?.user?.name || 'GU')}
                            </AvatarFallback>
                        </Avatar>
                        <h1 className="text-primary font-semibold text-xl uppercase">{session?.user?.name || 'Guest'}</h1>
                    </Link>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    <Link href="/my-profile" className="flex gap-2 w-full">
                        <UserIcon />
                        <h1>Profile</h1>
                    </Link>
                </DropdownMenuItem>

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

                <DropdownMenuSeparator />

                {/* Sign-Out Button */}
                <Button type='button' onClick={handleSignOut} className=' outline text-red bg-transparent w-full rounded-full mt-4 hover:bg-transparent outline-1'>
                    Logout
                </Button>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserDropdown;
