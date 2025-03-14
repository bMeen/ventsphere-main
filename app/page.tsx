import AboutUs from "./_components/about/AboutUs";
import Benefit from "./_components/benefits/Benefit";
import Hero from "./_components/hero/Hero";
import Services from "./_components/services/Services";
import Testimonials from "./_components/testimonials/Testimonials";

function Page() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Benefit />
      <Testimonials />
    </>
  );
}

export default Page;
