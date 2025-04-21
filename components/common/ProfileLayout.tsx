"use client";

import ProfileHeader from '@/components/common/ProfileHeader';
import ProfileSideBar from '@/components/common/MobileMenuSideBar';
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


            {/* Main Content */}
            <div className="p-4 xl:p-8">
                <ProfileHeader />
                {children}
            </div>
        </div>
    );
};

export default ProfileLayout;
