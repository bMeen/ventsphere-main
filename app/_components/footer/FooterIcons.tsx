import facebook from "@/public/icons/facebook.svg";
import linkedIn from "@/public/icons/linkedIn.svg";
import Instagram from "@/public/icons/instagram.svg";
import discord from "@/public/icons/discord.svg";
import Image from "next/image";

function FooterIcons() {
  return (
    <div className="flex justify-between w-36 mt-auto">
      <Image src={linkedIn} alt="LinkedIn icon" />
      <Image src={discord} alt="Discord icon" />
      <Image src={facebook} alt="Facebook icon" />
      <Image src={Instagram} alt="Instagram icon" />
    </div>
  );
}

export default FooterIcons;
