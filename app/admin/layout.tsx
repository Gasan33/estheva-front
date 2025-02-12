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
                <SideNavBar />

                <div className="h-full w-full overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout
