import Image from "next/image";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Twitter } from "lucide-react";
import XIcon from "@mui/icons-material/X";
export function Sidebar() {
  return (
    <section className=" md:px-2 xl:fixed mt-20 xl:trasnlate-y-[-40%] top-0 rounded-lg  md:max-xl:w-[767px] md:max-xl:m-auto ">
      <div
        id="#bgSidebar"
        className=" mx-3 xl:mx-[38px] border-2 max-w-[550px] absolute -z-20 -inset-1 rounded-[30px] bg-gradient-to-r from-rose-400 blur via-fuchsia-500 to-indigo-500 opacity-75  transition duration-500 hover:opacity-100 "
      ></div>
      <div className="flex  flex-col py-12 px-12 xl:mx-10 border-[1px] border-solid border-[#565656] z-10  xl:border-2 w-full  xl:max-w-[400px] xl:z-10 rounded-[30px] xl:left-5 bg-[#0e1630]">
        <div className="flex gap-5 justify-between mt-2 text-sm leading-6 text-right text-white">
          <h1 className=" text-4xl">Amish</h1>
          <p className=" text-base ">Web Developer</p>
        </div>

        <Image
          className="mt-9 object-contain w-full aspect-[1.19] border-[1px] border-solid border-[#565656] rounded-[30px] md:max-xl:mx-auto md:max-xl:mb-5 md:max-xl:w-[250px] "
          src="/mee.jpeg"
          alt="my-face"
          width={268}
          height={100}
        />
        <div className="self-center mt-16 text-2xl font-light leading-7 text-center text-white md:max-xl:mt-8">
          amishkumar@gmail.com
        </div>
        <div className="mt-3.5 text-2xl font-light leading-7 text-center text-white whitespace-nowrap">
          Based in New Delhi,IN
        </div>
        <div className="self-center mt-9 text-sm leading-6 text-center whitespace-nowrap text-neutral-400">
          © 2024 Amish. All Rights Reserved
        </div>
        <div className="flex gap-6 self-center mt-8 w-56 max-w-full">
          <Linkedin size={42} />
          <Twitter size={42} />
          {/* <XIcon/> */}
          <Github size={42} />
          <Linkedin size={42} />
        </div>
        <div className="justify-center items-center py-5 pr-16 pl-20 mt-8 text-base leading-7 text-center text-black uppercase whitespace-nowrap bg-emerald-400 border-2 border-emerald-400 border-solid rounded-[30px]">
          <button className="button">Hire Me!</button>
        </div>
      </div>
    </section>
  );
}
