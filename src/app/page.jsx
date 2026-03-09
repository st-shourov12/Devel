import Banner from "@/component/Home/Banner";
import CTABanner from "@/component/Home/CTABanner";
import Features from "@/component/Home/Features";
import LatestCourse from "@/component/Home/LatestCourse";
import Testimonials from "@/component/Home/Testimonials";



export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <LatestCourse></LatestCourse>
      <Features></Features>
      <Testimonials></Testimonials>
      <CTABanner></CTABanner>
      
    </div>
  
  );
}
