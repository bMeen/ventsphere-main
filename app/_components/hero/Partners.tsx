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
    <div className="flex items-center gap-[77px] pb-[86px] pt-[94px]">
      <p>
        Trusted Partnership <br /> with 100+ company’s
      </p>

      <div className="flex flex-1 justify-between flex-wrap">
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
