
import { ProcessWorkCard } from "@/components/UI/ProcessWorkCard";
import { excperience, faqContent, workProcess } from "@/constants/constant";
import { motion, useScroll, useTransform } from "framer-motion";

import React, { useRef } from "react";

const About = () => {
  const ref = useRef(null);

  const projectRef = useRef(null);
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: projectRef,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const translateYFirst = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const opacityFirst = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  const translateYSecond = useTransform(scrollYProgress, [0.5, 1], [100, 0]);
  return (
    <main
      className={`w-full h-min  text-primary-foreground  font-inter-medium`}
    >
      {/* First Section */}
      <section
        ref={ref}
        className="w-full  container flex flex-col  relative z-0"
      >
        <motion.div
          style={{
            translateY: translateYFirst,
            opacity: opacityFirst,
          }}
          className="flex flex-col  pt-36 text-4xl xl:w-5/6 font-bold xl:text-9xl gap-2 overflow-hidden h-min z-0"
        >
          <div className="flex overflow-hidden">
            <motion.h1
              initial={{ translateY: 0, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeIn" }}
            >
              ELEVATING BRANDS
            </motion.h1>
          </div>
          <div className="flex overflow-hidden">
            <motion.h1
              initial={{ translateY: 0, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            >
              WITH INNOVATIVE
            </motion.h1>
          </div>
          <div className="flex overflow-hidden">
            <motion.h1
              initial={{ translateY: 0, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            >
              DESIGN SOLUTIONS
            </motion.h1>
          </div>
        </motion.div>
      </section>
      <motion.section
        style={{
          translateY: translateYSecond,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className=" w-full h-min gap-14    bg-primary  flex flex-col  relative z-10 pb-10 md:pb-20  "
      >
        <div className=" w-full h-1 bg-primary-foreground "></div>
        <div className="container px-4 z-10 pb-20 ">
          <div className="flex w-full h-min ">
            <div className=" flex  w-full h-min gap-16 ">
              <div className=" flex  justify-between gap-10 w-full h-min">
                <h4 className="text-lg ">Experienced Developer</h4>
                <h4 className=" text-lg text-end max-sm:w-1/2 lg:font-semibold">
                  Transforming Visions Into Digital Masterpieces
                </h4>
              </div>
            </div>
          </div>

          <section className="flex w-full flex-col lg:flex-row lg:justify-between pt-24  border-b-2 border-primary-foreground pb-20">
            <p className=" md:text-xl w-full">* WHO AM I</p>
            <div className="w-full flex flex-col gap-5">
              <h5 className=" text-2xl md:text-3xl font-medium">
                I&apos;ve been building websites for the past year, driven by a
                passion for creating visually captivating and highly functional
                digital experiences. By integrating no-code tools into my
                workflow, I ensure efficiency and accessibility throughout the
                development process. My goal is to seamlessly combine design
                aesthetics with robust functionality, bringing your digital
                projects to life.
              </h5>

              <div className="flex flex-col gap-5">
                <h5 className="py-4 border-b-2 border-primary-foreground text-9xl">10+</h5>
                <p className="text-xl">Completed Projects</p>
              </div>
            </div>
          </section>
        </div>
      </motion.section>
      <section
        ref={projectRef}
        className=" flex  items-start xl:h-[300vh] h-full overflow-visible relative w-full max-sm:py-10 "
      >
        <div className=" flex xl:flex-grow xl:flex-shrink-0 xl:basis-0 flex-col xl:h-screen overflow-hidden justify-center sticky xl:top-0 will-change-transform z-10 gap-10 xl:gap-16">
          <div className="flex  flex-col justify-between h-min overflow-hidden px-2 md:px-12 relative w-full z-10">
            <p className=" text-lg">* PROCESS</p>
            <h5 className=" text-4xl lg:text-7xl">HOW I WORK</h5>
          </div>
          <motion.div
            style={{
              perspective: "1200px",
              translateX: useTransform(scrollYProgress2, [0, 0.8], [20, -4000]),
              transformStyle: "preserve-3d",
            }}
            transition={{ ease: "easeInOut", duration: 5 }}
            className="hidden sm:flex  w-full sm:flex-row items-center  justify-center relative xl:w-[300%] z-10 overflow-hidden h-min gap-14 cursor-none  "
          >
            {workProcess.map((process, index) => (
              <ProcessWorkCard key={index} {...process} index={index} />
            ))}
          </motion.div>
          <div className="flex sm:hidden flex-col gap-8 items-center justify-center px-4 ">
            {workProcess.map((process, index) => (
              <ProcessWorkCard key={index} {...process} index={index} />
            ))}
          </div>
        </div>
      </section>
      <section className=" flex w-full bg-primary pt-20  ">
        <div className=" flex flex-col md:flex-row md:h-[140vh] container  md:justify-between w-full xl:top-0 will-change-transform z-10 gap-10 sm:gap-5 xl:gap-16">
          <div className="flex  lg:w-1/3 flex-col md:h-[800px] rounded-md  md:sticky top-10 overflow-hidden  z-10">
            <p className=" text-lg">* EXCPERIENCE</p>
            <h5 className=" text-4xl md:text-5xl lg:text-8xl font-semibold">
              MY CAREER JOURNEY
            </h5>
          </div>
          <div className="flex flex-col  md:w-1/2 h-min gap-16 md:gap-32 ">
            {excperience.map((exp, index) => (
              <div
                key={index}
                className="flex flex-col gap-14  border-t-2 group border-primary-foreground pt-10 "
              >
                <p className="text-xl">* {exp.date}</p>
                <div className="flex flex-col gap-2">
                  <h2 className=" text-5xl font-semibold">{exp.company}</h2>
                  <p className="text-xl">{exp.role}</p>

                  <p className=" text-lg py-7">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
export default About;
