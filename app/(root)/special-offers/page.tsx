import HeaderPath from '@/components/common/HeaderPath'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SpecialOffers = () => {
    return (
        <div className='my-6'>
            <HeaderPath title='Special Offers' path='/special-offers' />

            {/* <div className="relative w-full sm:h-[200px] md:h-[400px] lg:h-[400px]">

                <Image src="https://img.freepik.com/free-vector/hospital-care-sale-banner-template_23-2151151381.jpg" alt="Background" className="w-full h-full object-cover" width={400} height={400} />
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent "></div>
                <div className="absolute p-4 md:p-8 inset-0 flex w-full gap-4 md:w-[50%]  flex-col items-start justify-start">
                    <h1 className="text-white text-lg md:text-5xl font-[500] tracking-widest">Special Offers</h1>
                    <h1 className="text-white text-md md:text-2xl font-[500] tracking-widest">Discover Unbeatable Deals for Your Health and Beauty Needs</h1>
                    <p className='text-white text-sm md:text-lg  font-[500] tracking-widest'>Take advantage of our limited-time special offers designed to bring you premium health and beauty services at incredible value. Whether you&apos;re seeking advanced treatments or everyday care, Estheva Polyclinic provides exclusive packages tailored just for you. Elevate your wellness journey today!</p>
                </div>
            </div> */}

            <div className=' flex flex-col px-4 md:px-8 xl:px-12'>
                <p className='md:text-2xl text-primary'>Claim Your Offer Today</p>
                <h1 className='md:text-3xl mb-4 text-gray-950'>Don’t Miss Out on Our Limited-Time Deals</h1>

                <div className='my-8 '>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8'>
                        <Link href={''} className=''>
                            <div className='flex flex-col border border-solid '>
                                <Image src='https://img.freepik.com/premium-vector/medical-social-media-post-banner-template_990473-19.jpg' width={400} height={400} alt='offer' className='w-full h-96 object-cover' />
                                <div className='p-4'>
                                    <h1 className='text-3xl mb-4 text-gray-950'>50% Off body slimming Treatment</h1>
                                    <p className='text-gray-700'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.</p>

                                </div>

                            </div></Link>
                        <Link href={''} className=''>
                            <div className='flex flex-col border border-solid '>
                                <Image src='https://img.freepik.com/premium-vector/medical-social-media-post-banner-template_990473-19.jpg' alt='offer' className='w-full h-96 object-cover' width={400} height={400} />
                                <div className='p-4'>
                                    <h1 className='text-3xl mb-4 text-gray-950'>50% Off body slimming Treatment</h1>
                                    <p className='text-gray-700'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.</p>

                                </div>

                            </div></Link>


                    </div>



                </div>
            </div>





        </div>
    )
}

export default SpecialOffers