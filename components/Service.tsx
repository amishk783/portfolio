import { delay, motion } from "framer-motion";
import { Inter } from "next/font/google";
import clsx from "clsx";
const interFont = Inter({ subsets: ["latin"] });
import { serviceDetails } from "@/constants/constant";
import { ServiceCard } from "./ServiceCard";
export function Service() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1.1,
        
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 300 },
    show: { opacity: 1, y: 0, duration: 300 },
  };

  return (
    <section
      id="service"
      className="pt-24 xl:mb-40 xl:mt-20 xl:pt-16 xl:w-[770px]"
    >
      <motion.div
        whileInView={{ opacity: 1, y: 100 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 4, ease: "easeInOut" }}
      >
        <div
          className={clsx(
            " max-w-[135px] px-11 py-3.5 text-sm font-light leading-4 text-white uppercase whitespace-nowrap border border-solid border-neutral-600 rounded-[30px] max-md:px-5",
            `font-${interFont}`
          )}
        >
          Services
        </div>
        <motion.div
          whileInView="show"
          variants={container}
          initial="hidden"
          className="flex flex-col gap-5 justify-between items-start mt-10 max-md:flex-wrap max-md:mt-10 max-md:max-w-full"
        >
          <div className="flex self-start max-md:max-w-full">
            <div className="text-[70px]  font-sans font-light tracking-[-0.2px] mb-10  text-white leading-[90px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
              My
              <span className="text-emerald-400"> Specializations</span>
            </div>
          </div>
          <motion.ul
            whileInView="show"
            variants={container}
            initial="hidden"
            className=" w-[98%] xl:w-full"
          >
            {serviceDetails.map((service) => (
              <motion.li key={service.title} variants={item}>
                <ServiceCard {...service} />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
