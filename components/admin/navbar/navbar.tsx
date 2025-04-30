"use client"
import { Message01Icon, Notification02Icon, Search01Icon } from "hugeicons-react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import UserDropdown from "@/components/common/UserDropDown";


const Navbar = () => {
  return (
    <div className="bg-primary  w-full sticky h-32 lg:h-auto">
      <div className={styles.container}>
        <div className="flex">
          <Link href={'/'} >
            <Image src='/icons/logo.svg' alt='Estheva Polyclinic' width={120} height={60} style={{ width: "auto" }} priority className='object-contain h-12' />
          </Link>
        </div>


        <div className={styles.menu}>
          <div className=' flex-row  rounded-lg hidden  lg:flex'>
            <Search01Icon className="bg-blue-500 rounded-l-lg  h-10 w-12 p-2 text-white" />
            <input className="w-full rounded border border-none bg-gray py-2 px-2 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
              type="text" placeholder="Search..." />
          </div>
          <div className={styles.icons}>
            <Message01Icon size={24} />
            <Notification02Icon size={24} />
          </div>
          <UserDropdown />
        </div>
      </div>
      <div className=' flex-row rounded-lg flex ml-[20%] mb-2 mr-4 lg:hidden'>
        <Search01Icon className="bg-blue-500 rounded-l-lg  h-10 w-12 p-2 text-white" />
        <input className="w-full border border-none rounded bg-gray py-2 px-2 text-black focus:border-primary focus-visible:outline-none "
          type="text" placeholder="Search..." />
      </div>
    </div>

  );
};

export default Navbar;
