import Consultation from '@/components/common/Consultation'
import Image from 'next/image'
import React from 'react'

const OnlineConsultation = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="w-full py-16 px-6 md:px-12 lg:px-20">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight uppercase">
                            Doctor Medical <span className="text-primaryColor">Consultation</span>
                        </h1>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Experience the convenience of accessing quality healthcare from the comfort of your home with Estheva Polyclinic’s Online Medical Consultation service. Our experienced healthcare professionals are available for consultations via video, phone, or chat, providing expert medical advice without the need for in-person visits.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                        <Image
                            src="/images/online-consultation.jpg"
                            alt="Online Consultation"
                            width={900}
                            height={900}
                            quality={100}
                            priority
                            className="w-full h-auto object-contain rounded-xl shadow-md"
                        />
                    </div>
                </div>
            </section>

            {/* CTA or Booking Component */}
            <section className="px-6 md:px-12 lg:px-20 pb-16">
                <Consultation />
            </section>
        </div>
    )
}

export default OnlineConsultation
