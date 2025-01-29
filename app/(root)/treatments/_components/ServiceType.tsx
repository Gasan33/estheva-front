"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const services = [
    {
        title: "Clinic Services",
        icon: "/images/clinic.png",
        path: "/clinic",
        description: "",
        selected: false,
    },
    {
        title: "Home Services",
        icon: "/images/home-care.png",
        path: "/home-care",
        description: "",
        selected: false,
    },

]



const ServiceType = () => {
    const [selected, setSelected] = useState({
        type: 0,
        value: false,
    })

    const handleClick = (type: number) => {
        services.map((item, index) => {
            if (type === index) {
                item.selected = true
                setSelected({
                    type: type,
                    value: item.selected
                })
            } else {
                item.selected = false
                setSelected({
                    type: type,
                    value: item.selected
                })
            }
        }
        )




    }

    return (
        <div className='flex items-center justify-center mt-8 gap-8'>
            {
                services.map((type, index) => (
                    <div key={index} onClick={() => handleClick(index)} className={`flex flex-col items-center justify-center  rounded-xl p-8 hover:bg-primary hover:shadow-xl hover:text-white cursor-pointer ${type.selected ? "bg-primary shadow-xl text-white" : "bg-white border border-solid border-gray-200"}`}>
                        <Image src={type.icon} alt={type.title} width={72} height={72} className='p-2 rounded-full object-scale-down bg-[#eef3f7]' />
                        <h2 className="mt-8 text-lg font-semibold sm:text-lg">
                            {type.title}
                        </h2>
                        <p className='mt-2 line-clamp-3'>
                            {type.description}
                        </p>

                    </div>
                ))
            }
        </div>
    )
}

export default ServiceType