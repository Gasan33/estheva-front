import React from 'react'
import { usePathname } from 'next/navigation';
import { Header } from '../../components/common/Header';
import Footer from '../../components/common/Footer';


const excludedRoutes = ['/login', '/rigester', '/'];

const UserLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {

    const pathname = usePathname();
    const isExcludedRoute = excludedRoutes.includes(pathname);

    if (isExcludedRoute) {
        return <div>{children}</div>; // Render only the page content without layout
    }

    return (
        <div>
            <Header />

            {children}
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default UserLayout