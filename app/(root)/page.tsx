"use client"
import AboutUs from "@/components/common/AboutUs";
import Banner from "@/components/common/Banner";
import Blogs from "@/components/common/Blogs";
import Consultation from "@/components/common/Consultation";
import ExploreWhatWeDo from "@/components/common/ExploreWhatWeDo";
import Faq from "@/components/common/Faq";
import Hero from "@/components/common/Hero";
import GoogleMapComponent from "@/components/common/Location";
import OurTreatments from "@/components/common/OurTreatments";
import PopularTreatments from "@/components/common/PopularTreatments";
import Testimonials from "@/components/common/Testimonials";
import TopRatedTreatments from "@/components/common/TopRatedTreatments";
import { useEffect } from "react";


export default function Home() {


  return (
    <div>
      {/* Hero Section */}
      {/* <Hero data-aos="fade-in" /> */}

      {/* Banner Section */}
      <Banner />

      {/* Top Rated Treatments */}
      <TopRatedTreatments />

      {/* Explore What We Do */}
      <ExploreWhatWeDo />

      {/* Popular Treatments */}
      {/* <PopularTreatments data-aos="fade-left" /> */}

      {/* Our Treatments */}
      <OurTreatments />

      {/* About Us */}
      <AboutUs />

      {/* Consultation Section */}
      <Consultation />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <Faq />

      {/* Blogs */}
      <Blogs />

      {/* Google Map Section */}
      <GoogleMapComponent />


      {/* Scroll to Top */}

    </div>
  );
}
