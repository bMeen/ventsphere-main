"use client";

import Container from "../Container";
import Tag from "../Tag";
import Questions from "./Questions";
import { motion } from "framer-motion";

function FAQ() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="FAQ?"
      className="py-44 px-4 bg-isabelline pb-[400px]"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="lg:w-[549px] space-y-3 lg:space-y-7 text-center lg:text-left">
            <Tag>WE HAVE ANSWERS</Tag>
            <h2 className="">Frequently Asked Questions</h2>
            <div className="lg:w-[417px] lg:text-lg">
              <p className="mb-7">
                Explore the most common inquiries to learn more about how we
                support startups like yours.
              </p>

              <p>
                For more inquiries, reach us at <br />
                <span className="font-medium text-space-cadet">
                  contact@ventsphere.com.
                </span>
              </p>
            </div>
          </div>
          <Questions />
        </div>
      </Container>
    </motion.section>
  );
}

export default FAQ;
