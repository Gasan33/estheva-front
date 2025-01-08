import Hero from '../components/common/Hero';
import OurServices from '../components/common/OurServices';
import AboutUs from '../components/common/AboutUs';
import Blogs from '../components/common/Blogs';
import Consultation from '../components/common/Consultation';
import Testimonials from '../components/common/Testimonials';
import PopularServices from '../components/common/PopularServices';
import Faq from '../components/common/Faq';
import GoogleMapComponent from '../components/common/Location';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estheva Polyclinic",
  description: "Welocme to Estheva Ployclinic, Where precision meets beauty and well-...",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularServices />
      <OurServices />
      <AboutUs />
      <Consultation />
      <Testimonials />
      <Faq />
      <Blogs />
      <GoogleMapComponent />
    </div>
  );
}
