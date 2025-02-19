'use client'
import styles from './style.module.scss'
import { useEffect, useState } from 'react';
import Nav from './nav/page';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import AppBaner from '../../AppBaner';
import { Session } from 'next-auth';

export default function Header({ session }: { session?: Session | null }) {

  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false)
  }, [pathname])

  return (
    <>
      <div className='block xl:hidden bg-primary relative'>

        <div className={styles.header}>
          <Link href={'/'} className='block xl:hidden'>
            <Image src='/icons/logo.svg' alt='Estheva Polyclinic' width={120} height={60} style={{ height: "auto" }} className='object-contain' />
          </Link>
          <div onClick={() => { setIsActive(!isActive) }} className={styles.button}>
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
          </div>
        </div>
      </div>
      <div className=' xl:hidden bg-primary'>
        <AppBaner />
      </div>


      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  )
}
