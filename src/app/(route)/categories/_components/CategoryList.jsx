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

const categories = [
    {
        id: 1,
        title: "Plastic Surgery",
        path: "plastic-surgery",
        description: "we offer expert plastic surgery services designed to enhance your natural beauty and boost your confidence.",
        icon: "/plastic.png",
    },
    {
        id: 2,
        title: "Slimming",
        path: "slimming",
        description: "Estheva Polyclinic provide effective slimming treatments to help you achieve your ideal body shape.",
        icon: "/slimming.png",
    },
    {
        id: 3,
        title: "Dermatology",
        path: "dermatology",
        description: "comprehensive dermatology services to address a wide range of skin concerns.",
        icon: "/dermatology.png",
    },
    {
        id: 4,
        title: "IV Drips",
        path: "iv-drips",
        description: "our IV drip treatments are designed to quickly replenish essential nutrients, hydration, and vitamins for optimal health and wellness.",
        icon: "/ivDripsIcon.png",
    },
    {
        id: 5,
        title: "Physiotherapy",
        path: "physiotherapy",
        description: "Estheva Polyclinic provides comprehensive physiotherapy services aimed at restoring movement, reducing pain, and improving overall physical well-being.",
        icon: "/daigosticsIcon.png",
    },
    {
        id: 6,
        title: "Daigostics",
        path: "daigostics",
        description: "Our diagnostic tests are designed to accurately assess your health, ensuring timely detection and effective treatment for a wide range of conditions.",
        icon: "/physiotherapyIcon.png",
    },

]

const CategoryList = () => {
    const parms = usePathname()
    const category = parms.split('/')[2]
    return (
        <div className='mt-8 sticky z-0 flex flex-col'>
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