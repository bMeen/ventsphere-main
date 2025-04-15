"use client";

import { Faq } from "@/app/_lib/types";
import Image from "next/image";
import Plus from "@/public/icons/ic_round-plus.svg";
import Minus from "@/public/icons/ic_round-minus.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const faqs: Faq[] = [
  {
    question: "What types of startups do you work with?",
    answer:
      "We work with innovative, scalable startups across various industries, focusing on growth and long-term sustainability.",
  },
  {
    question: "How can I apply for funding?",
    answer:
      "You can apply through our website by submitting your pitch and relevant business details for evaluation.",
  },
  {
    question: "What support do you provide after funding?",
    answer:
      "We offer mentorship, strategic guidance, and access to our network of industry experts to help you grow your business successfully.",
  },
  {
    question: "How long does the funding process take?",
    answer:
      "The process typically takes 4-6 weeks from application to decision, depending on evaluation and due diligence.",
  },
];

type QuestionProps = {
  item: Faq;
};

function Questions() {
  return (
    <ul className="space-y-4">
      {faqs.map((item, i) => (
        <Question item={item} key={i} />
      ))}
    </ul>
  );
}

function Question({ item }: QuestionProps) {
  const [isOpen, setIsopen] = useState(false);
  const toggle = () => setIsopen((open) => !open);
  const src = isOpen ? Minus : Plus;

  return (
    <li className="p-5 lg:p-7 bg-white border-[1px] border-cultured rounded-2xl flex gap-2 lg:gap-7 items-start">
      <div onClick={toggle} className="cursor-pointer w-10">
        <Image src={src} alt="icon" />
      </div>
      <div className="self-center">
        <p className="font-medium text-space-cadet">{item.question}</p>
        <AnimatePresence>
          {isOpen && (
            <motion.p
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.1 }}
              className="lg:pt-5 pt-3 mt-3  border-t lg:mt-7 lg:w-[484px]"
            >
              {item.answer}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </li>
  );
}

export default Questions;
