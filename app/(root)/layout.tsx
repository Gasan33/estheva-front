// import { auth } from '@/auth';
import AppBaner from '@/components/common/AppBaner';
import Footer from '@/components/common/Footer';
import { Header } from '@/components/common/Headers/Header/Header';
import MHeader from '@/components/common/Headers/mheader/page';
import ScrollToTop from '@/components/common/ScrollToTop';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'
const layout = async ({ children }: { children: ReactNode }) => {
    // const session = await auth();
    // if (!session) redirect("/sign-in")
    return (
        <main className='root-container'>
            <div>
                <Header />
                <MHeader />
            </div>
            <div
            // className='mx-auto max-w-7xl'
            >
                <div> {children} </div>
            </div>
            <Footer />
            <ScrollToTop />
        </main>)
}

export default layout;