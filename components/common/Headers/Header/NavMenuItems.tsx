import React from 'react'
import Link from 'next/link';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { navigationLinks } from '@/constants';
import { useCategories } from '@/context/CategoriesContext';

const NavMenuItems = () => {
    const { categories } = useCategories()
    return (
        <>                    {
            navigationLinks.map((title) => (
                <NavigationMenu key={title.id}>
                    <NavigationMenuList
                        className="flex items-center font-normal text-lg text-white tracking-wide gap-4 hover:bg-transparent"
                    >
                        {title.dropMenu != null ? (
                            <NavigationMenuItem >
                                <NavigationMenuTrigger
                                    className="relative !bg-transparent text-lg font-normal !text-white hover:!text-gray-100 after:bg-transparent"
                                >
                                    <Link href={title.path} >
                                        {title.name.toUpperCase()}
                                    </Link>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent
                                    className="flex flex-col p-2  w-auto text-gray-50 rounded-lg shadow-lg"
                                >
                                    {title.dropMenu.map((item: DropMenu) => (
                                        <Link
                                            key={item.id}
                                            href={{
                                                pathname: `${item.path}`,
                                                query: { treatments: item.value },
                                            }}
                                        // href={item.path}
                                        >
                                            <div className="p-2 items-center gap-2 rounded-md justify-center w-56 hover:bg-gray-800">
                                                {item.name.toUpperCase()}

                                            </div>
                                        </Link>
                                    ))}
                                    {title.name === "Treatments" && categories.map((category) => (
                                        <Link
                                            key={category.category_id}
                                            href={{
                                                pathname: category.category_slug === "hair-transplant" ? "/treatments/hair-transplant" : "/treatments",
                                                query: { treatments: category.category_slug },
                                            }}
                                        // href={item.path}
                                        >
                                            <div className="p-2 items-center gap-2 rounded-md justify-center w-56 hover:bg-gray-800">
                                                {category.category_name.toUpperCase()}
                                            </div>
                                        </Link>
                                    ))}
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                        ) : (
                            <NavigationMenuItem key={title.id}>
                                <NavigationMenuLink
                                    className='hover:text-gray-300 hover:bg-transparent'

                                    href={title.path}
                                >
                                    {title.name.toUpperCase()}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        )}
                    </NavigationMenuList>
                </NavigationMenu>
            ))
        }</>
    )
}

export default NavMenuItems