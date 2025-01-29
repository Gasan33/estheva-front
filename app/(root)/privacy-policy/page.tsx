import React from 'react'
import "./style.css"
import Image from 'next/image'
import { privacy } from '@/constants'



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
                                        <li key={item.title} className='font-semibold text-lg'>
                                            {item.title}
                                            {item.content && <p className='font-normal'>{item.content}</p>}
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


