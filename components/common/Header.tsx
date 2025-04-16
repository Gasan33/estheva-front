"use client"
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import UserDropdown from './UserDropDown';
import NavMenuItems from './NavMenuItems';
import clsx from 'clsx';
import { Search01Icon, Menu01Icon } from 'hugeicons-react';
import { XIcon } from 'lucide-react';
import MobileNav from './MobileNav';
import SearchBar from './SearchBar';
import AppBaner from './AppBaner';


export const Header = () => {
    const pathname = usePathname();
    const hideHeaderRoutes = ["/blogs/news", "/blogs/blogs"];
    const hideHeader = !hideHeaderRoutes.includes(pathname);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showPageTitle, setShowPageTitle] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const pageName = pathname.split('/')[1];
    const toggleSidebar = () => {
        setMobileMenuOpen((prev) => !prev);
    };
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={clsx("fixed w-full top-0 z-50 transition-all duration-500", {
                    "bg-primary": isScrolled || showPageTitle,
                    "bg-transparent": !isScrolled && !showPageTitle
                })}
            >

                <div className="flex justify-between items-center px-4 md:px-12 py-3">
                    <Link href="/" className="flex-shrink-0">
                        <Image
                            src="/icons/logo.svg"
                            alt="Estheva Polyclinic"
                            width={180}
                            height={100}
                            priority
                            className="object-contain h-12 md:h-16"
                            style={{ height: "auto" }}
                        />
                    </Link>


                    <nav className="hidden xl:block">
                        <NavMenuItems />
                    </nav>

                    <div className="flex items-center gap-4">

                        <button
                            onClick={() => setShowPageTitle(!showPageTitle)}
                            className="bg-white text-primary rounded-full p-2"
                        >
                            <Search01Icon className="w-6 h-6" />
                        </button>


                        <div className="hidden md:block">
                            <UserDropdown />
                        </div>

                        <button
                            className="xl:hidden block text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
                                <XIcon className="w-7 h-7" />
                            ) : (
                                <Menu01Icon className="w-7 h-7" />
                            )}
                        </button>
                    </div>
                </div>

                {showPageTitle && (
                    <div className="flex flex-col md:flex-row px-4 md:px-12 gap-4 justify-between items-center bg-primary py-4">
                        <h1 className="text-2xl md:text-4xl text-white uppercase font-normal">
                            {pageName === "" ? "Home" : pageName}
                        </h1>
                        <SearchBar hint="Search for ..." />
                    </div>
                )}

                <MobileNav mobileMenuOpen={mobileMenuOpen} toggleSidebar={toggleSidebar} />

            </header>
            <AppBaner />
        </>
    );
};

export default Header;
