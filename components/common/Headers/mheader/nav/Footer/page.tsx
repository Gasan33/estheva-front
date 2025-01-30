import Link from 'next/link';
import styles from './style.module.scss';
import { BsFacebook, BsInstagram, BsLinkedin, BsTiktok } from 'react-icons/bs';
const socialLinks: SocialLink[] = [
  {
    path: "",
    icon: <BsFacebook className=" w-4 h-5" />,
  },
  {
    path: "",
    icon: <BsTiktok className=" w-4 h-5" />,
  },
  {
    path: "",
    icon: <BsInstagram className=" w-4 h-5" />,
  },
  {
    path: "",
    icon: <BsLinkedin className=" w-4 h-5" />,
  },
];
export default function index() {
  const year: number = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <div>
        <div className="flex flex-col ">
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                className="flex items-center justify-center"
              >
                {link.icon}
              </Link>
            ))}
          </div>
          <div className="flex flex-row gap-2 items-center  text-xs mt-2">

            <Link
              href={"/terms&conditions"}

            >
              Terms & Conditions
            </Link>
            <div className='w-1 h-1 rounded-full bg-primaryColor'>

            </div>

            <Link
              href={"/privacy-policy"}

            >
              Privacy Policy
            </Link>
          </div>

        </div>
        <p className="text-center mt-2 text-[8px] text-gray-200">
          Copyright © {year} Estheva-Polyclinic all right reserved.
        </p>
      </div>
    </div>
  )
}
