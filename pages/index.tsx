import React from "react";

import { Inter } from "next/font/google";
import { StickyScrollRevel } from "@/components/UI/StickyScrollRevel";
import { portfolioItems } from "@/constants/constant";


import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const me = () => {
  return (
    <main
      className={` w-full h-min  container font-inter-medium  ${inter.variable} `}
    >
      {/* hero */}
      <section className="w-full h-min  flex flex-col gap-40   ">
        <div className=" flex flex-col pb-20 pt-44 w-5/6  font-bold text-9xl  gap-2">
          <div className=" flex overflow-hidden ">
            <motion.h1
              initial={{ translateY: 60, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeIn" }}
              className="  "
            >
              HI, I'M AMISH KUMAR
            </motion.h1>
          </div>
          <div className=" flex overflow-hidden ">
            <motion.h1
              initial={{ translateY: 80, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            >
              WEB DEVELOPER
            </motion.h1>
          </div>
        </div>
        <div className=" w-full flex justify-between items-center border-t-4 pt-20 ">
          <div className=" text-2xl ">
            <p>Based in Delhi</p>
          </div>
          <div className="text-2xl">
            <p>Passionate Developer Crafting Visually Captivating Websites</p>
          </div>
        </div>
      </section>
      {/* featured works */}
      <section className="w-full h-min flex  flex-col justify-between pt-40 pb-5 border-b-4 border-white">
        <div className="flex flex-col gap-3 sticky ">
          <p className=" text-2xl">* PORTFOLIO</p>
          <h2 className=" text-7xl">FEATURED WORKS </h2>
        </div>

        <div className="w-full h-min    ">
          <StickyScrollRevel items={portfolioItems} />
        </div>

        <div className="w-full flex items-center justify-center text-xl py-10">
          <button className=" py-4 px-8 border-2 rounded-full">
            View ALL Projects
          </button>
        </div>
      </section>
    
    </main>
  );
};
export default me;
