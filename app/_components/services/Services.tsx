"use client";

import Button from "../Button";
import Container from "../Container";
import Tag from "../Tag";
import Service from "./Service";
import { motion } from "framer-motion";

function Services() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="Service"
      className="py-16 lg:py-32 bg-isabelline px-4"
    >
      <Container>
        <div className=" space-y-12  md:space-y-24 mb-16 md:mb-32">
          <div className="w-full lg:w-[560px] lg:mx-auto text-center lg:space-y-8 space-y-2">
            <Tag>What we do</Tag>
            <h2>Financial Backing You Need to Succeed</h2>
            <p className="md:w-[28.375rem] md:mx-auto">
              We understand that financial support is foundational to startup
              growth, which is why we offer:
            </p>
          </div>
          <Service />
        </div>
        <Button className="mx-auto" type="primary">
          Partner with Us
        </Button>
      </Container>
    </motion.section>
  );
}

export default Services;
