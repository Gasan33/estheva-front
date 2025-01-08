import React from 'react'
import SideNavBar from '../../components/admin/sidebar/SideNavBar'
import Navbar from '../../components/admin/navbar/navbar'
import { usePathname } from 'next/navigation';
import { ClipLoader } from 'react-spinners';
import { useAuth } from '@/context/auth/AuthContext';


const excludedRoutes = ['/login', '/rigester', '/'];

const AdminLayout = ({
    children
}: {
    children: React.ReactNode
}) => {

    const pathname = usePathname();
    const isExcludedRoute = excludedRoutes.includes(pathname);
    const { user } = useAuth();
    // const router = useRouter();

    // useEffect(() => {
    //     if (!user) {
    //         router.push('/login');
    //     } else if (role !== 'admin') {
    //         router.push('/');
    //     }
    // }, [user, role, router]);

    if (!user) {
        return <div className="flex flex-col justify-center items-center h-lvh w-full">

            <ClipLoader size={50} color="#3498db" loading={true} />
            <h1 className='text-gray-400 pt-4'>Loading...</h1>
        </div>// Show a loading indicator while checking authentication
    }


    if (isExcludedRoute) {
        return <div>{children}</div>; // Render only the page content without layout
    }

    return (
        <div className="flex w-full h-full overflow-hidden">
            <div className="bg-blue-950 h-[100vh] overflow-auto no-scrollbar p-4 w-[20%]">
                <SideNavBar />
            </div>
            <div className="w-full overflow-clip">
                <Navbar />
                <div className="h-[86vh] overflow-auto">

                    {children}

                </div>


            </div>
        </div>
    )
}

export default AdminLayout