"use client"
import Image from 'next/image';
import '../blogs.css';
import React, { useState, useRef, useEffect } from "react";
// import { ArrowLeft01Icon, ArrowRight01Icon } from 'hugeicons-react';

const data = [
    {
        author: "ESTHEVA",
        title: "Lymphatic drainage",
        topic: "MASSAGE",
        des: "Lymphatic drainage massage is more than just a relaxing treatment—it's a crucial part of maintaining overall well-being and a healthy body shape. At Estheva Polyclinic, we incorporate lymphatic drainage into our weight loss programs to help the body naturally detoxify and eliminate waste.",
        img: "https://estheva-polyclinic.com/cdn/shop/articles/Want_perfect_skin_17.png",
    },
    {
        author: "ESTHEVA",
        title: "IV Drip",
        topic: "BEAUTY",
        des: "IV Drip Therapy has gained significant attention in the wellness industry, especially in the UAE. Backed by recent medical research, IV Drips effectively deliver essential nutrients, antioxidants, and hydration directly into the bloodstream, providing quick and efficient benefits.",
        img: "https://estheva-polyclinic.com/cdn/shop/articles/9.png",
    },
    {
        author: "ESTHEVA",
        title: "Medical Laboratory",
        topic: "HEALTH",
        des: "As we age, it becomes crucial to monitor our health proactively. At Estheva Polyclinic in Dubai, we recommend 10 essential medical laboratory tests everyone over 40 should consider doing once a year to maintain optimal health. These tests help detect potential health issues early and enable timely interventions.",
        img: "https://estheva-polyclinic.com/cdn/shop/articles/Want_perfect_skin_16.png",
    },
    {
        author: "ESTHEVA",
        title: "Weight Loss",
        topic: "HEALTH",
        des: "If you're searching for the best weight loss programs in Dubai, Estheva Polyclinic offers personalized solutions tailored to your unique body composition. Our weight loss journey begins with a free consultation to assess your body composition using advanced tools. Understanding your body's fat distribution, muscle mass, and metabolic rate is essential to creating an effective weight loss plan. Based on these results, our expert doctors will design a program that combines non-invasive slimming treatments for optimal fat loss.",
        img: "https://estheva-polyclinic.com/cdn/shop/articles/Want_perfect_skin_15.png",
    },
]

const Blog = () => {
    const [sliderItems, setSliderItems] = useState(data
    );
    const [thumbnails, setThumbnails] = useState([
        '/img1.jpg',
        '/img2.jpg',
        '/img4.jpg',
        '/img4.jpg',
    ]);

    const carouselRef = useRef(null);
    const sliderRef = useRef(null);
    const thumbnailRef = useRef(null);

    const timeRunning = 3000;
    const timeAutoNext = 7000;

    const moveNext = () => {
        setSliderItems((prev) => {
            const updated = [...prev.slice(1), prev[0]];
            return updated;
        });
        setThumbnails((prev) => {
            const updated = [...prev.slice(1), prev[0]];
            return updated;
        });

        if (carouselRef.current) {
            carouselRef.current.classList.add("next");
            setTimeout(() => {
                carouselRef.current.classList.remove("next");
            }, timeRunning);
        }
    };

    const movePrev = () => {
        setSliderItems((prev) => {
            const updated = [prev[prev.length - 1], ...prev.slice(0, -1)];
            return updated;
        });
        setThumbnails((prev) => {
            const updated = [prev[prev.length - 1], ...prev.slice(0, -1)];
            return updated;
        });

        if (carouselRef.current) {
            carouselRef.current.classList.add("prev");
            setTimeout(() => {
                carouselRef.current.classList.remove("prev");
            }, timeRunning);
        }
    };

    useEffect(() => {
        const autoNext = setInterval(() => {
            moveNext();
        }, timeAutoNext);

        return () => clearInterval(autoNext);
    }, [sliderItems, thumbnails]);

    return (
        <div className='carousel' ref={carouselRef}>
            <div className='list' ref={sliderRef}>
                {sliderItems.map((item, index) => (

                    <div className='item' key={index}>
                        <Image src={item.img} alt={item.title} className='w-full h-full object-cover' fill sizes='400' />
                        <div className='content'>
                            {/* <div className='author'>{item.author}</div> */}
                            <div className='title'>{item.title}</div>
                            <div className='topic'>{item.topic}</div>
                            <div className='des max-w-[400px]'>
                                {item.des}

                            </div>
                            <div className='buttons' >
                                <button className='bg-white rounded-sm text-primary'>SEE MORE</button>
                                <button className='rounded-sm'>SUBSCRIBE</button>
                            </div>

                        </div>

                    </div>))}
            </div>

            {/* Thumbnail */}

            <div className='thumbnail' ref={thumbnailRef}>
                {sliderItems.map((item, index) => (
                    <div className='item' key={index}>
                        <Image src={item.img} alt={item.title} fill sizes='400' />
                        <div className='content'>
                            <div className='title'>
                                {item.title}
                            </div>
                            <div className='description'>
                                {item.author}
                            </div>

                        </div>
                    </div>))}

            </div>
            {/*  Arrows */}
            <div className='arrows'>
                <button id="prev" onClick={movePrev}>{"<"}</button>
                <button id="next" onClick={moveNext}>{">"}</button>
            </div>

            <div className='time'></div>
        </div>
    )
}

export default Blog

