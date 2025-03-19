import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const HairTransplant = () => {
    return (
        <div className='py-16'>
            <p className='px-32 text-lg'>
                Dr. Ahsen Farooque, a distinguished practitioner in the field of hair restoration, is a beacon of excellence certified by The American Board of Hair Restoration Surgery. With a passion for restoring confidence and natural aesthetics, Dr. Farooque combines his expertise with a personalized approach to address each patient's unique needs.
                Utilizing advanced techniques and state-of-the-art technology, Dr. Farooque ensures the highest standards of safety and efficacy in every hair transplant procedure. Whether it's follicular unit transplantation (FUT), follicular unit extraction (FUE), or the innovative robotic-assisted hair restoration, patients can trust in Dr. Farooque's skillful hands to deliver optimal results.
            </p>
            <div className="relative mt-16">
                {/* Background Image */}
                <Image
                    src="/images/hair1.webp"
                    alt="hair"
                    height={600}
                    width={600}
                    className="w-full h-[600px] object-cover"
                />

                {/* Centered Text & Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-white text-[88px] text-center uppercase tracking-wider font-bold">
                        Hair Restoration
                    </h1>
                    <Button className="mt-6 bg-white rounded-sm font-thin uppercase px-8 py-6 tracking-widest hover:text-white">
                        Book A Consultation
                    </Button>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row px-16 py-32'>
                <div className=' px-24 py-16 flex-1'>
                    <Image
                        src="/images/dr-hair.jpg"
                        alt="hair"
                        height={600}
                        width={600}
                        className="w-full h-[600px] object-cover"
                    />
                </div>
                <div className='w-full flex-1'>
                    <h1 className="text-black text-2xl uppercase tracking-wider font-bold">Dr. Ahsen farooque</h1>
                    <div className='text-lg font-thin text-gray-800 mt-8'>
                        <p className='mt-4'>Dr. Ahsen Farooque is a distinguished diplomat certified by the American Board of Hair Restoration Surgery (ABHRS), showcasing expertise in advanced hair transplant techniques. With a focus on Follicular Unit Extraction (FUE) and Follicular Unit Transplantation (FUT), Dr. Farooque has established himself as a leading worldwide authority in hair restoration.</p>
                        <p className='mt-4'>A pioneer in Hybrid FUE Hair Transplantation, Dr. Farooque's mastery extends to DHI procedures, earning him the title of DHI Master Specialist. Licensed by the Dubai Health Authority (DHA), he is recognized globally for his groundbreaking contributions to the field of hair transplant and aesthetics.</p>
                        <p className='mt-4'>Dr. Farooque's insights on hair loss and treatment regularly grace the pages of Vogue Arabia, reflecting his status as a celebrity hair transplant surgeon in Dubai. He extends his expertise as a sought-after practitioner in the UAE, Ireland, and Australia, consistently delivering exceptional results and unparalleled patient satisfaction.</p>
                        <p className='mt-4'>With a reputation built on innovation and excellence, Dr. Ahsen Farooque remains at the forefront of hair restoration, offering transformative solutions that redefine aesthetic standards worldwide.</p>
                    </div>
                    <Button className="mt-6 bg-blue-100 text-white rounded-sm uppercase font-thin px-8 py-6 tracking-widest hover:text-white">
                        Book your Consultation
                    </Button>
                </div>
            </div>
            <div>
                <video
                    src='/images/hair-video.mp4'
                    autoPlay
                    loop
                    muted
                    controls
                    style={{ width: "100%", height: "100%", objectFit: 'cover' }}
                />
            </div>

            <div className='px-16 py-16'>
                <h1 className="text-black text-2xl text-center uppercase tracking-wider font-bold">before/after</h1>
                <p className="text-gray-800 text-xl mt-8 text-center tracking-wider font-thin">Example cases of Hair Transplant performed by Dr. Ahsen Farooque</p>
                <div className='flex flex-col mt-16 gap-8'>
                    <Image
                        src="/images/hair2.webp"
                        alt="hair"
                        height={600}
                        width={600}
                        className="w-full h-[400px] object-cover"
                    />
                    <Image
                        src="/images/hair3.webp"
                        alt="hair"
                        height={600}
                        width={600}
                        className="w-full h-[400px] object-cover"
                    />
                    <Image
                        src="/images/hair4.webp"
                        alt="hair"
                        height={600}
                        width={600}
                        className="w-full h-[400px] object-cover"
                    />
                    <Image
                        src="/images/hair5.webp"
                        alt="hair"
                        height={600}
                        width={600}
                        className="w-full h-[400px] object-cover"
                    />
                </div>
            </div>

        </div>
    )
}

export default HairTransplant