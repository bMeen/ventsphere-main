import AboutUs from "./_components/about/AboutUs";
import Benefit from "./_components/benefits/Benefit";
import CallToAction from "./_components/cta/CallToAction";
import FAQ from "./_components/faqs/FAQ";
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
      <FAQ />
      <CallToAction />
    </>
  );
}

export default Page;
