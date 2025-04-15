import "@/app/_styles/globals.css";
import "@/public/css/clash-grotesk.css";

import type { Metadata } from "next";

import { Instrument_Sans } from "next/font/google";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";
import Copyright from "./_components/Copyright";

const instrument_sans = Instrument_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s: VentSphere",
    default: "VentSphere",
  },
  description:
    "Empowering visionary entrepreneurs with the capital and support needed to transform innovative ideas into successful businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={instrument_sans.className}>
      <body className="text-grey-slate overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
        <Copyright />
      </body>
    </html>
  );
}
