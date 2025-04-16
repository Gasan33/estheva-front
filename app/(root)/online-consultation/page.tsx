import Consultation from '@/components/landing/Consultation'
import Image from 'next/image'
import React from 'react'

const OnlineConsultation = () => {
    return (
        <div>
            <section className="w-full bg-white">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:pl-16 gap-10">
                    <div className="max-w-lg space-y-6">
                        <h1 className="text-4xl font-bold uppercase text-gray-800 leading-snug">
                            Doctor MEDICAL <span className="text-primaryColor">CONSULTATION</span>
                        </h1>
                        <p className="text-gray-600">
                            Experience the convenience of accessing quality healthcare from the comfort of your home with Estheva Polyclinic’s Online Medical Consultation service. Our experienced healthcare professionals are available for consultations via video, phone, or chat, providing expert medical advice without the need for in-person visits.
                        </p>
                    </div>
                    <div className="w-full bg-blue-100">
                        <Image
                            src="/images/online-consultation.jpg"
                            alt="Online Consultation"
                            width={900}
                            height={900}
                            className="w-full h-auto object-contain"
                        />
                    </div>

                </div>
            </section>
            <section>
                <Consultation />
            </section>
        </div>

    )
}

export default OnlineConsultation
