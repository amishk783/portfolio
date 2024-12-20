import { Github, Linkedin, Twitter } from "lucide-react";
import React from "react";
import { TextReveal } from "./TextReveal";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <section className=" w-full flex font-inter-medium container  text-primary-foreground flex-col gap-6 border-t-4 border-primary-foreground   py-24 items-center h-min justify-center text-center relative z-50 ">
        <p className=" text-2xl">HAVE A PROJECT IN MIND ?</p>
        <TextReveal
          text="LET'S WORK TOGETHER"
          className=" text-5xl lg:text-8xl"
        ></TextReveal>
        <button className=" py-4 px-8 border-2 border-primary-foreground rounded-full">
          Get in Touch
        </button>
      </section>
      <section className="w-full container text-primary-foreground border-primary-foreground  flex flex-col md:flex-row gap-6 py-10 my-20 items-center h-min justify-between text-center border-b-4 border-t-4  relative z-50 ">
        <Link href="/">
          <TextReveal className="text-2xl font-semibold" text="AMISH KUMAR" />
        </Link>
        <div className="flex gap-5 md:gap-10 text-lg items-center">
          <p>HOME</p>
          <p>ABOUT</p>
          <p>WORK</p>
          <p>CONTACT</p>
        </div>
        <div className="flex justify-around gap-6 items-center w-56 max-w-full">
          <a
            href="https://www.linkedin.com/in/amish-kumar-a0260a1b7/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={35} />
          </a>
          <a
            href="https://twitter.com/amishkumar800"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter size={35} />
          </a>
          {/* <XIcon/> */}
          <a
            href="https://github.com/amishk783"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={35} />
          </a>
        </div>
      </section>
    </>
  );
};
