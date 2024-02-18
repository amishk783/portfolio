import Image from "next/image";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Twitter } from "lucide-react";
import XIcon from "@mui/icons-material/X";
import { Link } from "react-scroll";

export function Sidebar() {
  return (
    <section className="md:px-2 mt-2  xl:fixed sm:mt-20 xl:trasnlate-y-[-40%] top-0 rounded-lg  md:max-xl:w-[767px] md:max-xl:mx-auto">
      <div className=" mx-3 xl:mx-[38px] border-2 max-w-[550px] absolute -z-20 -inset-1 rounded-[30px] bg-gradient-to-r from-rose-400 blur via-fuchsia-500 to-indigo-500 opacity-75  transition duration-500 hover:opacity-100 sm:max-xl:mx-auto "></div>
      <div className=" flex  flex-col py-12 px-12 xl:mx-10 border-[1px] border-solid border-[#565656] z-10  xl:border-2 w-full  xl:max-w-[400px] xl:z-10 rounded-[30px] xl:left-5 bg-[#0e1630]">
        <div className="flex gap-5 justify-between mt-2 text-sm leading-6 text-right text-white">
          <h1 className=" text-4xl">Amish</h1>
          <p className=" text-base ">Web Developer</p>
        </div>

        <Image
          className="mt-9 object-contain w-full aspect-[1.19] border-[1px] border-solid border-[#565656] rounded-[30px] sm:max-xl:mx-auto md:max-xl:mb-5 sm:max-xl:w-[250px] "
          src="/profile.jpeg"
          alt="my-face"
          width={200}
          height={100}
        />
        <div className="self-center mt-16 text-2xl font-light leading-7 text-center text-white md:max-xl:mt-8">
          <a href="mailto:amishkumar@gmail.com" target="_blank">
            amishkumar@gmail.com
          </a>
        </div>
        <div className="mt-3.5 text-2xl font-light leading-7 text-center text-white whitespace-nowrap">
          Based in New Delhi,IN
        </div>
        <div className="self-center mt-9 text-sm leading-6 text-center whitespace-nowrap text-neutral-400">
          © 2024 Amish. All Rights Reserved
        </div>
        <div className="flex justify-around gap-6 self-center mt-8 w-56 max-w-full">
          <a
            href="https://www.linkedin.com/in/amish-kumar-a0260a1b7/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={42} />
          </a>
          <a
            href="https://twitter.com/amishkumar800"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter size={42} />
          </a>
          {/* <XIcon/> */}
          <a
            href="https://github.com/amishk783"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={42} />
          </a>
        </div>
        <Link
          to="contact"
          smooth={true}
          duration={1000}
          className="justify-center items-center py-5 pr-16 pl-20 mt-8 text-base leading-7 text-center text-black uppercase whitespace-nowrap bg-emerald-400 border-2 border-emerald-400 border-solid rounded-[30px]"
        >
          Hire me
        </Link>
      </div>
    </section>
  );
}
