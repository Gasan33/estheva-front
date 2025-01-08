import React from 'react'
import ServiceCard from './ServiceCard';
import SearchBar from "../common/SearchBar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Image from 'next/image'

const popularServices = [
    {

        name: "Fat reduction Injections for Body",
        desc: "Fat reduction injections, offer a non-surgical approach to help you achieve a more sculpted and contoured appearance. These injections are designed to target localized fat deposits in areas like the abdomen, thighs, or love handles, where exercise and diet may not provide the desired results.",
        img: "https://totallytransformed.co.uk/wp-content/uploads/2024/03/2-1080x675.png",
        price: "1,300 ADE",
        benfits: [
            "Liquefies fat cells, destroying them permanently with no downtime, so you can start seeing results right away.",
            "Fat dissolving injections are much safer than other traditional methods.",
        ],
        dicount: "25",
        bgColor: "rgba(254, 182, 13, .2)",
        textColor: "#FEB60D",
    },
    {
        name: "Endermology",
        desc: "Endermology is a cutting-edge technology that uses mechanical rollers and gentle suction to stimulate the skin and underlying tissues. This non-invasive treatment targets problem areas, such as thighs, buttocks, abdomen, and arms, to break down stubborn fat cells, improve circulation, and enhance lymphatic drainage.",
        img: "https://skinic.co/blog/wp-content/uploads/2022/02/photo-emeraldblog-2048x1583.jpg",
        price: "800 ADE",
        benfits: [
            "Liquefies fat cells, destroying them permanently with no downtime, so you can start seeing results right away.",
            "Fat dissolving injections are much safer than other traditional methods.",
        ],

        bgColor: "rgba(151, 113, 255, .2)",
        textColor: "#9771FF",
    },
    {
        name: "Emerald Lipo Laser",
        desc: "Embark on a transformative journey with Emerald Lipo Laser, a groundbreaking technology redefining the landscape of non-invasive and painless fat tissue dissolution. Say goodbye to stubborn fat through an advanced and innovative approach that sets the standard for effective body contouring.",
        img: "https://skinic.co/blog/wp-content/uploads/2022/02/photo-emeraldblog-2048x1583.jpg",
        price: "2,200 ADE",
        benfits: [
            "Liquefies fat cells, destroying them permanently with no downtime, so you can start seeing results right away.",
            "Fat dissolving injections are much safer than other traditional methods.",
        ],
        dicount: "15",
        bgColor: "rgba(1, 181, 197, .2)",
        textColor: "#01B5C5",
    },
    {
        name: "1D Ultrasound Cavitation Slimming Treatment at Home",
        desc: "Introducing our advanced Ultrasound Cavitation, also known as Non-Invasive Liposuction or Body Contouring Treatment. Experience the power of cutting-edge technology to reduce stubborn fat and achieve a more sculpted physique.",
        img: "https://skinic.co/blog/wp-content/uploads/2022/02/photo-emeraldblog-2048x1583.jpg",
        price: "100 ADE",
        benfits: [
            "Liquefies fat cells, destroying them permanently with no downtime, so you can start seeing results right away.",
            "Fat dissolving injections are much safer than other traditional methods.",
        ],
        bgColor: "rgba(1, 181, 197, .2)",
        textColor: "#01B5C5",
    },
    {
        name: "Intense Lips Filler - 1 ml Neauvia",
        desc: "Dreaming of plump, luscious lips that radiate confidence and allure? Lip filler treatments are all about strategically injecting dermal fillers to redefine and augment the lips.",
        img: "https://skinic.co/blog/wp-content/uploads/2022/02/photo-emeraldblog-2048x1583.jpg",
        price: "900 ADE",
        benfits: [
            "Liquefies fat cells, destroying them permanently with no downtime, so you can start seeing results right away.",
            "Fat dissolving injections are much safer than other traditional methods.",
        ],
        dicount: "10",
        bgColor: "rgba(254, 182, 13, .2)",
        textColor: "#FEB60D",
    },
    {
        name: "Dermal Filler - Neauvia 1ml",
        desc: "Dermal filler treatments involve the precise artistry of specialized fillers to breathe new life into and redefine various facial regions, including cheeks, jawlines, temples, and beyond.  At Estheva Polyclinic, your welfare and contentment reign supreme. We use FDA-approved, top-tier dermal fillers celebrated for their extraordinary outcomes. Typically, these fillers are comprised of hyaluronic acid, a naturally occurring essence within the body that imbues hydration, volume, and structure to the skin.",
        img: "https://skinic.co/blog/wp-content/uploads/2022/02/photo-emeraldblog-2048x1583.jpg",
        price: "1,800 ADE",
        benfits: [
            "Liquefies fat cells, destroying them permanently with no downtime, so you can start seeing results right away.",
            "Fat dissolving injections are much safer than other traditional methods.",
        ],
        bgColor: "rgba(151, 113, 255, .2)",
        textColor: "#9771FF",
    },
];

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


const ServiceList = ({ category }) => {
    return (
        <div >
            {categories.map((item, index) => (
                category === item.path &&
                <div key={index} className='flex flex-col my-8 mx-8 gap-4 border-b-[1px] border-gray-300 pb-4'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-3xl font-semibold text-gray-950'>{item.title}</h1>
                        <SearchBar hint="Search for service..." />
                    </div>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/categories">Categories</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{category}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <h2 className=' ml-2 text-gray-950'>{item.description}</h2>
                </div>
            ))


            }
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:m-[55px]'>
                {popularServices.map((item, index) => <ServiceCard item={item} index={index} key={index} />)}
            </div>
        </div>

    )
}

export default ServiceList