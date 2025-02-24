import AboutUs from "@/components/landing/AboutUs";
import Banner from "@/components/landing/Banner";
import Blogs from "@/components/landing/Blogs";
import Consultation from "@/components/landing/Consultation";
import ExploreWhatWeDo from "@/components/landing/ExploreWhatWeDo";
import Faq from "@/components/landing/Faq";
import GoogleMapComponent from "@/components/landing/Location";
import OurTreatments from "@/components/landing/OurTreatments";
import Testimonials from "@/components/landing/Testimonials";
import TopRatedTreatments from "@/components/landing/TopRatedTreatments";
import Treatments from "@/components/landing/Treatments";
import { checkSession } from "@/lib/utils";


export default async function Home() {
  const sessionExists = await checkSession();

  return (
    <div>
      <Banner />
      {/* <TopRatedTreatments session={sessionExists} /> */}
      <Treatments />
      <OurTreatments />
      <ExploreWhatWeDo session={sessionExists} />

      <AboutUs />
      {/* <Consultation /> */}

      <Testimonials />
      <Faq />
      <Blogs />
      <GoogleMapComponent />
    </div>
  );
}
