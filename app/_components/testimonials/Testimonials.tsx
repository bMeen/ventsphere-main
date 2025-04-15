"use client";

import Container from "../Container";
import Tag from "../Tag";
import Slider from "./Slider";
import { motion } from "framer-motion";

function Testimonials() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-16 lg:py-32 bg-isabelline px-4"
    >
      <Container>
        <div className="lg:w-[560px] lg:mx-auto text-center mb-16 lg:mb-32   lg:space-y-6 space-y-3">
          <Tag>TESTIMONIALS</Tag>
          <h2>Success Stories from Visionary Founders</h2>
        </div>
        <Slider />
      </Container>
    </motion.section>
  );
}

export default Testimonials;
