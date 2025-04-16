"use client";
import Image from "next/image";
import dynamic from "next/dynamic";

const ParticlesComponent = dynamic(() => import('./ParticlesBackground'), {
    ssr: false
});

const AppBaner = () => {
    return (
        <div className="relative pt-20 pb-8 px-4 md:px-12 overflow-hidden">
            {/* Background Particles */}
            <div className="absolute inset-0 -z-10">
                <ParticlesComponent />
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col md:flex-row text-white justify-between w-full mt-8">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <Image
                        src="/images/phone.svg"
                        alt="app"
                        width={160}
                        height={160}
                        className="mx-auto md:mx-0 object-contain"
                        priority
                    />

                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h1 className="font-bebas-neue tracking-widest text-3xl md:text-4xl text-light-100">
                            Experience Convenience at Your Fingertips!
                        </h1>
                        <p className="book-title tracking-widest mt-2">
                            Book your appointment online and enjoy seamless access to all our services.
                        </p>
                    </div>
                </div>

                {/* Uncomment this section when you're ready to add download buttons */}
                {/*
                <div className="flex flex-col items-center justify-center gap-6 mt-8 md:mt-0">
                    <Link href="#" className="py-2 px-4 flex items-center gap-4 border border-green-800 bg-primary rounded-md w-56">
                        <Image src="/icons/googlePlay.svg" alt="google-play" width={32} height={32} className="object-contain" />
                        <div className="flex flex-col items-start">
                            <span className="text-xs">GET IT ON</span>
                            <span className="text-sm font-bold">Play Store</span>
                        </div>
                    </Link>

                    <Link href="#" className="py-2 px-4 flex items-center gap-4 border border-green-800 bg-primary rounded-md w-56">
                        <Image src="/icons/apple.svg" alt="apple-store" width={32} height={32} className="object-contain" />
                        <div className="flex flex-col items-start">
                            <span className="text-xs">Download on the</span>
                            <span className="text-sm font-bold">App Store</span>
                        </div>
                    </Link>
                </div>
                */}
            </div>
        </div>
    );
};

export default AppBaner;
