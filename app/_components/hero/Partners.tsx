import Zippo from "@/public/images/Zippo.svg";
import Grammarly from "@/public/images/grammarly.svg";
import Goodleap from "@/public/images/goodleap.svg";
import Google from "@/public/images/google.svg";
import Loom from "@/public/images/loom.svg";
import Image from "next/image";

function Partners() {
  return (
    <div className="flex items-center gap-[77px] py-[86px] ">
      <p>
        Trusted Partnership <br /> with 100+ company’s
      </p>

      <div className="flex flex-1 justify-between">
        <Image src={Zippo} alt="partner-logo" />
        <Image src={Grammarly} alt="partner-logo" />
        <Image src={Goodleap} alt="partner-logo" />
        <Image src={Google} alt="partner-logo" />
        <Image src={Loom} alt="partner-logo" />
      </div>
    </div>
  );
}

export default Partners;
