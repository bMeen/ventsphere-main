"use client";

import Hero from "./_components/hero/Hero";

/* import Image from "next/image";
import Hero from "@/public/images/hero.svg";
import { useState } from "react"; */

function Page() {
  return (
    <>
      <Hero />
    </>
  );
}

export default Page;

/* 
function Page() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="">
      <h1>Hello World</h1>

      <div
        style={{
          border: "1px solid red",
          filter: isLoading ? "none" : "blur(10px)",
          transition: "filter 0.5s ease",
        }}
      >
        <Image src={Hero} alt="Hero Image" onLoad={() => setIsLoading(true)} />
      </div>
    </div>
  );
} */
