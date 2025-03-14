import Button from "../Button";
import Container from "../Container";
import Image from "next/image";
import Image1 from "@/public/images/benefit-1.svg";
import Image2 from "@/public/images/benefit-2.svg";

function Benefit() {
  return (
    <section id="Benefits" className="py-44 px-4">
      <Container>
        <div className="grid grid-cols-6 gap-y-64 gap-x-32">
          <div className="col-span-3">
            <h2 className="mb-8">Unlocking Potential for Ambitious Startups</h2>
            <p className="mb-12 max-w-[28.5rem] text-[17px]">
              We empower startups with essential resources and guidance to
              thrive. Our tailored support provides not only capital but also
              strategic insights, mentorship, and access to a vast network of
              industry experts.
            </p>
            <Button type="primary">Partner with Us</Button>
          </div>
          <div className="col-span-3 relative h-[415px]  benefit-img">
            <Image
              src={Image1}
              alt="Benefit Image"
              fill
              className="rounded-2xl object-cover z-20"
            />
          </div>
          <div className="col-span-3 relative h-[415px]  benefit-img">
            <Image
              src={Image2}
              alt="Benefit Image"
              fill
              className="rounded-2xl object-cover z-20"
            />
          </div>
          <div className="col-span-3">
            <h2 className="mb-8">Partner with seasoned professionals</h2>
            <p className="mb-12 max-w-[28.5rem] text-[17px]">
              We bring extensive industry experience and insights. Our team is
              dedicated to providing you with tailored advice and mentorship,
              ensuring you navigate challenges effectively and capitalize on
              opportunities to drive your startup&apos;s success.
            </p>
            <Button type="primary">Partner with Us</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Benefit;
