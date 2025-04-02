import Link from "next/link";
import Container from "../Container";
import FooterIcons from "./FooterIcons";
import Logo from "@/public/images/Logo.svg";
import Image from "next/image";
import FooterNav from "./FooterNav";

function Footer() {
  return (
    <footer className="px-4 border-b-[1px] pt-14   border-cultured pb-24">
      <Container>
        <div className="grid grid-cols-[4fr_1fr_1fr_1fr] gap-28">
          <section className="w-[275px] flex flex-col">
            <div className="space-y-8">
              <Link href="/">
                <Image src={Logo} alt="Logo" />
              </Link>
              <p>
                Empowering visionary startups to reach new heights through
                funding and support.
              </p>
            </div>
            <FooterIcons />
          </section>

          <FooterNav
            className="span-2"
            heading="Quick Links"
            lists={[
              "Our Service",
              "Benefit Offered",
              "Mission & Vision",
              "FAQ",
            ]}
          />
          <FooterNav
            heading="Partnerships"
            lists={[
              "Seed Funding",
              "Investor Partners",
              "Mentorship",
              "Partnership",
            ]}
          />
          <FooterNav
            heading="Contact Us"
            lists={[
              "+1 (123) 456-7890",
              "contact@ventsphere.com",
              "Location Map*",
            ]}
          />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
