"use client"
import './carousel.css';
import React, { useState, useRef, useEffect } from "react";
import { ArrowLeft01Icon, ArrowRight01Icon } from 'hugeicons-react';

const data = [
    {
        author: "ESTHEVA",
        title: "Endermology",
        topic: "MASSAGE",
        des: "Endermology is a cutting-edge technology that uses mechanical rollers and gentle suction to stimulate the skin and underlying tissues. This non-invasive treatment targets problem areas, such as thighs, buttocks, abdomen, and arms, to break down stubborn fat cells, improve circulation, and enhance lymphatic drainage.",
        img: "https://jadoreinstytut.com/wp-content/uploads/2019/10/efekty-endermologii-768x512.jpg",
    },
    {
        author: "ESTHEVA",
        title: "Fat reduction Injections for Body",
        topic: "BEAUTY",
        des: "Fat reduction injections, offer a non-surgical approach to help you achieve a more sculpted and contoured appearance. These injections are designed to target localized fat deposits in areas like the abdomen, thighs, or love handles, where exercise and diet may not provide the desired results.",
        img: "https://images.squarespace-cdn.com/content/v1/61af7c40170a5d7dd8863ff2/6ebb4a14-edef-4bd0-a2b3-340166dce8cb/Aesthetician-performing-fat-dissolving--treatment.jpg?format=1500w",
    },
    {
        author: "ESTHEVA",
        title: "Emerald Lipo Laser",
        topic: "HEALTH",
        des: "Embark on a transformative journey with Emerald Lipo Laser, a groundbreaking technology redefining the landscape of non-invasive and painless fat tissue dissolution. Say goodbye to stubborn fat through an advanced and innovative approach that sets the standard for effective body contouring.",
        img: "https://www.getthegloss.com/wp-content/uploads/2024/07/9cada7b0-9b2e-11ec-af5d-9d314eed0cf6-emerald-laser-aether-clinic.jpg",
    },
    {
        author: "ESTHEVA",
        title: "Dermal Filler - Neauvia 1ml",
        topic: "Beauty",
        des: "Dermal filler treatments involve the precise artistry of specialized fillers to breathe new life into and redefine various facial regions, including cheeks, jawlines, temples, and beyond.  At Estheva Polyclinic, your welfare and contentment reign supreme. We use FDA-approved, top-tier dermal fillers celebrated for their extraordinary outcomes. Typically, these fillers are comprised of hyaluronic acid, a naturally occurring essence within the body that imbues hydration, volume, and structure to the skin.",
        img: "https://www.medicadepot.com/wp-content/uploads/2024/10/Potential-Side-Effects-of-Neauvia-Fillers.webp",
    },
]

const News = () => {
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
                        <img src={item.img} className='w-full h-full object-cover' />
                        <div className='content'>
                            {/* <div className='author'>{item.author}</div> */}
                            <div className='title'>{item.title}</div>
                            <div className='topic'>{item.topic}</div>
                            <div className='des max-w-[400px] line-clamp-3'>
                                {item.des}

                            </div>
                            <div className='buttons' >
                                <button className='bg-white rounded-sm text-primary'>Details</button>

                            </div>

                        </div>

                    </div>))}
            </div>

            {/* Thumbnail */}

            <div className='thumbnail' ref={thumbnailRef}>
                {sliderItems.map((item, index) => (
                    <div className='item' key={index}>
                        <img src={item.img} />
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

export default News

