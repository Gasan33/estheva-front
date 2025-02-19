import { auth } from '@/auth';
import Image from 'next/image'
import { redirect } from 'next/navigation';
import { ReactNode } from 'react'

const layout = async ({ children }: { children: ReactNode }) => {
    const session = await auth();
    if (session) redirect("/");
    return (
        <main className='relative flex flex-col-reverse sm:flex-row'>
            <section className='my-auto flex h-full min-h-screen flex-1 items-center bg-top px-5 py-10'>
                <div className=' mx-auto flex max-w-xl flex-col gap-6 rounded-lg p-10'>
                    <div className='flex flex-row justify-center gap-3'>
                        <Image src="/icons/darkLogo.svg" alt='logo' width={1000} style={{ height: "auto", width: "100px" }} height={1000} className='size-full object-cover' priority />
                        {/* <h1 className='text-2xl font-semibold text-white'>Estheva Polyclinic</h1> */}
                    </div>
                    <div>{children}</div>
                </div>
            </section>
            <section className='auth-illustration'>
                <Image src="/images/pic1.png" alt='auth illustration' height={1000} width={1000} className='size-full object-cover' />
            </section>
        </main>
    )
}

export default layout