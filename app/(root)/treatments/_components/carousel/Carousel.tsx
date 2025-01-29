"use client";
import styles from './carousel.module.css';
import React, { useState, useRef, useEffect } from "react";

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
    const [sliderItems, setSliderItems] = useState(data);
    const [activeIndex, setActiveIndex] = useState(0);

    const carouselRef = useRef<HTMLDivElement | null>(null);
    const timeRunning = 300; // Animation duration
    const timeAutoNext = 7000; // Auto-move delay

    const moveNext = () => {
        const nextIndex = (activeIndex + 1) % sliderItems.length;
        setActiveIndex(nextIndex);

        if (carouselRef.current) {
            carouselRef.current.classList.add(`${styles.next}`);
            setTimeout(() => {
                carouselRef.current?.classList.remove(`${styles.next}`);
            }, timeRunning);
        }
    };

    const movePrev = () => {
        const prevIndex = (activeIndex - 1 + sliderItems.length) % sliderItems.length;
        setActiveIndex(prevIndex);

        if (carouselRef.current) {
            carouselRef.current.classList.add(`${styles.prev}`);
            setTimeout(() => {
                carouselRef.current?.classList.remove(`${styles.prev}`);
            }, timeRunning);
        }
    };

    const goToSlide = (index: number) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        const autoNext = setInterval(() => {
            moveNext();
        }, timeAutoNext);

        return () => clearInterval(autoNext);
    }, [activeIndex]);

    return (
        <div className={`${styles.carousel}`} ref={carouselRef}>
            {/* Main Slider */}
            <div className={`${styles.list}`}>
                {sliderItems.map((item, index) => (
                    <div
                        className={`${styles.item} ${index === activeIndex ? "active" : ""}`}
                        key={index}
                    >
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                        <div className={`${styles.content}`}>
                            <div className={`${styles.title}`}>{item.title}</div>
                            <div className="topic">{item.topic}</div>
                            <div className="des max-w-[400px] line-clamp-3">{item.des}</div>
                            <div className="buttons">
                                <button className="bg-white rounded-sm text-primary">Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Thumbnails */}
            <div className="thumbnail">
                {sliderItems.map((item, index) => (
                    <div
                        key={index}
                        className={`thumbnail-item ${index === activeIndex ? "active-thumbnail" : ""
                            }`}
                        onClick={() => goToSlide(index)}
                    >
                        <img src={item.img} alt={`Thumbnail ${index + 1}`} />
                    </div>
                ))}
            </div>

            {/* Arrows */}
            <div className="arrows">
                <button id="prev" onClick={movePrev} aria-label="Previous Slide">
                    {"<"}
                </button>
                <button id="next" onClick={moveNext} aria-label="Next Slide">
                    {">"}
                </button>
            </div>
        </div>
    );
};

export default News;
