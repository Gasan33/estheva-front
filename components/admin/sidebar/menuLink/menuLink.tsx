import Link from 'next/link'
import styles from './menuLink.module.css'
import { usePathname } from 'next/navigation'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
interface menuItems {
  title: string;
  path: string;
  icon: React.JSX.Element;
}[]
const MenuLink = ({ item }: { item: menuItems }) => {

  const pathname = usePathname()

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Link href={item.path} className={`${styles.container} relative items-center ${pathname === item.path && styles.active}`}>
            {item.icon}


          </Link></TooltipTrigger>
        <TooltipContent className='bg-primary absolute left-[20%] p-4 rounded-lg text-white'>
          <h1 >{item.title}</h1>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

  )
}

export default MenuLink