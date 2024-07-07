import Logo from "@/components/Logo";
import Image from "next/image";
import { spirax } from "./fonts";
import Navigation from "@/components/Navigation";
import { link } from "fs";
import Circle from "@/components/Circle";

export default function Home() {
  const linkList = [
    {
      name: "Portfolio",
      href: "/portfolio"
    },
    {
      name: "Myself",
      href: "/myself"
    },
    {
      name: "Resume",
      href: "/resume"
    },
    {
      name: "Connect",
      href: "/connect"
    },
  ]
  return (
    <main className="px-10 pb-10  max-h-screen h-screen overflow-y-hidden w-full">
      <Logo />
      <Circle className="-right-44 -top-44 size-96 from-black via-gray-900 to-gray-800" />
      <div className="mt-36 ml-10">
        <p>
          <span className="font-extrabold text-4xl">Hi, </span>
          <span className={`${spirax.className} text-3xl`}>I&apos;m</span>
        </p>
      </div>
      <div className={`${spirax.className}`}>
        <h1
          className="text-[12rem] text-center tracking-wider [text-shadow:_10px_5px_13px_rgb(0_0_0_/_60%)]"
        >
          Abdus Samad
        </h1>
      </div>
      <div className="grid grid-cols-7 -mt-14 ">
        <div className="col-span-4 h-full">
          <div className="w-fit pl-24">
            <p className="text-center
          bg-gradient-to-r from-[#000000] to-[#666666]
          inline-block
          text-transparent
          bg-clip-text
          text-4xl
          font-medium
          ">Web Developer</p>
          </ div>
          <div className="absolute bottom-24 left-36 font-medium text-xl">
            <p>Let&apos;s turn your</p>
            <p>idea into code</p>
          </div>
        </div>
        <div className="col-span-3 mx-[20%] pt-5">
          <Navigation linkList={linkList} />
        </div>
      </div>
    </main>
  );
}
