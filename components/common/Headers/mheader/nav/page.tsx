import React, { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import NavLink from './Link';
import Curve from './Curve';
import Footer from './Footer/page';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { navigationLinks } from '@/constants';
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { getInitials } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { signOut, useSession } from 'next-auth/react';
import { useCategories } from '@/context/CategoriesContext';


export default function index() {

  const session = useSession();
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const isAdmin = session.data?.user.role == "admin" || false;
  const { categories } = useCategories()
  const handleSignOut = async () => {
    try {
      await signOut({ callbackUrl: "/" });
    } catch (error) {
      // console.error("Error signing out:", error);
    }
  };
  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
      <div className={styles.body}>
        <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className={styles.nav}>
          <div >
            <Link href={isAdmin ? "/admin/dashboard" : "/my-profile"} className='flex flex-col items-center gap-4'>
              <Avatar className='w-20 h-20'>
                <AvatarFallback className='bg-amber-100'>
                  {getInitials(session.data?.user.name || 'GU')}
                </AvatarFallback>
              </Avatar>
              <h1 className='text-md font-bold'>{session.data?.user.name || 'Guest'}</h1>
            </Link>
          </div>

          {session.data == null &&
            <div className='flex gap-4 justify-center text-white mt-4'>
              <Link href="/sign-in"><Button className='bg-primaryColor hover:bg-teal-800' >Sign In</Button></Link>
            </div>}

          <div>
            {
              navigationLinks.map((data, index) => (
                <div key={data.id}>
                  {data.dropMenu != null ?
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger><NavLink key={data.id} data={{ ...data, index, cat: false }} isActive={selectedIndicator == data.path} setSelectedIndicator={setSelectedIndicator}></NavLink></AccordionTrigger>
                        <AccordionContent>
                          {
                            categories.map((item, index) => (
                              <NavLink key={item.category_id} data={{ name: item.category_name, path: item.category_slug, id: item.category_id, cat: true }} isActive={selectedIndicator == item.category_slug} setSelectedIndicator={setSelectedIndicator}></NavLink>
                            ))
                          }

                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    :
                    <NavLink key={data.id} data={{ ...data, index, cat: false }} isActive={selectedIndicator == data.path} setSelectedIndicator={setSelectedIndicator}></NavLink>
                  }
                </div>
              ))
            }
            {session.data != null &&
              <div className='flex gap-4 justify-center text-white mt-4'>
                <Button type="button" onClick={handleSignOut} className='bg-primaryColor hover:bg-teal-800'>Logout</Button>
              </div>
            }
          </div>
        </div>
        <Footer />

      </div>
      <Curve />
    </motion.div>
  )
}