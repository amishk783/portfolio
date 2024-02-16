import { Inter } from "next/font/google";
import clsx from "clsx";
import Image from "next/image";

import { tools } from "@/constants/constant";

const interFont = Inter({ subsets: ["latin"] });

export function Tools() {
  return (
    <section id="skills" className="xl:mb-32 xl:mt-40 pt-24 xl:w-[770px]">
      {" "}
      <div
        className={clsx(
          " max-w-[135px] px-11 py-3.5 text-sm font-light leading-4 text-white uppercase whitespace-nowrap border border-solid border-neutral-600 rounded-[30px] max-md:px-5",
          `font-${interFont}`
        )}
      >
        Skills
      </div>
      <div className="flex self-start max-md:max-w-full mt-10 mb-5">
        <div className="text-[70px]  font-sans font-light tracking-[-0.2px] mb-10  text-white leading-[90px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
          My <span className="text-emerald-400"> Tools</span>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 xl:grid-cols-4  ">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div key={tool.title} className=" px-6 py-3">
                <div>
                  <div className="flex flex-col py-2 text-center items-center space-y-3">
                    <Icon size={48} color={tool.color} className="max-sm:w-10 hover:scale-[110%] "></Icon>

                    <h2 className="xl:text-2xl">{tool.title}</h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
