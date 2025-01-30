import React from 'react'
import { termsAndConditions } from '@/constants'
import HeaderPath from '@/components/common/HeaderPath'

const TermsAndConditions = () => {
    return (
        <div className='my-6'>
            <HeaderPath title="Terms And Conditions" path="/terms&conditions" />

            <div className='flex flex-col mt-4 md:mt-6 lg:mt-8 px-4 md:px-8 lg:px-12 xl:px-16'>
                {termsAndConditions.map((item) => (
                    <div key={item.section}>
                        <ol className='list-[upper-roman] pl-6 space-y-2 text-gray-700'>
                            <li className='font-bold text-2xl mb-4'>
                                {item.section}
                                {item.date && <h1 className='font-semibold mt-2'> {item.date}</h1>}
                                {item.desc && <p className='font-normal my-2'>{item.desc}</p>}

                                <ul className='list-decimal pl-6 space-y-2 text-gray-700'>
                                    {item.content.map((item) => (
                                        <li key={item.title} className='font-semibold text-lg my-2'>
                                            {item.title}
                                            {/* {item.content && <p className='font-normal my-2'>{item.content}</p>} */}
                                            <ul className='list-disc pl-6 space-y-2 text-gray-700'>

                                                {item.content.map((item) =>
                                                (<li key={item} className='font-normal mt-2'>
                                                    <p>{item.split(":")[0]}</p>
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

export default TermsAndConditions


