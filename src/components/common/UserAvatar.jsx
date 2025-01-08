import React from 'react'
import { useAuth } from '@/context/auth/AuthContext';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link';
import { Button } from '../ui/button';

const UserAvatar = () => {
    const { user, role, handleLogout } = useAuth();

    const handleUserLogout = () => {
        handleLogout();
    }
    return (
        <div >
            {user ? (
                <DropdownMenu>
                    <DropdownMenuTrigger className='outline-none focus:outline-none focus-visible:outline-none'>
                        <div className='flex gap-2 justify-center items-center'>
                            <h1>{user.name}</h1>
                            <img className='h-10 w-10 rounded-full' alt={user.name} src={`${user.profile_picture != null ? user.profile_picture : '/noavatar.png'}`}
                            />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='p-4 w-64 z-[9999]'>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className='p-2'>Profile</DropdownMenuItem>
                        <DropdownMenuItem className='p-2'>
                            {role == 'admin' ?
                                <a href='/admin/dashboard'>Dashboard</a> :
                                <a href='/user/appointments'>Appointments</a>
                            }
                        </DropdownMenuItem>
                        <DropdownMenuItem className='p-2'>Team</DropdownMenuItem>
                        <DropdownMenuItem className='p-2'>Subscription</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className='p-2' onClick={handleUserLogout}>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu >) : (
                <div className='flex gap-4 text-primary'>
                    <Link href="/sign-up"><Button variant="outline">join Now !</Button></Link>
                    <Link href="/login"><Button >Login</Button></Link>
                </div>)
            }
        </div>

    )
}

export default UserAvatar