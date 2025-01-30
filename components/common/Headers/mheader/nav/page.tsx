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


export default function index() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
      <div className={styles.body}>
        <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className={styles.nav}>
          <div >
            <Link href="/my-profile" className='flex flex-col items-center gap-4'>
              <Avatar className='w-20 h-20'>
                {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                <AvatarFallback className='bg-amber-100'>{getInitials("IN")}</AvatarFallback>
              </Avatar>
              <h1 className='text-md font-bold'>Uesr Name</h1>
            </Link>
          </div>

          <div>
            {
              navigationLinks.map((data, index) => (
                <div key={data.id}>
                  {data.dropMenu != null ?
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger><NavLink key={data.id} data={{ ...data, index }} isActive={selectedIndicator == data.path} setSelectedIndicator={setSelectedIndicator}></NavLink></AccordionTrigger>
                        <AccordionContent>
                          {
                            data.dropMenu.map((item, index) => (
                              <NavLink key={item.id} data={{ ...item, index }} isActive={selectedIndicator == item.path} setSelectedIndicator={setSelectedIndicator}></NavLink>
                            ))
                          }
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    :
                    <NavLink key={data.id} data={{ ...data, index }} isActive={selectedIndicator == data.path} setSelectedIndicator={setSelectedIndicator}></NavLink>
                  }
                </div>
              ))
            }
          </div>
        </div>
        <Footer />

      </div>
      <Curve />
    </motion.div>
  )
}