import Button from "../Button";
import Container from "../Container";
import decor1 from "@/public/images/decor-(2).svg";
import decor2 from "@/public/images/decor-(3).svg";
import decor3 from "@/public/images/hero-decor-1.svg";
import decor4 from "@/public/images/hero-decor-2.svg";
import Image from "next/image";

function CallToAction() {
  return (
    <section className="px-4 -translate-y-1/2">
      <Container className="bg-space-cadet rounded-[30px] p-10 relative">
        <Image src={decor3} alt="decor" className="absolute top-10 left-10" />
        <Image src={decor4} alt="decor" className="absolute top-10 right-10" />
        <Image
          src={decor2}
          alt="decor"
          className="absolute bottom-10 left-10"
        />
        <Image
          src={decor1}
          alt="decor"
          className="absolute bottom-10 right-10"
        />
        <div className="w-[549px] mx-auto text-center my-12">
          <h3 className="text-white">
            Let’s Partner for Your Startup Success!
          </h3>
          <p className="text-white/70">
            Join us in transforming your startup vision into reality!
          </p>

          <Button type="secondary" className="mx-auto mt-10">
            Partner with us
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default CallToAction;
