
import { AccordionItem } from "@/components/UI/Accordion/ AccordionItem";
import { Accordion } from "@/components/UI/Accordion/Accordion";
import { AccordionContent } from "@/components/UI/Accordion/AccordionContent";
import { AccordionTrigger } from "@/components/UI/Accordion/AccordionTrigger";
import { faqContent } from "@/constants/constant";
import { motion, useScroll, useTransform } from "framer-motion";

import { Inter } from "next/font/google";
import React, { useRef } from "react";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const About = () => {
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
        className=" w-full h-min gap-24  flex flex-col  relative z-10 pb-20 border-b-2 "
      >
        <div className=" w-full h-1 bg-white "></div>

        <div className="flex w-full h-min">
          <div className=" flex  w-full h-min gap-16 ">
            <div className=" flex  justify-between gap-4 w-full h-min">
              <h4 className="text-lg">Experienced Developer</h4>
              <h4 className=" text-lg font-semibold">
                Transforming Visions Into Digital Masterpieces
              </h4>
            </div>
          </div>
        </div>
      </motion.section>
      <section className="">
        <p className="text-lg">* WHO AM I</p>
        <div>
          <h5>
            I have been building websites past one years. With a passion
            for crafting visually stunning websites, I've seamlessly integrated
            no-code tools to make the development process efficient and
            accessible. My goal is to bring a perfect blend of design aesthetics
            and functionality to your digital projects.
          </h5>
        </div>
      </section>
      <section>
        <div className="flex w-full justify-center max-sm:px-2 gap-14  py-10 ">
          <div className="flex flex-col   space-y-5  p-4 ">
            <p className="text-xl">* FAQ</p>
            <h2 className="text-5xl bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-700 text-transparent inline-block">
              Curious? Check Out the Scoop! (FAQs)
            </h2>
          </div>
          <div className="w-full h-min flex items-center justify-center">
            <Accordion>
              {faqContent.map((item, index) => (
                <AccordionItem
                  key={index}
                  className=" text-white bg-transparent"
                  value={index + 1}
                >
                  <AccordionTrigger className="">
                    <div className=" py-2 text-lg">{item.question}</div>
                  </AccordionTrigger>
                  <AccordionContent className="">
                    <p className=" pb-4">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
};
export default About;
