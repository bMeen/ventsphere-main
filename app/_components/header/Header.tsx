import Image from "next/image";
import Logo from "@/public/images/Logo.svg";
import Link from "next/link";
import Button from "../Button";
import Container from "../Container";

const navBar: string[] = ["Service", "About us", "Benefits", "FAQ?"];

function Header() {
  return (
    <header className="p-4">
      <Container className="flex items-center gap-20">
        <Link href="/">
          <Image src={Logo} alt="Logo" />
        </Link>

        <nav className="flex items-center flex-1 justify-between">
          <ul className="flex space-x-11 text-space-cadet">
            {navBar.map((nav) => (
              <Link href={`#${nav}`} key={nav}>
                <li className="font-medium text-base">{nav}</li>
              </Link>
            ))}
          </ul>

          <div className="flex gap-2">
            <Button type="tertiary">Book a Strategy Call</Button>
            <Button type="primary">Partner with Us</Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
