import React from 'react';
import Link from 'next/link';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationLinks } from '@/constants';
import { useCategories } from '@/context/CategoriesContext';
import UserDropdown from './UserDropDown';
import { BsFacebook, BsTiktok, BsInstagram, BsLinkedin } from 'react-icons/bs';



const NavMenuItems = () => {
    const { categories } = useCategories();


    // Desktop layout: horizontal dropdown menu
    return (
        <NavigationMenu>
            <NavigationMenuList className="hidden xl:flex items-center font-normal text-lg text-white tracking-wide gap-4">
                {navigationLinks.map((link) => (
                    <NavigationMenuItem key={link.id}>
                        {link.dropMenu && link.name === "Medical Treatments" ? (
                            <>
                                <NavigationMenuTrigger className="relative !bg-transparent text-lg font-normal !text-white hover:!text-gray-100">
                                    {link.name.toUpperCase()}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="shadow-lg p-2 space-y-1 bg-white rounded-md">
                                    {categories.map((category) => (

                                        <NavigationMenuLink key={category.category_id}
                                            href={`/treatments/categories/${category.category_slug}`} className="block px-4 py-2 rounded-md text-nowrap text-gray-950 hover:bg-gray-50 hover:text-primary transition">
                                            {category.category_name.toUpperCase()}
                                        </NavigationMenuLink>
                                    ))}
                                </NavigationMenuContent>
                            </>
                        ) : (
                            <NavigationMenuLink
                                className="text-white hover:text-gray-300 transition px-2 py-1"
                                href={link.path}
                            >
                                {link.name.toUpperCase()}
                            </NavigationMenuLink>
                        )}
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default NavMenuItems;
