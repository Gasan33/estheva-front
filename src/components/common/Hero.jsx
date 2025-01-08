"use client";
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState } from 'react'
import { PlayIcon } from "hugeicons-react";
import Link from 'next/link';
const Hero = () => {
    const [openVideo, setOpenVideo] = useState(false);
    const handleVideoClick = (e) => {
        e.preventDefault
        setOpenVideo(!openVideo)
    }
    return (
        <section>
            <div className="relative w-full h-56">

                {/* <img
    src="https://estheva-polyclinic.com/cdn/shop/files/IMG_1461.jpg"
    alt="Example"
    className="w-full h-full object-cover"
/> */}


                <div className="absolute inset-0 bg-white bg-opacity-50"></div>

                {/* Optional Text Content */}
                <div className="absolute bg-secondary inset-0 flex items-center justify-center text-center text-black">
                    <div>
                        <h1 className="text-2xl font-bold">Experience Convenience at Your Fingertips!</h1>
                        <p className="mt-2 text-lg">Download our app now and enjoy seamless access to all our services.</p>
                        <div className='flex items-center justify-center gap-8 mt-4'>
                            <Link href={''} className='px-4 py-2 flex items-center border border-solid gap-4 border-gray-300 w-56 bg-white rounded-md'>
                                <img src="/google-play.svg" alt="google-play" className='h-6 w-6' />
                                <div className='flex flex-col justify-center items-start'>
                                    <p className='text-sm'>GET IT ON</p>
                                    <h1 className="text-sm font-bold">Play Store</h1>
                                </div>


                            </Link>
                            <Link href={''} className='px-4 py-2 flex items-center border border-solid gap-4 border-gray-300 w-56 bg-white rounded-md'>
                                <img src="/apple.svg" alt="google-play" className='h-6 w-6' />
                                <div className='flex flex-col justify-center items-start'>
                                    <p className='text-sm'>Download ON the</p>
                                    <h1 className="text-sm font-bold">App Store</h1>
                                </div>


                            </Link>
                        </div>

                    </div>

                </div>
            </div>

            <div className='h-[400px] w-full  overflow-clip transition-all duration-500 ease-in-out'>
                <div style={{ position: "relative", width: "100%", height: "400px" }}>
                    {/* Video Element */}
                    <video
                        src='/banner_video.mp4'
                        autoPlay loop muted
                        style={{ width: "100%", height: "400px", objectFit: 'cover', }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            paddingRight: "116px",
                            paddingLeft: "116px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            color: "white",
                            background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7))",
                            pointerEvents: "none",
                        }}
                    >

                        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                                <div>

                                    <div className="max-w-lg md:max-w-none">
                                        <h2 className="text-3xl font-semibold text-white sm:text-3xl">
                                            <span className='text-primary'> Reveal </span> Your <span className='text-primary'>Radianc <br /></span>
                                            Where Art Meets Science <br />in Beauty
                                        </h2>
                                        {/* <h1 className='text-2xl  text-gray-900 font-[700]'>Where Art Meets Science in Beauty</h1> */}
                                        <p className="mt-4 text-white">
                                            At Estheva Polyclinic, we combine state-of-the-art technology with a compassionate approach combined advanced technology with personalized care to help you achieve your ideal look. Discover a journey to enhanced beauty and well-being today.
                                        </p>
                                        <div className='lg:flex lg:gap-4 gap-2 items-center'>
                                            <Button className='lg:mt-8 mt-4 py-6 px-8 rounded-lg shadow-lg'>
                                                Book an Appointment
                                            </Button>
                                        </div>

                                    </div>
                                </div>

                                {/* <div className="relative w-full mt-16 h-[600px] bg-white ">

                                    <div className="absolute bottom-0 left-[25%]  w-[80%] h-[80%] rounded-full  bg-blue-950 ">

                                    </div>

                                    <div className="absolute bottom-8 left-[28%]  w-[80%] h-[80%] rounded-full border-2 solid border-primary  bg-transparent ">

                                    </div>

                                    <div className="absolute bottom-0 left-[18%] rounded-b-full  w-[100%] h-[120%] overflow-hidden">
                                        <Image src='/nurse.png' fill alt='Book Now' className='w-full h-full object-cover rounded-b-full' />
                                    </div>
                                </div> */}
                            </div>

                        </div>
                    </div>
                </div>


            </div>


        </section>
    )
}

export default Hero