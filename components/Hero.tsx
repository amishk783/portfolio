import { Fragment } from "react";
import { Inter } from "next/font/google";
import clsx from "clsx";
import { ArrowDownCircle, Contact } from "lucide-react";
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
    <section id="hero" className="xl:mb-40 pt-24  xl:pt-20">
      <div className="">
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
                Turning Ideas into Pixels: : Your
                <span className="text-emerald-400 animate-typing">
                  {" "}
                  Expert{" "}
                </span>
                Web Developer
              </span>
            </div>
            <p className="mt-12 xl:w-[650px] mb-5 text-lg leading-7 text-neutral-400 max-md:mt-10 max-md:max-w-full animate-pulse">
              An adept full-stack web developer, crafting applications and
              digital experiences tailored for both corporate giants and
              burgeoning enterprises with finesse.
            </p>
            <div className="flex flex-col-reverse xl:flex xl:justify-between ">
              <div className="gap-12 mt-10 xl:mt-2 flex items-center">
                <div className="">
                  <h2 className=" text-6xl text-green-400 leading-10 mb-7">
                    10+
                  </h2>
                  <p className=" text-base uppercase">Years of Experience</p>
                </div>
                <div className="">
                  <h2 className=" text-6xl text-green-400 leading-10 mb-7">
                    10+
                  </h2>
                  <p className=" text-base uppercase">Years of Experience</p>
                </div>
              </div>
              <div className="py-10 xl:py-2">
                <a className="flex justify-center xl:justify-end">
                  <SpinningText text={"Code - Create - Conquer -"} />
                  <span className=" -translate-x-[122px] translate-y-[72px]">
                    <ArrowDownCircle
                      size={48}
                      onClick={() => handleClickScroll("contact")}
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}