import AboutUs from "@/components/common/AboutUs";
import Banner from "@/components/common/Banner";
import Blogs from "@/components/common/Blogs";
import Consultation from "@/components/common/Consultation";
import ExploreWhatWeDo from "@/components/common/ExploreWhatWeDo";
import Faq from "@/components/common/Faq";
import GoogleMapComponent from "@/components/common/Location";
import OurTreatments from "@/components/common/OurTreatments";
import Testimonials from "@/components/common/Testimonials";


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
