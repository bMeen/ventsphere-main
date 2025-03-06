import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import Partners from "./Partners";
import HeroImg from "@/public/images/hero.svg";

function Hero() {
  return (
    <section className="bg-isabelline pt-14  px-4">
      <Container>
        <div className="grid grid-cols-2 gap-16 mb-4  items-center">
          <div>
            <h1>Providing Support for Startups</h1>
            <p className="w-[431px] mb-12 text-base">
              Empowering visionary entrepreneurs with the capital and support
              needed to transform innovative ideas into successful businesses.
            </p>
            <div className="flex gap-6">
              <Button type="primary">Partner with Us</Button>
              <Button type="secondary">Book a Strategy Call</Button>
            </div>
          </div>

          <div className="px-[48px] py-[41px] ">
            <div className="aspect-square relative hero-img ">
              <Image
                src="/images/hero.svg"
                alt="Hero Image"
                fill
                className="object-cover rounded-2xl z-20"
              />
            </div>
          </div>
        </div>
        <Partners />
      </Container>
    </section>
  );
}

export default Hero;
//w-full max-w-[577px] h-[525px]
