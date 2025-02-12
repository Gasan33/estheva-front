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
    MdCardGiftcard
} from "react-icons/md";
import { Calendar01Icon } from 'hugeicons-react'
import { Users } from 'lucide-react'


const menuItems = [

    { title: "Dashboard", path: "/admin/dashboard", icon: <MdDashboard className='object-fill h-8 w-8' /> },
    { title: "Calendar", path: "/admin/calendar", icon: <Calendar01Icon className='object-fill h-8 w-8' /> },
    { title: "Users", path: "/admin/users", icon: <Users className='object-fill h-8 w-8' /> },
    { title: "Categories", path: "/admin/categories", icon: <MdCategory className='object-fill h-8 w-8' /> },
    { title: "Treatment", path: "/admin/services", icon: <MdShoppingBag className='object-fill h-8 w-8' /> },
    { title: "Doctors", path: "/admin/doctors", icon: <MdPeopleOutline className='object-fill h-8 w-8' /> },
    { title: "Appointments", path: "/admin/appointments", icon: <MdCalendarMonth className='object-fill h-8 w-8' /> },
    { title: "Offers", path: "/admin/offers", icon: <MdCardGiftcard className='object-fill h-8 w-8' /> },
    { title: "Transactions", path: "/admin/transactions", icon: <MdAttachMoney className='object-fill h-8 w-8' /> },

    { title: "Revenue", path: "/admin/dashboard/revenue", icon: <MdWork className='object-fill h-8 w-8' /> },
    { title: "Reports", path: "/admin/dashboard/reports", icon: <MdAnalytics className='object-fill h-8 w-8' /> },
    { title: "Teams", path: "/admin/dashboard/teams", icon: <MdPeople className='object-fill h-8 w-8' /> },

    { title: "Settings", path: "/admin/settings", icon: <MdOutlineSettings className='object-fill h-8 w-8' /> },
    { title: "Help", path: "/admin/help", icon: <MdHelpCenter className='object-fill h-8 w-8' /> },
];

const SideNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`container ${isOpen ? 'open' : ''}`}>
            <ul className="list">
                {menuItems.map((cat, index) => (
                    <li key={index}>
                        <MenuLink item={cat} key={cat.title} />
                    </li>
                ))}
            </ul>
            {/* <form>
                <button className="logout">
                    <MdLogout />
                    Logout
                </button>
            </form> */}
            {/* Hamburger Menu Button */}
            {/* <button className="toggle-btn" onClick={toggleSidebar}>
                {isOpen ? 'Close' : 'Open'} Menu
            </button> */}
        </div>
    );
}

export default SideNavBar;
