"use client";
import Container from "../Container";
import Tag from "../Tag";
import Content from "./Content";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="About us"
      className="py-20 lg:py-40 px-4"
    >
      <Container>
        <div className="w-full lg:w-[560px] lg:mx-auto text-center lg:mb-28 mb-14 space-y-4 lg:space-y-8">
          <Tag>WHO WE ARE</Tag>
          <h2>Your Dedicated Partner in Startup Success</h2>
        </div>
        <Content />
      </Container>
    </motion.section>
  );
}

export default AboutUs;
