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


const menuItems = [
    {
        title: "Pages",
        list: [
            { title: "Dashboard", path: "/admin/dashboard", icon: <MdDashboard /> },
            { title: "Users", path: "/admin/users", icon: <MdSupervisedUserCircle /> },
            { title: "Categories", path: "/admin/categories", icon: <MdCategory /> },
            { title: "Services", path: "/admin/services", icon: <MdShoppingBag /> },
            { title: "Doctors", path: "/admin/doctors", icon: <MdPeopleOutline /> },
            { title: "Appointments", path: "/admin/appointments", icon: <MdCalendarMonth /> },
            { title: "Offers", path: "/admin/offers", icon: <MdCardGiftcard /> },
            { title: "Transactions", path: "/admin/transactions", icon: <MdAttachMoney /> },
        ],
    },
    {
        title: "Analytics",
        list: [
            { title: "Revenue", path: "/admin/dashboard/revenue", icon: <MdWork /> },
            { title: "Reports", path: "/admin/dashboard/reports", icon: <MdAnalytics /> },
            { title: "Teams", path: "/admin/dashboard/teams", icon: <MdPeople /> },
        ],
    },
    {
        title: "User",
        list: [
            { title: "Settings", path: "/admin/settings", icon: <MdOutlineSettings /> },
            { title: "Help", path: "/admin/help", icon: <MdHelpCenter /> },
        ],
    },
];

const SideNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`container ${isOpen ? 'open' : ''}`}>
            <div className='flex gap-4 items-center'>
                <Image src='/admin/logo.png' alt='logo' width={28} height={24} className='w-[50px] h-[50px] bg-white p-2 rounded-md shadow-lg shadow-gray-900' />
                <div>
                    <h1 className='text-xl font-semibold'>Estheva</h1>
                    <h1 className='text-sm font-semibold'>Polyclinic</h1>
                </div>

            </div>
            <div className="user">
                <Image
                    className="userImage"
                    src={"/admin/noavatar.png"}
                    alt=""
                    width={50}
                    height={50}
                    priority
                />
                <div className="userDetail flex flex-col justify-center items-center">
                    <span className="username">Admin</span>
                    <span className="userTitle">Administrator</span>
                </div>
            </div>
            <ul className="list">
                {menuItems.map((cat, index) => (
                    <li key={index}>
                        <span className="cat">{cat.title}</span>
                        {cat.list.map((item) => (
                            <MenuLink item={item} key={item.title} />
                        ))}
                    </li>
                ))}
            </ul>
            <form>
                <button className="logout">
                    <MdLogout />
                    Logout
                </button>
            </form>
            {/* Hamburger Menu Button */}
            <button className="toggle-btn" onClick={toggleSidebar}>
                {isOpen ? 'Close' : 'Open'} Menu
            </button>
        </div>
    );
}

export default SideNavBar;
