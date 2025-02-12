import auth from '@/auth';
import ProfileLayout from '@/components/common/ProfileLayout';
import { redirect } from 'next/navigation';


const Layout = async ({ children }: { children: React.ReactNode }) => {
    const session = await auth();
    if (!session) redirect('/sign-in');

    return <ProfileLayout>{children}</ProfileLayout>;
};

export default Layout;
