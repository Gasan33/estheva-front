import AboutUs from "@/components/landing/AboutUs";
import Banner from "@/components/landing/Banner";
import Blogs from "@/components/landing/Blogs";
import Consultation from "@/components/landing/Consultation";
import ExploreWhatWeDo from "@/components/landing/ExploreWhatWeDo";
import Faq from "@/components/landing/Faq";
import GoogleMapComponent from "@/components/landing/Location";
import OurTreatments from "@/components/landing/OurTreatments";
import Testimonials from "@/components/landing/Testimonials";


export default function Home() {

  return (
    <div>
      <Banner />
      {/* <TopRatedTreatments session={sessionExists} /> */}
      {/* <Treatments /> */}
      <ExploreWhatWeDo />

      <OurTreatments />
      <Consultation />
      <AboutUs />


      <Testimonials />
      <Faq />
      <Blogs />
      <GoogleMapComponent />
    </div>
  );
}
