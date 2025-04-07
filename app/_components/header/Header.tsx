"use client";

import Image from "next/image";
import Logo from "@/public/images/Logo.svg";
import Link from "next/link";
import Button from "../Button";
import Container from "../Container";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navBar: string[] = ["Service", "About us", "Benefits", "FAQ?"];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((open) => !open);

  return (
    <header className="relative p-4">
      <Container className="flex items-center justify-between md:gap-20">
        <Link href="/">
          <Image src={Logo} alt="Logo" />
        </Link>

        <div className="lg:hidden" onClick={toggle}>
          {isOpen ? <X /> : <Menu />}
        </div>

        <nav
          className={`lg:hidden absolute top-[56px]  transform transition-transform duration-700 ease-in-out left-0 bg-white z-30 w-full py-4  ${
            isOpen ? "translate-y-0" : "-translate-y-[calc(100%+56px)]"
          }`}
        >
          <ul className="px-4 text-center flex flex-col gap-3 mb-4">
            {navBar.map((nav) => (
              <Link href={`#${nav}`} key={nav}>
                <li className="text-base" onClick={toggle}>
                  {nav}
                </li>
              </Link>
            ))}
          </ul>

          <div className="px-4 mx-auto">
            <Button type="tertiary" className="mx-auto" onClick={toggle}>
              Book a Strategy Call
            </Button>
            <Button type="primary" className="mx-auto" onClick={toggle}>
              Partner with Us
            </Button>
          </div>
        </nav>

        <nav className="hidden lg:flex items-center flex-1 justify-between">
          <ul
            className="flex space-x-11 text-space-cadet"
            style={{ fontFamily: "ClashGrotesk-Medium" }}
          >
            {navBar.map((nav) => (
              <Link href={`#${nav}`} key={nav}>
                <li className="text-base">{nav}</li>
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
