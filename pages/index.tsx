import React from "react";


import { StickyScrollRevel } from "@/components/UI/StickyScrollRevel";
import { portfolioItems } from "@/constants/constant";

import { motion } from "framer-motion";


const Home = () => {
  return (
    <>
      <main
        className={` w-full h-min text-primary-foreground  container max-md:px-4 font-inter-medium   `}
      >
        {/* hero */}
        <section className="w-full h-min   flex flex-col gap-40   ">
          <div className=" flex flex-col pb-20 pt-44 lg:w-5/6  font-bold text-5xl md:text-6xl lg:text-[76px] xl:text-9xl  gap-2">
            <div className=" flex overflow-hidden ">
              <motion.h1
                initial={{ translateY: 60, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeIn" }}
                className="  "
              >
                HI, I&#39;M AMISH KUMAR
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
          <div className=" w-full flex gap-4 flex-col text-primary-foreground md:flex-row md:justify-between items-center border-t-4 border-primary-foreground pt-20 ">
            <div className=" text-2xl ">
              <p>Based in Delhi</p>
            </div>
            <div className="text-2xl w-full md:w-1/2  text-end">
              <p>Passionate Developer Crafting Visually Captivating Websites</p>
            </div>
          </div>
        </section>
        {/* featured works */}
        <section className="w-full h-min flex  flex-col justify-between pt-40 pb-5 ">
          <div className="flex flex-col gap-3 sticky ">
            <p className=" text-2xl">* PORTFOLIO</p>
            <h2 className=" text-5xl lg:text-7xl">FEATURED WORKS </h2>
          </div>

          <div className="w-full h-min    ">
            <StickyScrollRevel items={portfolioItems} />
          </div>

          <div className="w-full flex items-center justify-center text-xl py-10">
            <button className=" py-4 px-8 border-2 border-primary-foreground rounded-full">
              View ALL Projects
            </button>
          </div>
        </section>
      </main>
    </>
  );
};
export default Home;
