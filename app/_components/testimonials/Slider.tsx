import Tag from "../Tag";
import Image from "next/image";
import quote from "@/public/images/Quote.svg";
import decor from "@/public/images/testimonial-decor.svg";
import testimonial1 from "@/public/images/Testimonial 1.svg";
import testimonial2 from "@/public/images/Testimonial 2.svg";
import testimonial3 from "@/public/images/Testimonial 3.svg";
import testimonial4 from "@/public/images/Testimonial 4.svg";
import { Testimonial } from "@/app/_lib/types";

const individuals: Testimonial<string>[] = [
  {
    image: testimonial1,
    type: "space-cadet",
    text: " “ Ventsphere’s support has been pivotal, providing both the resources and expertise needed to scale our business. ’’ ",
    name: "Henry Orton",
    position: "CEO of Daganox",
  },
  {
    image: testimonial2,
    type: "rich-black",
    text: " “ Working with Ventsphere gave us the confidence and tools to navigate our industry and achieve our goals. ’’ ",
    name: "Henry Orton",
    position: "CEO of Jobber",
  },
  {
    image: testimonial3,
    type: "dark-purple",
    text: " “ Thanks to Ventsphere, we transformed our vision into reality with unmatched guidance and support. ’’ ",
    name: "Henry Orton",
    position: "CEO of Logoi",
  },
  {
    image: testimonial4,
    type: "space-cadet",
    text: " “ The mentorship and funding from Ventsphere made all the difference in taking our startup to the next level. ’’ ",
    name: "Henry Orton",
    position: "CEO of Infinite",
  },
];

const backgroundClass = {
  "space-cadet": " bg-space-cadet",
  "rich-black": " bg-rich-black",
  "dark-purple": " bg-dark-purple",
};

function Slider() {
  return (
    <div className="flex space-x-4 lg:space-x-7 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
      <div className="p-6 lg:p-10 max-w-80 h-80  lg:max-w-[533px] lg:h-[541px] relative bg-[url('/images/testimonial.svg')] bg-cover bg-center rounded-2xl snap-start flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90 rounded-2xl z-0"></div>
        <div className="relative flex flex-col justify-between lg:space-y-52 z-20 h-full lg:h-0">
          <Image src={quote} alt="quote icon" className="block" />
          <div className="space-y-4 lg:space-y-8 text-white">
            <Tag className="text-white/50">WORD FROM FOUNDER</Tag>
            <p className="lg:text-2xl">
              “ We’re committed to empowering startups with the funding and
              guidance they need to succeed.”
            </p>
            <p>— Augustine Ifenna</p>
          </div>
        </div>
      </div>

      {individuals.map((item) => (
        <div
          key={item.type}
          className={`p-6 lg:px-10 lg:py-9 ${
            backgroundClass[item.type]
          } rounded-2xl h-80  flex flex-col justify-between text-white max-w-80 lg:h-[541px] lg:max-w-[437px] snap-start flex-shrink-0`}
        >
          <Image src={decor} alt="svg" className="w-full" />
          <p className="lg:text-2xl font-medium">{item.text}</p>

          <div className="flex items-center gap-5">
            <Image src={item.image} alt="profile-image" />
            <div>
              <p className="font-medium text-sm lg:text-base">{item.name}</p>
              <p className="text-white/50 text-xs lg:text-sm font-normal">
                {item.position}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slider;
