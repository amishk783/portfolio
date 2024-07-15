import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import clsx from "clsx";

import { ArrowDownCircle, ArrowDownToLine, Contact } from "lucide-react";
import { SpinningText } from "./UI/SpiningText";

const interFont = Inter({ subsets: ["latin"] });

export function Hero() {
  const handleClickScroll = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="xl:mb-36 pt-24  xl:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=""
      >
        <div
          className={clsx(
            "max-w-[135px]  px-7 py-3.5 text-sm font-light leading-4  text-white uppercase whitespace-nowrap border border-solid border-neutral-600 rounded-[30px] max-md:px-5",
            `font-${interFont}`
          )}
        >
          INTRODUCE
        </div>
        <div className="flex gap-5 justify-between items-start mt-16 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col self-start max-md:max-w-full">
            <div className="text-[78px]  font-sans font-light tracking-[-0.2px]  text-white leading-[90px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
              Say Hi from <span className="text-emerald-400">Amish</span>,
              <br />
              <span className=" ">Web</span>
              <span> Developer</span>
              <br />
              <span className="text-3xl xl:whitespace-nowrap">
                Turning Ideas into Pixels : Your
                <span className="text-emerald-400 animate-typing">
                  {" "}
                  Expert{" "}
                </span>
                Web Developer
              </span>
            </div>
            <p className="mt-12 xl:w-[650px] mb-5 text-lg leading-7 text-neutral-400 max-md:mt-10 max-md:max-w-full ">
              An adept full-stack web developer, crafting applications and
              digital experiences tailored for both corporate giants and
              burgeoning enterprises with finesse.
            </p>
            <div className="flex flex-row xl:flex xl:justify-between ">
              <div className="gap-12 xl:mt-2 flex items-center">
                <a href="/file/resume.pdf" download>
                  <button className="group h-14 relative flex text-gray-700 items-center justify-center  bg-green-300 rounded-3xl ">
                    <div className=" absolute border-2 -z-20 group-hover:-inset-1 rounded-[30px]  group-hover:bg-gradient-to-r group-hover:from-rose-400 blur group-hover:via-fuchsia-500 hover:to-indigo-500 animate-pulse opacity-100 transition duration-500  "></div>
                    <p className="text-2xl py-3 px-4">Resume</p>
                    <div className="w-1 h-full border-r-2 bg-white"></div>
                    <ArrowDownToLine className="mx-2" size={32} />
                  </button>
                </a>
              </div>
              <div className="py-10 xl:py-2">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                  className="flex justify-center xl:justify-end"
                >
                  <SpinningText
                    text={"Code - Create - Conquer -"}
                    onClick={() => handleClickScroll("contact")}
                  />
                  <span className=" -translate-x-[122px] translate-y-[72px]">
                    <ArrowDownCircle
                      size={48}
                      onClick={() => handleClickScroll("contact")}
                    />
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
