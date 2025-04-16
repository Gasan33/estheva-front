import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import ScrollToTop from '@/components/common/ScrollToTop';
import React, { ReactNode } from 'react'
const layout = async ({ children }: { children: ReactNode }) => {
    return (
        <main className='root-container'>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
        </main>)
}

export default layout;