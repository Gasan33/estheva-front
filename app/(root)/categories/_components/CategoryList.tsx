"use client"
import React from 'react'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { categories } from '@/constants'


const CategoryList = () => {
    const parms = usePathname()
    const category = parms.split('/')[2]
    return (
        <div className=' sticky z-0 flex h-auto flex-col'>
            <Command>
                <CommandInput placeholder="search for category..." />
                <CommandList className="overflow-visible">
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions" >
                        {categories.map((item, index) => (
                            <CommandItem key={index}>
                                <Link href={'/categories/' + item.path} className={`p-2 flex gap-2 text-[14px] text-primary rounded-md cursor-pointer w-full ${category == item.path && "bg-blue-100 items-center"}`}>
                                    <Image src={item.icon} alt='icon' width={25} height={25} />
                                    <label>{item.title}</label>
                                </Link>
                            </CommandItem>
                        ))}
                    </CommandGroup>

                </CommandList>
            </Command>
        </div>
    )
}

export default CategoryList