import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import HeaderPath from "../headerpath/HeaderPath"

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white shadow-lg  w-full sticky">
      <div className={styles.container}>
        <div className="flex flex-col gap-4">
          <div className={styles.title}>
            {pathname.split("/").pop()}
          </div>
          <HeaderPath />
        </div>


        <div className={styles.menu}>
          <div className='flex flex-row border border-solid rounded-lg'>
            <MdSearch className="bg-blue-500 rounded-l-lg  h-10 w-12 p-2 text-white" />
            <input className="w-full rounded border border-none bg-gray py-2 px-2 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
              type="text" placeholder="Search..." />
          </div>
          <div className={styles.icons}>
            <MdOutlineChat size={20} />
            <MdNotifications size={20} />
            <MdPublic size={20} />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Navbar;
