"use client";

import ProfileHeader from '@/components/common/ProfileHeader';
import ProfileSideBar from '@/components/common/ProfileSideBar';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <div className="relative grid grid-cols-1 xl:grid-cols-[20%_80%]">
            {/* Sidebar for larger screens */}
            <div className="hidden xl:block">
                <ProfileSideBar />
            </div>

            {/* Sidebar for smaller screens */}
            <div
                className={`fixed inset-y-0 left-0 z-[999999] w-64 bg-white shadow-lg transition-transform duration-300 xl:hidden ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <ProfileSideBar />
            </div>

            {/* Overlay for smaller screens */}
            {isSidebarOpen && (
                <div className="fixed inset-0 z-40 bg-black/50 xl:hidden" onClick={toggleSidebar} />
            )}

            {/* Main Content */}
            <div className="p-4 xl:p-8">
                {/* Header for smaller screens */}
                <div className="flex items-center justify-between xl:hidden mb-4">
                    <Button variant="outline" className="text-primary" onClick={toggleSidebar}>
                        <Menu className="w-5 h-5" />
                    </Button>
                    <h1 className="text-xl font-semibold">My Profile</h1>
                </div>

                {/* Profile Header */}
                <ProfileHeader />
                {children}
            </div>
        </div>
    );
};

export default ProfileLayout;
