import Link from "next/link";
import Container from "../Container";
import FooterIcons from "./FooterIcons";
import Logo from "@/public/images/Logo.svg";
import Image from "next/image";
import FooterNav from "./FooterNav";

function Footer() {
  return (
    <footer className="px-4 border-b-[1px] border-cultured pb-24">
      <Container>
        <div>
          <section>
            <Link href="/">
              <Image src={Logo} alt="Logo" />
            </Link>
            <p>
              Empowering visionary startups to reach new heights through funding
              and support.
            </p>
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
