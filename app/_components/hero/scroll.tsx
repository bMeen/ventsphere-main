import Zippo from "@/public/images/Zippo.svg";
import Grammarly from "@/public/images/grammarly.svg";
import Goodleap from "@/public/images/goodleap.svg";
import Google from "@/public/images/google.svg";
import Loom from "@/public/images/loom.svg";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [Zippo, Grammarly, Goodleap, Google, Loom];

function Scroll() {
  return (
    <div className="w-full max-w-[1050px] overflow-hidden mask-fade-horizontal">
      <motion.div
        animate={{ x: "calc(-50% - 53.5px)" }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        className="flex gap-[107px] w-max"
      >
        {[...logos, ...logos].map((logo, i) => (
          <Image key={i} src={logo} alt="partner-logo" />
        ))}
      </motion.div>
    </div>
  );
}

export default Scroll;
