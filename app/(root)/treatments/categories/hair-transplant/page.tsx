'use client';

import FullScreenImage from '@/components/common/FullScreenImage';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react';

const HairTransplant = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    return (
        <div className="py-16 space-y-24">
            {/* Intro Paragraph */}
            <div className="px-6 md:px-16 lg:px-32 text-base md:text-lg text-gray-800 leading-relaxed">
                <p>
                    Dr. Ahsen Farooque, a distinguished practitioner in the field of hair restoration, is a beacon of excellence certified by The American Board of Hair Restoration Surgery. With a passion for restoring confidence and natural aesthetics, Dr. Farooque combines his expertise with a personalized approach to address each patient's unique needs.
                </p>
                <p className="mt-4">
                    Utilizing advanced techniques and state-of-the-art technology, Dr. Farooque ensures the highest standards of safety and efficacy in every hair transplant procedure. Whether it's follicular unit transplantation (FUT), follicular unit extraction (FUE), or the innovative robotic-assisted hair restoration, patients can trust in Dr. Farooque's skillful hands to deliver optimal results.
                </p>
            </div>

            {/* Hero Image Section */}
            <div className="relative h-[400px] md:h-[600px] w-full">
                <Image
                    src="/images/hair1.webp"
                    alt="Hair Restoration"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
                    <h1 className="text-white text-3xl md:text-5xl lg:text-[88px] text-center uppercase tracking-wider font-bold">
                        Hair Restoration
                    </h1>
                    <Button className="mt-6 bg-white text-black hover:bg-gray-200 rounded-sm font-light uppercase px-6 py-3 md:px-8 md:py-4 tracking-widest">
                        Book A Consultation
                    </Button>
                </div>
            </div>

            {/* Doctor Section */}
            <div className="flex flex-col lg:flex-row items-center gap-12 px-6 md:px-16 lg:px-24">
                <div className="w-full lg:w-1/2">
                    <Image
                        src="/images/dr-hair.jpg"
                        alt="Dr. Ahsen Farooque"
                        width={600}
                        height={600}
                        className="w-full h-[400px] md:h-[600px] object-cover rounded"
                    />
                </div>
                <div className="w-full lg:w-1/2 text-gray-800">
                    <h2 className="text-xl md:text-2xl uppercase tracking-wider font-bold">
                        Dr. Ahsen Farooque
                    </h2>
                    <div className="mt-6 space-y-4 text-base md:text-lg font-light leading-relaxed">
                        <p>
                            Dr. Ahsen Farooque is a distinguished diplomat certified by the American Board of Hair Restoration Surgery (ABHRS), showcasing expertise in advanced hair transplant techniques.
                        </p>
                        <p>
                            A pioneer in Hybrid FUE Hair Transplantation, Dr. Farooque's mastery extends to DHI procedures, earning him the title of DHI Master Specialist.
                        </p>
                        <p>
                            Dr. Farooque's insights on hair loss and treatment regularly grace the pages of Vogue Arabia, reflecting his status as a celebrity hair transplant surgeon in Dubai.
                        </p>
                        <p>
                            With a reputation built on innovation and excellence, Dr. Ahsen Farooque remains at the forefront of hair restoration, offering transformative solutions that redefine aesthetic standards worldwide.
                        </p>
                    </div>
                    <Button className="mt-6 bg-blue-500 text-white rounded-sm uppercase font-light px-6 py-3 md:px-8 md:py-4 tracking-widest hover:bg-blue-600">
                        Book your Consultation
                    </Button>
                </div>
            </div>

            {/* Video Section */}
            <div className="w-full px-6 md:px-16">
                <video
                    src="/images/hair-video.mp4"
                    autoPlay
                    loop
                    muted
                    controls
                    className="w-full h-auto rounded-lg object-cover"
                />
            </div>

            {/* Before/After Section */}
            <div className="px-6 md:px-16">
                <h2 className="text-2xl text-center uppercase tracking-wider font-bold">Before / After</h2>
                <p className="text-center text-base md:text-xl mt-4 text-gray-700 font-light">
                    Example cases of Hair Transplant performed by Dr. Ahsen Farooque
                </p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {['hair2.webp', 'hair3.webp', 'hair4.webp', 'hair5.webp'].map((img, i) => (
                        <Image
                            key={i}
                            src={`/images/${img}`}
                            alt={`before-after-${i}`}
                            width={600}
                            height={400}
                            className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
                            onClick={() => setSelectedImage(`/images/${img}`)}
                        />
                    ))}
                </div>
            </div>
            {selectedImage && (
                <FullScreenImage
                    src={selectedImage}
                    onClose={() => setSelectedImage(null)}
                />
            )}
        </div>
    );
};

export default HairTransplant;
