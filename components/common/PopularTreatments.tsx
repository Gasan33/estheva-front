"use client";
import ServiceType from "./ServiceType"
import TreatmentsList from './TreatmentsList';
const PopularServices = () => {
    return (
        <div className='m-4 md:m-16'>

            <div>
                <div className='flex flex-col  h-96 w-full p-8'>
                    <div className='gap-4'>
                        <h1 className='text-[32px] text-primary font-semibold'>Service Type</h1>
                        <p className='text-[18px] text-gray-950 font-normal'>Choose your desired services weather in clinic, home, or office we can reach anywhere just for you.</p>
                    </div>

                    <ServiceType />

                </div>

                <div className='mt-8'>
                    <div className='gap-4'>
                        <h1 className='text-[32px] text-primary font-semibold'>Top Rated Services</h1>
                        <p className='text-[18px] text-gray-950 font-normal'>Where Satisfaction Meets Perfection.</p>
                    </div>
                    <TreatmentsList />
                </div>
                <div className='mt-8'>
                    <div className='gap-4'>
                        <h1 className='text-[32px] text-primary font-semibold'>Pupolar Services</h1>
                        <p className='text-[18px] text-gray-950 font-normal'>Where Satisfaction Meets Perfection.</p>
                    </div>
                    <TreatmentsList />
                </div>

            </div>



        </div>
    )
}

export default PopularServices