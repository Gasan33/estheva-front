import React from 'react'
import "./style.css"
import Image from 'next/image'

const privacy = [
    {
        section: "Estheva Polyclinic and www.estheva-polyclinic.com Privacy Policy",
        date: "Effective Date: 01.10.2023",
        desc: "This Privacy Policy outlines how Estheva Polyclinic and its website, www.estheva-polyclinic.com (\"Website\"), collect, use, disclose, and protect your personal information. By accessing or using the Website, you consent to the practices described in this Privacy Policy.",
        content: [
            {
                title: "Information Collected",
                content: [
                    "We may collect personal information, including but not limited to your name, contact details, medical history, and payment information, to provide medical services and improve your experience on our Website."
                ],
            },
            {
                title: "Use of information",
                content: [
                    "We may use your information for appointment scheduling, payment processing, communication, and to improve our services.",
                    "Your medical information is used solely for healthcare purposes and is kept confidential."
                ],
            },
            {

                title: "Cookies and Analytics",
                content: [
                    "We may use cookies and analytics tools to collect information about your use of our Website to enhance your experience and analyze user behavior.",
                ],
            },
            {
                title: "Third-Party Services",
                content: [
                    "We may use third-party service providers to facilitate Website functionality and payment processing. These providers have their own privacy policies.",

                ]
            },
            {
                title: "Data Security",
                content: [
                    "We employ security measures to protect your information, but no data transmission over the internet is entirely secure.",

                ]
            },
            {
                title: "Information Sharing",
                content: [
                    "We do not sell or rent your personal information to third parties.",
                    "We may share your information with healthcare professionals providing services at Estheva Polyclinic.",

                ]
            },
            {
                title: "Consent",
                content: [
                    "By using our Website, you consent to the collection and use of your information as outlined in this Privacy Policy.",

                ]
            },
            {
                title: "Access and Correction",
                content: [
                    "You may request access to your personal information and request corrections or updates.",

                ]
            },
            {
                title: "Retention",
                content: [
                    "We retain your information for the duration necessary to fulfill the purposes outlined in this Privacy Policy."

                ]
            },

        ]
    },
    {
        section: "Data Collection and Usage for Compliance with Dubai Health Authority Patient's Medical Record",
        date: "",
        desc: "",
        content: [
            {
                title: "Data Collection",
                desc: "Estheva Polyclinic, in accordance with the regulations set forth by the Dubai Health Authority (DHA), will collect the following information from patients for the purpose of maintaining accurate medical records and providing optimal healthcare services:",
                content: [
                    "Emirates ID Number: We will collect your Emirates ID number to verify your identity and ensure compliance with DHA requirements for patient identification.",
                    "Personal Information: We will gather your personal information, including but not limited to your name, date of birth, contact details, and address, to create and maintain your medical record accurately.",
                    "Medical Information: To provide you with appropriate medical care, we will record and update your medical history, treatment records, and diagnostic information as necessary.",
                    "Images of Patient's Before/After Treatment Results: We may capture images of your condition before and after treatment to monitor progress, evaluate treatment effectiveness, and maintain comprehensive medical records.",


                ]
            },
            {
                title: "Data Handling and Discretion",
                desc: "",
                content: [
                    "Confidentiality: Estheva Polyclinic places the highest priority on the confidentiality and security of your data. Your information will be stored securely and will only be accessible to authorized healthcare professionals involved in your care.",
                    "Image Usage: Any images of your before/after treatment results will be kept confidential and solely used for medical purposes, including assessment, research, and documentation within the clinic.",
                    "Non-Disclosure: These images will not be shared on any public or social media channels without your explicit consent. Your privacy and consent are of paramount importance to us.",
                    "Consent Form: In cases where we intend to share your before/after treatment images on social media channels or for any promotional purposes, we will seek your specific consent by providing you with a separate consent form. Sharing such images will only occur if you voluntarily provide consent.",


                ]

            }
        ]
    }

]

const PrivacyPolicy = () => {
    return (
        <div className='flex flex-col'>
            <div className='imageWrapper'>
                <Image src='/pic1.png' alt='Estheva Polyclinic' className='image' fill sizes='400' />
                <div className="overlay items-center flex flex-col justify-center" >
                    <h1 className='text-[32px] text-white font-semibold tracking-widest'>Privacy Policy</h1>
                    <h2 className='text-[18px] text-white font-[200] tracking-wide'>Ensuring the Protection of Your Personal Information at Estheva Polyclinic</h2>
                </div>
            </div>

            <div className=' mx-4 md:mx-32 my-4 md:my-16'>
                {privacy.map((item) => (
                    <div key={item.section}>
                        <ol className='list-[upper-roman] pl-6 space-y-2 text-gray-700'>
                            <li className='font-bold text-2xl mb-4'>
                                {item.section}
                                {item.date && <h1 className='font-semibold mt-2'> {item.date}</h1>}
                                {item.desc && <p className='font-normal my-2'>{item.desc}</p>}

                                <ul className='list-decimal pl-6 space-y-2 text-gray-700'>
                                    {item.content.map((item) => (
                                        <li key={item.desc} className='font-semibold text-lg'>
                                            {item.title}
                                            {item.desc && <p className='font-normal'>{item.desc}</p>}
                                            <ul className='list-disc pl-6 space-y-2 text-gray-700'>

                                                {item.content.map((item) =>
                                                (<li key={item} className='font-normal mt-2'>
                                                    {item.split(":")[0]}
                                                    <p >{item.split(":")[1]}</p>
                                                </li>

                                                ))}

                                            </ul>
                                        </li>

                                    ))}
                                </ul>

                            </li>
                        </ol>

                    </div>
                ))}

                <div className='pl-6 space-y-2 mt-16 text-lg'>
                    By choosing to receive medical services at Estheva Polyclinic, you acknowledge and
                    agree to the collection and handling of your data as outlined above.
                    We are committed to ensuring the highest standards of data privacy
                    and protection, in compliance with DHA regulations and international
                    healthcare standards. If you have any concerns or questions regarding
                    your data, please do not hesitate to contact our Data Protection
                    Officer, whose contact information can be provided upon request.
                </div>

            </div>

        </div>
    )
}

export default PrivacyPolicy


