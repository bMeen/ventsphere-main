import "@/app/_styles/globals.css";
import type { Metadata } from "next";

import { Instrument_Sans } from "next/font/google";

const instrument_sans = Instrument_Sans({
  weight: ["400", "700"],
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
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
