import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import clsx from "clsx";
const interFont = Inter({ subsets: ["latin"] });

export function Education() {
  return (
    <section
      id="education"
      className="pt-24 xl:mb-40 xl:mt-20 xl:pt-16 xl:w-[770px]"
    >
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div
          className={clsx(
            " max-w-[135px] px-11 py-3.5 text-sm font-light leading-4 text-white uppercase whitespace-nowrap border border-solid border-neutral-600 rounded-[30px] max-md:px-5",
            `font-${interFont}`
          )}
        >
          Resume
        </div>
        <div className="flex self-start max-md:max-w-full mt-10 mb-5">
          <div className="text-[70px]  font-sans font-light tracking-[-0.2px] mb-10  text-white leading-[90px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
            Education &<span className="text-emerald-400"> Experience</span>
          </div>
        </div>
        <div>
          <div>
            <div className="relative pl-16 pb-16 space-y-8 timeline ">
              <div className="pt-2">
                <span className="">Aug 2022 - Oct 2022</span>
                <h3 className=" pt-10  pb-2 text-4xl font-light mb-1 ">
                  Intern
                </h3>
                <h2 className=" pt-5 pb-7 text-lg text-green-400">
                  Niti Aayog
                </h2>
                <p className=" text-base leading-7">
                  Engineered Python scripts to automate data analysis and
                  reporting tasks, resulting in a notable increase in
                  operational efficiency by alleviating manual efforts in daily
                  tasks. Devised and implemented an algorithm to dynamically
                  identify the School of the Month through dashboard reports,
                  significantly enhancing overall operational efficiency.
                </p>
              </div>
            </div>

            <div className="relative pl-16 pb-16 space-y-8 timeline  ">
              <div className="pt-2">
                <span className="">Aug 2020 - July 2024</span>
                <h3 className=" pt-10  pb-2 text-4xl font-light mb-1 ">
                  Bachelor of Engineering in Computer Science
                </h3>
                <h2 className=" pt-5 pb-7 text-lg text-green-400">
                  BBD University
                </h2>
                <p className=" text-base leading-7"></p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
