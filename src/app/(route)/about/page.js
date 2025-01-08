import React from "react"
// import HeaderPath from "../../_components/HeaderPath"
import Link from "next/link"
import Image from "next/image"

const AboutUs = () => {
    return (
        <div>
            <div className="relative w-full sm:h-[200px] md:h-[400px] lg:h-[600px]">

                <Image
                    src="https://estheva-polyclinic.com/cdn/shop/files/IMG_1461.jpg"
                    alt="Estheva polyclinic"
                    fill
                    sizes="400"
                    className="w-full h-full object-cover"
                />


                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Optional Text Content */}
                <div className="absolute  inset-0 flex flex-col items-center justify-center text-center text-white">
                    <div>
                        <h1 className="text-2xl font-bold">ABOUT US</h1>
                        <p className="mt-2 text-lg">Empowering Your Health and Beauty with Advanced Care and Personalized Solutions</p>



                    </div>
                    <Link href={""} >
                        <div className="h-[56px]  mt-10 bg-primary shadow font-bold px-8 py-4">
                            BOOK AN APPOINTMENT
                        </div>


                    </Link>

                </div>
            </div>

            <div className="py-16 bg-secondary">
                <h1 className="text-4xl text-gray-950  flex justify-center font-bold">Welcome to the Best Clinic in Dubai</h1>
                <div className="mt-16 mx-4 md:mx-32  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-10">
                    <div>
                        <Image src="https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg" alt="Estheva polyclinic" fill sizes="400" />
                    </div>

                    <div className="flex flex-col gap-4  py-8">
                        <h1 className="text-4xl flex text-primary font-bold uppercase tracking-wider">Estheva Polyclinic</h1>
                        <p className="text-gray-800 text-lg font-normal">Al Wasl Road, 375B, Dubai, United Arab Emirates</p >

                        <h1 className="text-primary text-xl">+971 545 67 1677</h1>
                        <h1 className="text-gray-950 text-4xl font-semibold tracking-widest">Working Hours</h1>
                        <div className="border border-solid border-primary w-40"> </div>
                        <div className="pr-40 flex justify-between items-center">
                            <h1 className="text-gray-950  text-xl font-semibold">MON-SUN</h1>
                            <p className="text-gray-800 text-lg font-normal">09:00 AM - 21:00 PM</p>

                        </div>



                    </div>

                </div>

            </div>


            <div className="py-16">
                <h1 className="text-4xl flex justify-center font-bold">Our Story</h1>

                <div className="mt-16 mx-4 md:mx-32 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
                    <div className="flex flex-col px-4 gap-4">
                        <h1 className="text-3xl flex text-gray-950 font-semibold uppercase tracking-wider">2022</h1>
                        <p className="text-gray-700 line-clamp-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </div>
                    <div className="flex flex-col px-4 gap-4">
                        <h1 className="text-3xl flex text-gray-950 font-semibold uppercase tracking-wider">2023</h1>
                        <p className="text-gray-700 line-clamp-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </div>
                    <div className="flex flex-col px-4 gap-4">
                        <h1 className="text-3xl flex text-gray-950 font-semibold uppercase tracking-wider">2024</h1>
                        <p className="text-gray-700 line-clamp-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </div>

                </div>


            </div>



        </div>
    )
}

export default AboutUs