"use client"
import React, { useState } from 'react'
import "./sidenavbar.css"
import Image from 'next/image'
import MenuLink from './menuLink/menuLink'
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
    MdCategory,
    MdPeopleOutline,
    MdCalendarMonth,
    MdCardGiftcard,
    MdClose,
    MdMenu
} from "react-icons/md";
import { Calendar01Icon, Logout01Icon, News01Icon, QuestionIcon, UserQuestion01Icon, UserQuestion02Icon } from 'hugeicons-react'
import { LogOutIcon, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'


const menuItems = [

    { title: "Dashboard", path: "/admin/dashboard", icon: <MdDashboard className='object-fill h-8 w-8' /> },
    { title: "Calendar", path: "/admin/calendar", icon: <Calendar01Icon className='object-fill h-8 w-8' /> },
    { title: "Clients", path: "/admin/users", icon: <Users className='object-fill h-8 w-8' /> },
    { title: "Treatment", path: "/admin/treatments", icon: <MdShoppingBag className='object-fill h-8 w-8' /> },
    // { title: "Categories", path: "/admin/categories", icon: <MdCategory className='object-fill h-8 w-8' /> },

    { title: "Doctors", path: "/admin/doctors", icon: <MdPeopleOutline className='object-fill h-8 w-8' /> },
    { title: "Blogs Posts", path: "/admin/blogs", icon: <News01Icon className='object-fill h-8 w-8' /> },
    { title: "FAQs", path: "/admin/faqs", icon: <UserQuestion02Icon className='object-fill h-8 w-8' /> },
    { title: "Offers", path: "/admin/offers", icon: <MdCardGiftcard className='object-fill h-8 w-8' /> },
    { title: "Transactions", path: "/admin/transactions", icon: <MdAttachMoney className='object-fill h-8 w-8' /> },

    { title: "Revenue", path: "/admin/dashboard/revenue", icon: <MdWork className='object-fill h-8 w-8' /> },
    { title: "Reports", path: "/admin/dashboard/reports", icon: <MdAnalytics className='object-fill h-8 w-8' /> },
    // { title: "Teams", path: "/admin/dashboard/teams", icon: <MdPeople className='object-fill h-8 w-8' /> },

    { title: "Settings", path: "/admin/settings", icon: <MdOutlineSettings className='object-fill h-8 w-8' /> },
    { title: "Help", path: "/admin/help", icon: <MdHelpCenter className='object-fill h-8 w-8' /> },
];

const SideNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleSignOut = async () => {
        try {
            await signOut({ callbackUrl: "/" });  // Corrected signOut function
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button className="lg:hidden fixed top-[68px] left-4 z-50 bg-gray-900 text-white p-2 rounded-md shadow-md" onClick={toggleSidebar}>
                {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>
            <div className={`fixed z-50  text-white shadow-lg bg-blue-950 h-full overflow-auto no-scrollbar p-2 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:relative`}>
                <ul className="list">
                    {menuItems.map((cat, index) => (
                        <li key={index}>
                            <MenuLink item={cat} key={cat.title} />
                        </li>
                    ))}

                </ul>
                <Button type="button" onClick={handleSignOut} className='bg-red'><LogOutIcon /></Button>
            </div>
            {isOpen && <div className="fixed z-40 inset-0 bg-black opacity-50 lg:hidden" onClick={toggleSidebar}></div>}
        </div>

    );
}

export default SideNavBar;
