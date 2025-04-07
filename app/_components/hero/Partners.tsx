import Zippo from "@/public/images/Zippo.svg";
import Grammarly from "@/public/images/grammarly.svg";
import Goodleap from "@/public/images/goodleap.svg";
import Google from "@/public/images/google.svg";
import Loom from "@/public/images/loom.svg";
import Image from "next/image";
/* import a2 from "/public/images/decor-(2).svg";
import a3 from "/public/images/decor-(3).svg";
import a4 from "/public/images/decor-(4).svg";
import a5 from "/public/images/decor-(5).svg";
import a6 from "/public/images/hero-decor-1.svg";
import a7 from "/public/images/hero-decor-2.svg"; */

function Partners() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-[77px] lg:pb-[86px] lg:pt-[94px] py-9">
      <p>
        Trusted Partnership <br /> with 100+ company’s
      </p>

      <div className="flex space-x-7 overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:flex-1 md:justify-between md:w-full">
        <Image src={Zippo} alt="partner-logo" />
        <Image src={Grammarly} alt="partner-logo" />
        <Image src={Goodleap} alt="partner-logo" />
        <Image src={Google} alt="partner-logo" />
        <Image src={Loom} alt="partner-logo" />
        {/*   <Image src={a6} alt="partner-logo" />
        <Image src={a2} alt="partner-logo" />
        <Image src={a3} alt="partner-logo" />
        <Image src={a7} alt="partner-logo" />
         <Image src={a4} alt="partner-logo" />
        <Image src={a5} alt="partner-logo" /> */}
      </div>
    </div>
  );
}

export default Partners;
