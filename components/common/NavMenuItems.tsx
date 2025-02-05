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
import { categories, navigationLinks } from '@/constants';

const NavMenuItems = () => {
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
                                        {title.name}
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
                                                {item.name}

                                            </div>
                                        </Link>
                                    ))}
                                    {title.name === "Treatments" && categories.map((category) => (
                                        <Link
                                            key={category.id}
                                            href={{
                                                pathname: "/treatments",
                                                query: { treatments: category.path },
                                            }}
                                        // href={item.path}
                                        >
                                            <div className="p-2 items-center gap-2 rounded-md justify-center w-56 hover:bg-gray-800">
                                                {category.title}
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
                                    {title.name}
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