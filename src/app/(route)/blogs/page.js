import Image from "next/image"
import HeaderPath from "../../../components/common/HeaderPath"
import Link from "next/link"

const data = [
    {
        id: 1,
        author: "ESTHEVA",
        title: "Lymphatic drainage",
        topic: "MASSAGE",
        des: "Lymphatic drainage massage is more than just a relaxing treatment—it's a crucial part of maintaining overall well-being and a healthy body shape. At Estheva Polyclinic, we incorporate lymphatic drainage into our weight loss programs to help the body naturally detoxify and eliminate waste.",
        img: "https://estheva-polyclinic.com/cdn/shop/articles/Want_perfect_skin_17.png",
    },
    {
        id: 2,
        author: "ESTHEVA",
        title: "IV Drip",
        topic: "BEAUTY",
        des: "IV Drip Therapy has gained significant attention in the wellness industry, especially in the UAE. Backed by recent medical research, IV Drips effectively deliver essential nutrients, antioxidants, and hydration directly into the bloodstream, providing quick and efficient benefits.",
        img: "https://estheva-polyclinic.com/cdn/shop/articles/9.png",
    },
    {
        id: 3,
        author: "ESTHEVA",
        title: "Medical Laboratory",
        topic: "HEALTH",
        des: "As we age, it becomes crucial to monitor our health proactively. At Estheva Polyclinic in Dubai, we recommend 10 essential medical laboratory tests everyone over 40 should consider doing once a year to maintain optimal health. These tests help detect potential health issues early and enable timely interventions.",
        img: "https://estheva-polyclinic.com/cdn/shop/articles/Want_perfect_skin_16.png",
    },
    {
        id: 4,
        author: "ESTHEVA",
        title: "Weight Loss",
        topic: "HEALTH",
        des: "If you're searching for the best weight loss programs in Dubai, Estheva Polyclinic offers personalized solutions tailored to your unique body composition. Our weight loss journey begins with a free consultation to assess your body composition using advanced tools. Understanding your body's fat distribution, muscle mass, and metabolic rate is essential to creating an effective weight loss plan. Based on these results, our expert doctors will design a program that combines non-invasive slimming treatments for optimal fat loss.",
        img: "https://estheva-polyclinic.com/cdn/shop/articles/Want_perfect_skin_15.png",
    },
]

const Blogs = () => {
    return (
        <div>
            <div className="relative w-full h-56">

                {/* <img
src="https://estheva-polyclinic.com/cdn/shop/files/IMG_1461.jpg"
alt="Example"
className="w-full h-full object-cover"
/> */}


                <div className="absolute inset-0 bg-white bg-opacity-50"></div>

                {/* Optional Text Content */}
                <div className="absolute bg-secondary inset-0 flex items-center justify-center text-center text-black">
                    <div>
                        <h1 className="text-2xl font-bold">Experience Convenience at Your Fingertips!</h1>
                        <p className="mt-2 text-lg">Download our app now and enjoy seamless access to all our services.</p>
                        <div className="flex items-center justify-center gap-8 mt-4">
                            <Link href={""} className="px-4 py-2 flex items-center border border-solid gap-4 border-gray-300 w-56 bg-white rounded-md">
                                <Image src="/google-play.svg" fill sizes="400" alt="google-play" className="h-6 w-6" />
                                <div className="flex flex-col justify-center items-start">
                                    <p className="text-sm">GET IT ON</p>
                                    <h1 className="text-sm font-bold">Play Store</h1>
                                </div>


                            </Link>
                            <Link href={""} className="px-4 py-2 flex items-center border border-solid gap-4 border-gray-300 w-56 bg-white rounded-md">
                                <Image src="/apple.svg" alt="google-play" fill sizes="400" className="h-6 w-6" />
                                <div className="flex flex-col justify-center items-start">
                                    <p className="text-sm">Download ON the</p>
                                    <h1 className="text-sm font-bold">App Store</h1>
                                </div>


                            </Link>
                        </div>

                    </div>

                </div>
            </div>
            <HeaderPath title="News & Blogs" path="/blogs" showSearchBar={false} />


            <div className="m-4  md:mx-32 md:my-8">
                <div>
                    <h3 className="text-xl  text-primary sm:text-xl">
                        Blogs & News
                    </h3>
                    <h2 className="text-2xl  font-[600] mt-8 text-gray-900 sm:text-[48px]">
                        Let&apos;s See Our leatest Blog & News
                    </h2>
                </div>

                <div className="mt-8 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-8">
                    {
                        data.map((item) => (
                            <div key={item.id} className="border border-solid border-gray-300">
                                <Image src={item.img} alt={item.title} className="object-cover w-full h-[400px]" fill sizes="400" />
                                <div className="p-4">
                                    <h1 className="text-gray-950 text-[32px] tracking-wide font-semibold">{item.title}</h1>
                                    <p className="text-gray-800 text-lg line-clamp-4">{item.des}</p>

                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>
        </div>
    )
}

export default Blogs

