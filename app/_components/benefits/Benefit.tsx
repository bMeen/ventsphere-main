import Button from "../Button";
import Container from "../Container";
import Image from "next/image";
import Image1 from "@/public/images/benefit-1.svg";
import Image2 from "@/public/images/benefit-2.svg";

function Benefit() {
  return (
    <section id="Benefits" className="py-24 lg:py-44 px-4">
      <Container>
        <div className="grid md:grid-cols-6 gap-14 md:gap-y-40 lg:gap-y-64 lg:gap-x-32">
          <div className="row-start-2 md:row-start-1 md:col-span-3 text-center md:text-left">
            <h2 className="mb-4 md:mb-8">
              Unlocking Potential for Ambitious Startups
            </h2>
            <p className="mb-6 md:mb-12 max-w-[28.5rem] lg:text-[17px] mx-auto md:mx-0">
              We empower startups with essential resources and guidance to
              thrive. Our tailored support provides not only capital but also
              strategic insights, mentorship, and access to a vast network of
              industry experts.
            </p>
            <Button className="mx-auto md:mx-0" type="primary">
              Partner with Us
            </Button>
          </div>
          <div className="md:col-span-3 relative h-[315px] md:h-[394px] lg:h-[415px]  benefit-img md:max-w-md lg:max-w-full w-full">
            <Image
              src={Image1}
              priority
              alt="Benefit Image"
              fill
              className="rounded-2xl object-cover z-20"
            />
          </div>
          <div className="md:col-span-3 relative h-[315px] md:h-[394px] lg:h-[415px]  benefit-img md:max-w-md lg:max-w-full w-full">
            <Image
              src={Image2}
              priority
              alt="Benefit Image"
              fill
              className="rounded-2xl object-cover z-20"
            />
          </div>
          <div className="md:col-span-3 text-center md:text-left">
            <h2 className="mb-4 md:mb-8">
              Partner with seasoned professionals
            </h2>
            <p className="mb-6 md:mb-12 max-w-[28.5rem] lg:text-[17px] mx-auto md:mx-0">
              We bring extensive industry experience and insights. Our team is
              dedicated to providing you with tailored advice and mentorship,
              ensuring you navigate challenges effectively and capitalize on
              opportunities to drive your startup&apos;s success.
            </p>
            <Button className="mx-auto md:mx-0" type="primary">
              Partner with Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Benefit;
