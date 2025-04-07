import arrow from "@/public/icons/stash_arrow-up-duotone.svg";
import arrowhite from "@/public/icons/stash_arrow-up-duotone-white.svg";
import Image from "next/image";
import Link from "next/link";

type ButtonType = "primary" | "secondary" | "tertiary";

type ButtonProps = {
  type: ButtonType;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const base = "flex rounded-xl py-4 px-6 text-sm font-medium";

const styles = {
  primary: base + " bg-space-cadet text-white hover:bg-space-cadet/95",
  secondary:
    base + " bg-green-yellow text-space-cadet hover:bg-green-yellow-/95",
  tertiary: base + " text-space-cadet hover:bg-isabelline",
};

function Button({ type, className, children, onClick }: ButtonProps) {
  return (
    <Link href="/contact">
      <button className={`${styles[type]} ${className}`} onClick={onClick}>
        {children}
        {(type === "secondary" || type === "tertiary") && (
          <Image src={arrow} alt="icon" />
        )}
        {type === "primary" && (
          <Image src={arrowhite} alt="icon" className="w-5 fo" />
        )}
      </button>
    </Link>
  );
}

export default Button;
