import { ProjectCard } from "@/components/UI/ProjectCard";
import { projectLinks } from "@/constants/constant";
import { motion, useScroll, useTransform } from "framer-motion";
import { Inter } from "next/font/google";
import React, { useRef } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const Work = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const translateYFirst = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const opacityFirst = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  const translateYSecond = useTransform(scrollYProgress, [0.5, 1], [100, 0]);

  return (
    <main
      className={`w-full h-min container font-inter-medium ${inter.variable}`}
    >
      {/* First Section */}
      <section ref={ref} className="w-full  flex flex-col  relative z-0">
        <motion.div
          style={{
            translateY: translateYFirst,
            opacity: opacityFirst,
          }}
          className="flex flex-col  pt-36 w-5/6 font-bold text-9xl gap-2 overflow-hidden h-min z-0"
        >
          <div className="flex overflow-hidden">
            <motion.h1
              initial={{ translateY: 0, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeIn" }}
            >
              LATEST PROJECTS
            </motion.h1>
          </div>
          <div className="flex overflow-hidden">
            <motion.h1
              initial={{ translateY: 0, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            >
              THAT I BUILT
            </motion.h1>
          </div>
        </motion.div>
      </section>

      {/* Second Section */}
      <motion.section
        style={{
          translateY: translateYSecond,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className=" w-full h-min gap-14  flex flex-col  relative z-10"
      >
        <div className=" w-full h-1 bg-white "></div>
        <div className="w-full gap-10 relative grid grid-cols-1 xl:grid-cols-2">
          {projectLinks.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </motion.section>
    </main>
  );
};

export default Work;
