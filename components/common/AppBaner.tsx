import Image from "next/image"
import ParticlesComponent from "../common/animations/ParticlesBackground"
import Link from "next/link"

const AppBaner = () => {
    return (
        <div className="pt-28 pb-8 px-4 md:px-12">
            <div className="-z-10">
                <ParticlesComponent />
            </div>
            <div className="flex flex-col md:flex-row z-50 text-white justify-between w-full mt-8">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <Image src="/images/phone.svg" alt="app" width={160} height={200} className="mx-auto md:mx-0" />
                    <div className="flex flex-col items-center md:items-start">
                        <h1 className="font-bebas-neue text-3xl md:text-4xl text-light-100 text-center md:text-left">
                            Experience Convenience at Your Fingertips!
                        </h1>
                        <p className="book-title text-center md:text-left">Download our app now and enjoy seamless access to all our services.</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-8 mt-8 md:mt-0">
                    <Link href={''} className='py-2 px-4 flex items-center justify-center border border-solid gap-4 border-green-800 w-56 bg-primary rounded-md'>
                        <Image src="/icons/googlePlay.svg" alt="google-play" height={32} width={32} />
                        <div className='flex flex-col justify-center items-start'>
                            <p className='text-sm'>GET IT ON</p>
                            <h1 className="text-sm font-bold">Play Store</h1>
                        </div>
                    </Link>
                    <Link href={''} className='px-4 py-2 flex items-center justify-center border border-solid gap-4 border-green-800 w-56 bg-primary rounded-md'>
                        <Image src="/icons/apple.svg" alt="apple-store" height={32} width={32} />
                        <div className='flex flex-col justify-center items-start'>
                            <p className='text-sm'>Download ON the</p>
                            <h1 className="text-sm font-bold">App Store</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AppBaner
