import AnimatedBackground from '../animations/AnimatedBackground';

const Banner: React.FC = () => {
    return (
        <div className='relative'>
            <AnimatedBackground />
            <div className="flex flex-col lg:flex-row h-[100%] items-center justify-between">


                <div className="text-[32px] md:text-[64px] flex-1 z-10 mx-4 ">
                    {/* Reveal Your Radiance Where Art Meets Science in Beauty */}
                    Instaut Free Consultation Online
                </div>


                <div className="relative flex-1 inset-0 h-full w-full">
                    <video
                        src='/images/banner_video.mp4'
                        autoPlay
                        loop
                        muted
                        style={{ width: "100%", height: "100%", objectFit: 'cover' }}
                    />
                    <svg
                        className="absolute inset-0 h-full w-full"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="50 50 400 250"
                    >
                        <polygon points="0,0 100,100 0,100" fill="#fff" />
                        <polygon points="100,0 200,0 200,100" fill="#40C0E7" />
                        <polygon points="200,0 300,0 200,100" fill="#40C0E7" />
                        <polygon points="300,0 400,0 300,100" fill="#4C748E" />
                        <polygon points="500,0 600,0 400,200" fill="#fff" />
                        <polygon points="0,100 100,100 0,200" fill="#4C748E" />
                        <polygon points="0,200 100,320 0,320" fill="#fff" />
                        <polygon points="230,200 350,320 100,320" fill="#fff" />
                    </svg>

                </div>




            </div>

            <video
                src='/images/banner_video.mp4'
                autoPlay
                loop
                muted
                style={{ width: "100%", height: "100%", objectFit: 'cover' }}
            />
        </div>
    );
};

export default Banner;
