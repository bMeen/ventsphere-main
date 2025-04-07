import Link from "next/link";
import Container from "../Container";
import FooterIcons from "./FooterIcons";
import Logo from "@/public/images/Logo.svg";
import Image from "next/image";
import FooterNav from "./FooterNav";

function Footer() {
  return (
    <footer className="px-4 border-b-[1px] lg:pt-14 border-cultured pb-12 lg:pb-24">
      <Container>
        <div className="grid text-center md:text-left md:grid-cols-2 lg:grid-cols-[4fr_1fr_1fr_1fr] gap-10 md:gap-20 lg:gap-28">
          <section className="mx-auto md:mx-0 md:w-[275px] flex flex-col">
            <div className="space-y-4 lg:space-y-8">
              <Link href="/">
                <Image src={Logo} alt="Logo" className="mx-auto md:mx-0" />
              </Link>
              <p>
                Empowering visionary startups to reach new heights through
                funding and support.
              </p>
            </div>
            <FooterIcons />
          </section>

          <FooterNav
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
