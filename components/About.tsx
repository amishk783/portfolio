import { Fragment } from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import clsx from "clsx";
const interFont = Inter({ subsets: ["latin"] });

export function About() {
  return (
    <section id="about" className="pt-24  xl:mb-44 xl:pb-24 xl:mt-36 xl:pt-20">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 250 }}
        viewport={{ once: true }}
        // animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className=""
      >
        <div
          className={clsx(
            " max-w-[135px] px-11 py-3.5 text-sm font-light leading-4 text-white uppercase whitespace-nowrap border border-solid border-neutral-600 rounded-[30px] max-md:px-5",
            `font-${interFont}`
          )}
        >
          About
        </div>
        <div className="flex gap-5 justify-between items-start mt-16 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col self-start max-md:max-w-full">
            <div className="text-5xl font-sans font-light tracking-[-0.2px]  text-white leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
              Let&apos;s co-create captivating digital experiences,
               tailored to your
              <span className="text-emerald-400"> unique narrative.</span>
            </div>
            <p className="mt-12 mb-5 text-lg leading-10 text-neutral-400 max-md:mt-10 max-md:max-w-full">
              Coming from a computer science background, I thrive on solving
              problems and enjoy diving into intricate projects. Excelling at
              quickly grasping concepts, I excel in deciphering complex business
              needs for specialized systems. As a fledgling full-stack
              developer, I embody a comprehensive approach, capable of
              overseeing projects from inception to deployment, managing every
              aspect of the development journey. <br />
              Whether you are an aspiring entrepreneur venturing into app
              development or a seasoned enterprise with an established tech
              team, I&apos;m eager to contribute and bring your innovative ideas
              to fruition.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
