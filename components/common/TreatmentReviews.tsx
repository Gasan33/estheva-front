import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { HiStar } from 'react-icons/hi'
import { useEffect, useState } from 'react';
import { imageFormater } from '@/lib/utils';
import Image from 'next/image';

const TreatmentReviews = () => {
    const [reviews, setReviews] = useState<Review[] | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchReviews = async () => {
        try {
            const response = await fetch(`/api/reviews`);
            const data = await response.json();
            setReviews(data.length > 10 ? data.slice(0, 10) : data);
        } catch (error) {
            console.error("Error fetching testimonials:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    if (loading || !reviews) return <div>loading ...</div>;

    return (
        <div className='mt-[30px] lg:mt-[55px] treatment-reviews-wrapper'>
            <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                {reviews.map((review) => <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px]">
                            <Image
                                src={review.patient.profile_picture ? imageFormater(review.patient.profile_picture) : "/images/noavatar.png"}
                                alt={review.patient.name}
                                width={64}
                                height={64}
                                className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div>
                                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                                    {review.patient.name}
                                </h4>
                                <div className="flex items-center gap-[2px]">
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                    <HiStar className='text-yellowColor w-[18px] h-5' />
                                </div>
                            </div>
                        </div>
                        <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                            "{review.review_text}
                        </p>
                    </div>
                </SwiperSlide>
                )}

            </Swiper>

        </div>
    )
}

export default TreatmentReviews;