"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import HeaderPath from "@/components/common/HeaderPath";
import { ArrowRight01Icon } from "hugeicons-react";
import { formatMonthDate } from "@/lib/utils";
import BlogsPageSkeleton from "@/components/skeletons/BlogsPageSkeleton";


const fallbackImage = "/images/fallback.jpg"; // Replace with your own fallback path

const Blogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [loadingMore, setLoadingMore] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);

    const fetchBlogs = async (url: string, append: boolean = false) => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Failed to fetch blogs");
            const result = await response.json();
            const { data: blogsData, pagination } = result.data;

            setBlogs((prev) => append ? [...prev, ...blogsData] : blogsData);
            setNextPageUrl(pagination.next_page_url || null);
            setHasError(false);
        } catch (error) {
            console.error("Failed to fetch blogs:", error);
            setHasError(true);
        } finally {
            setLoading(false);
            setLoadingMore(false);
        }
    };

    useEffect(() => {
        fetchBlogs("/api/blogs");
        AOS.init({ duration: 1000 });
    }, []);

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = fallbackImage;
    };

    if (loading) return <BlogsPageSkeleton />;

    if (hasError) {
        return (
            <div className="p-8 text-center text-gray-600">
                <h2 className="text-2xl font-semibold text-red-500 mb-2">Oops! Something went wrong.</h2>
                <p className="mb-4">We couldn’t load the blog posts. Please try again later.</p>
                <button
                    onClick={() => fetchBlogs("/api/blogs")}
                    className="bg-primaryColor text-white px-6 py-2 rounded hover:opacity-90 transition"
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className="mt-6">
            <HeaderPath title="News & Blogs" path="/blogs" showSearchBar={false} />

            <div className="pb-4 mt-4 md:pb-6 lg:pb-20 px-4 md:px-8 lg:px-12 xl:px-16">
                {/* Featured */}
                <div className="bg-pattern mb-12">
                    <h3 className="text-primary text-2xl lg:text-3xl xl:text-4xl mb-4">Featured Articles</h3>

                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        spaceBetween={0}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            1024: { slidesPerView: 1 },
                        }}
                    >
                        {blogs.slice(1, 4).map((blog) => (
                            <SwiperSlide key={blog.id} className="pb-8">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6" data-aos="fade-up">
                                    <div className="md:max-h-[80%]" data-aos="zoom-in">
                                        <Image
                                            src={blog.image}
                                            alt={blog.title}
                                            width={600}
                                            height={400}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                            onError={handleImageError}
                                        />
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between text-sm text-gray-500 font-medium">
                                            <span className="px-2 py-1 rounded-full border border-gray-300">Blogs</span>
                                            <span>{formatMonthDate(blog.created_at)}</span>
                                        </div>
                                        <h2 className="mt-4 text-gray-800 text-xl lg:text-3xl font-light">
                                            {blog.title}
                                        </h2>
                                        <p className="mt-4 text-[#5b7e95] font-light text-base lg:text-lg line-clamp-6">
                                            {blog.content}
                                        </p>
                                        <Link href={`/blogs/${blog.slug}`} className="mt-6 inline-flex items-center text-primaryColor">
                                            <span className="text-lg">Explore More</span>
                                            <ArrowRight01Icon className="ml-2" size={24} />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Blog Grid */}
                <h3 className="text-primary mb-6 text-2xl lg:text-3xl">Estheva Polyclinic Posts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <div key={blog.id} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                width={400}
                                height={300}
                                className="object-cover w-full h-[300px]"
                                loading="lazy"
                                onError={handleImageError}
                            />
                            <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                                <span className="px-2 py-1 rounded-full border border-gray-300">Blogs</span>
                                <span>{formatMonthDate(blog.created_at)}</span>
                            </div>
                            <h2 className="mt-4 text-gray-800 text-xl font-light">{blog.title}</h2>
                            <p className="mt-4 text-[#5b7e95] font-light text-base line-clamp-3">
                                {blog.content}
                            </p>
                            <Link href={`/blogs/${blog.slug}`} className="mt-4 inline-flex items-center text-primaryColor">
                                <span className="text-lg">Explore More</span>
                                <ArrowRight01Icon className="ml-2" size={24} />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Load More */}
                {nextPageUrl && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => {
                                setLoadingMore(true);
                                fetchBlogs(nextPageUrl, true);
                            }}
                            disabled={loadingMore}
                            className="px-6 py-3 bg-primaryColor text-white rounded-lg hover:opacity-90 transition"
                        >
                            {loadingMore ? "Loading..." : "Load More"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blogs;
