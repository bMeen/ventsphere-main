import { ContentType } from "@/app/_lib/types";
import Image from "next/image";

const backgroundClass = {
  "space-cadet": " bg-space-cadet",
  "rich-black": " bg-rich-black",
};

const content: ContentType[] = [
  {
    icon: "/icons/route-01.svg",
    title: "Our Mission",
    description:
      "Our mission is to support startups by providing not only financial investment but also strategic guidance,mentorship, and access to a robust network of industry experts",
    type: "space-cadet",
  },
  {
    icon: "/icons/idea-01.svg",
    title: "Our Vision",
    description:
      "To be the leading venture capital agency that fuels innovation and empowers entrepreneurs, creating a thriving ecosystem where visionary startups can flourish and make a lasting impact on the world.",
    type: "rich-black",
  },
];

function Content() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {content.map((item) => (
        <div
          key={item.title}
          className={`${
            item.type && backgroundClass[item.type]
          } py-12 px-6 lg:p-[3.875rem] rounded-2xl space-y-8 lg:space-y-28`}
        >
          <div className="rounded-full bg-white/10 p-4 inline-block">
            <Image src={item.icon} alt="icon" width={24} height={25} />
          </div>

          <div className="space-y-3 lg:space-y-7">
            <h5 className="text-white">{item.title}</h5>
            <p className="lg:text-lg text-white/70">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Content;
