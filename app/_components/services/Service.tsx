import { ContentType } from "@/app/_lib/types";
import Image from "next/image";

const services: ContentType[] = [
  {
    icon: "/icons/money-send-circle.svg",
    title: "Seed Funding",
    description:
      "We provide initial capital to early-stage startups, helping them turn innovative ideas into viable businesses.",
  },
  {
    icon: "/icons/school-tie.svg",
    title: "Mentorship and Coaching",
    description:
      "We provide flexible funding options designed to match the unique needs of your startup, helping you grow at every stage.",
  },
  {
    icon: "/icons/affiliate.svg",
    title: "Post-Investment Support",
    description:
      "We provide flexible funding options designed to match the unique needs of your startup, helping you grow at every stage.",
  },
  {
    icon: "/icons/agreement-01.svg",
    title: "Strategic Partnerships",
    description:
      "Access our extensive network to forge partnerships that can open doors and drive meaningful growth for your business.",
  },
];

function Service() {
  return (
    <ul className="grid md:grid-cols-2 gap-6 lg:gap-11">
      {services.map((item) => (
        <li
          key={item.title}
          className="border-[1px] border-cultured bg-white px-5 py-7 lg:p-10 rounded-2xl md:flex md:gap-5 lg:gap-10 items-start space-y-2 md:space-y-0"
        >
          <div className="rounded-full p-[0.625rem] bg-rich-black inline-block">
            <Image src={item.icon} alt="icon" width={18} height={19} />
          </div>
          <div className="space-y-2 lg:space-y-6">
            <h6 className="text-rich-black font-medium">{item.title}</h6>
            <p className="md:max-w-[24.75rem]">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Service;
