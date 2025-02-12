import React, { ReactNode } from 'react'
import SideNavBar from '../../components/admin/sidebar/SideNavBar'
import Navbar from '../../components/admin/navbar/navbar'
import auth from '@/auth'
import { redirect } from 'next/navigation'

const layout = async ({ children }: { children: ReactNode }) => {
    const session = await auth()
    if (!session) redirect('/')
    if (session?.user.role != 'admin') redirect('/')

    return (
        <div className="h-screen flex flex-col">
            <Navbar />

            <div className="flex h-full overflow-hidden">
                <div className="bg-blue-950 h-full overflow-auto no-scrollbar p-2 w-[5%]">
                    <SideNavBar />
                </div>
                <div className="h-full w-full overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout
