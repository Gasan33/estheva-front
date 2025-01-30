"use client";
import Image from 'next/image';
import styles from './carousel.module.css';
import React, { useState, useRef, useEffect } from "react";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ArrowRight01Icon } from 'hugeicons-react';
import { popularTreatments } from '@/constants';





const Carousel: React.FC = () => {
  const [sliderItems, setSliderItems] = useState<Treatment[]>(popularTreatments);
  const [thumbnails, setThumbnails] = useState<string[]>([
    '/img1.jpg',
    '/img2.jpg',
    '/img3.jpg',
    '/img4.jpg',
  ]);

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const thumbnailRef = useRef<HTMLDivElement | null>(null);

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
        carouselRef.current?.classList.remove("next");
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
        carouselRef.current?.classList.remove("prev");
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
    <div className={styles.carousel} ref={carouselRef}>
      <div className={styles.list} ref={sliderRef}>
        {sliderItems.map((item, index) => (
          <div className={styles.item} key={index}>
            <Image
              src={item.img[0]}
              alt={item.name}
              className='w-full h-full object-cover'
              fill
              sizes='400'
            />

            <div className={styles.content}>
              <div className=' w-[100%]  mb-8'>
                <div className={`${styles.title} line-clamp-2`}>{item.name}</div>
                {/* <div className={styles.topic}>{item.topic}</div> */}
                <div className={`${styles.des} line-clamp-5`}>{item.desc}</div>
              </div>

              <div >
                <Button className='bg-white flex rounded-full gap-4 px-8 py-6 text-lg text-primary-400'>
                  learn more
                  <ArrowRight01Icon className='text-primaryColor w-14 h-14 text-4xl' width={32} size={32} height={32} />
                </Button>
                {/* <Button className='rounded-sm'>BOOK NOW!</Button> */}
              </div>

            </div>

          </div>
        ))}
      </div>

      {/* <div className={styles.thumbnail} ref={thumbnailRef}>
        {sliderItems.map((item, index) => (
          <div className='item' key={index}>
            <Image
              src={item.img}
              alt={item.name}
              width={100}
              height={100}
            />
            <div className={styles.content}>
              <div className={styles.title}>{item.name}</div>
              <div className={styles.description}>{item.desc}</div>
            </div>
          </div>
        ))}
      </div> */}

      <div className={styles.arrows}>
        <button id={styles.prev} onClick={movePrev}>{"<"}</button>
        <button id={styles.next} onClick={moveNext}>{">"}</button>
      </div>

      <div className={styles.time}></div>
    </div>
  );
};

export default Carousel;
