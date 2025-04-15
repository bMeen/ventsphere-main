"use client";

import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import Partners from "./Partners";
import HeroImg from "@/public/images/rect-2.jpg";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-isabelline pt-14 lg:pt-28 px-4"
    >
      <Container>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-4 lg:items-center">
          <div className="text-center md:text-left max-w-md mx-auto lg:max-w-full lg:mx-0">
            <h1 className="">Providing Support for Startups</h1>
            <p className="lg:w-[431px] mb-12">
              Empowering visionary entrepreneurs with the capital and support
              needed to transform innovative ideas into successful businesses.
            </p>
            <div className="flex flex-col items-center md:items-start gap-3 lg:flex-row lg:gap-6">
              <Button type="primary">Partner with Us</Button>
              <Button type="secondary">Book a Strategy Call</Button>
            </div>
          </div>

          <div className="h-[315px] lg:h-[525px] relative hero-img row-start-1 md:col-start-2 md:max-w-md lg:max-w-full w-full">
            <Image
              src={HeroImg}
              alt="Hero Image"
              fill
              placeholder="blur"
              className="object-cover object-top rounded-2xl z-20"
            />
          </div>
        </div>
        <Partners />
      </Container>
    </motion.section>
  );
}

export default Hero;
//w-full max-w-[577px] h-[525px]
