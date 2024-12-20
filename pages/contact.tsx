import { ContactForm } from "@/components/ContactForm";
import { AccordionItem } from "@/components/UI/Accordion/ AccordionItem";
import { Accordion } from "@/components/UI/Accordion/Accordion";
import { AccordionContent } from "@/components/UI/Accordion/AccordionContent";
import { AccordionTrigger } from "@/components/UI/Accordion/AccordionTrigger";
import { faqContent } from "@/constants/constant";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Map } from "lucide-react";

import React, { useRef } from "react";

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
      className={`w-full h-min text-primary-foreground px-4 lg:container font-inter-medium z-50 relative `}
    >
      {/* First Section */}
      <section ref={ref} className="w-full  flex flex-col  relative z-0">
        <motion.div
          style={{
            translateY: translateYFirst,
            opacity: opacityFirst,
          }}
          className="flex flex-col  pt-36 lg:w-5/6 font-bold text-5xl  md:text-6xl lg:text-[76px] xl:text-9xl  gap-2 overflow-hidden h-min z-0"
        >
          <div className="flex overflow-hidden">
            <motion.h1
              initial={{ translateY: 0, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeIn" }}
            >
              LET&lsquo;S TALK ABOUT
            </motion.h1>
          </div>
          <div className="flex overflow-hidden">
            <motion.h1
              initial={{ translateY: 0, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
            >
              YOUR PROJECT
            </motion.h1>
          </div>
        </motion.div>
      </section>
      <motion.section
        style={{
          translateY: translateYSecond,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className=" w-full h-min gap-24 bg-primary flex flex-col  relative z-10 pb-20 border-b-2 border-primary-foreground "
      >
        <div className=" w-full h-1 bg-primary-foreground"></div>

        <div className="flex flex-col  lg:flex-row w-full h-min">
          <div className=" flex flex-col lg:w-1/2 h-min gap-5 lg:gap-16 ">
            <div className=" flex flex-col gap-4 w-full h-min">
              <p className="text-lg">* CONTACT</p>
              <h2 className=" text-5xl lg:text-7xl font-semibold">GET IN TOUCH</h2>
            </div>
            <div className="flex flex-col text-xl  gap-10 items-center w-5/6 h-min ">
              <div className="w-full items-center border-b-2 border-slate-500 hover:border-primary-foreground transition-colors duration-300    h-min py-8 flex gap-4">
                <Mail />
                <p>amishkumar800@gmail.com</p>
              </div>

              <div className="w-full h-min  border-b-2 border-slate-500 hover:border-primary-foreground py-5 transition-colors duration-300   flex items-center gap-4">
                <Map />
                <p>New Delhi, Delhi, 110001</p>
              </div>
            </div>
          </div>
          <div className="pt-5 ">
            <ContactForm />
          </div>
        </div>
      </motion.section>
      <section>
        <div className="flex w-full flex-col  lg:flex-row justify-center max-sm:px-2 gap-14  py-24 border-b-2 border-white ">
          <div className="flex flex-col   space-y-5  lg:p-4 ">
            <p className="text-xl">* FAQ</p>
            <h2 className="text-5xl bg-clip-text bg-gradient-to-r from-primary-foreground via-zinc-400 to-zinc-700 text-transparent inline-block">
              Curious? Check Out the Scoop! (FAQs)
            </h2>
          </div>
          <div className="w-full h-min flex items-center justify-center">
            <Accordion>
              {faqContent.map((item, index) => (
                <AccordionItem
                  key={index}
                  className="  text-primary-foreground bg-transparent border-primary-foreground "
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
