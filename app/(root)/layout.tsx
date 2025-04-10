import Footer from '@/components/common/Footer';
import { Header } from '@/components/common/Headers/Header/Header';
import MHeader from '@/components/common/Headers/mheader/page';
import ScrollToTop from '@/components/common/ScrollToTop';
import React, { ReactNode } from 'react'
const layout = async ({ children }: { children: ReactNode }) => {
    return (
        <main className='root-container'>
            <div>
                <Header />
                <MHeader />
            </div>

            <div> {children} </div>

            <Footer />
            <ScrollToTop />
        </main>)
}

export default layout;