import { Inter } from "next/font/google";
import clsx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";
import { Opacity } from "@mui/icons-material";
const interFont = Inter({ subsets: ["latin"] });

export function Portfolio() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        id="portfolio"
        className="pt-24 xl:pt-10 xl:mt-20"
      >
        <div
          className={clsx(
            " max-w-[135px] px-8 py-3.5 text-sm font-light leading-4 text-white uppercase whitespace-nowrap border border-solid border-neutral-600 rounded-[30px] max-md:px-5",
            `font-${interFont}`
          )}
        >
          Portfolio
        </div>
        <div className="flex flex-col gap-5 justify-between items-start mt-16 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex self-start max-md:max-w-full">
            <div className="text-[70px]  font-sans font-light tracking-[-0.2px] mb-10  text-white leading-[90px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
              Featured
              <span className="text-emerald-400"> Projects</span>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className=" flex flex-wrap mt-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className=" opacity-[1] flex-auto w-full"
        >
          <div className=" mb-16">
            <div className="h-[460px] overflow-hidden rounded-[30px] relative mb-7">
              <a>
                <Image
                  className="block w-full h-full object-cover"
                  src="/portfolio3.png"
                  alt="portfolio"
                  width={1000}
                  height={100}
                />
              </a>
              <ul className=" absolute flex flex-wrap gap-3 items-center bottom-5 left-10  list-none">
                <li>
                  <a className="block text-sm bg-[#0e1630]  text-white rounded-2xl px-5 py-2">
                    Express Js
                  </a>
                </li>
                <li>
                  <a className="block text-sm bg-[#0e1630]  text-white rounded-2xl px-5 py-2">
                    React Js
                  </a>
                </li>
                <li>
                  <a className="block text-sm bg-[#0e1630]  text-white rounded-2xl px-5 py-2">
                    Sql
                  </a>
                </li>
                <li>
                  <a className="block text-sm bg-[#0e1630]  text-white rounded-2xl px-5 py-2">
                    Jwt Token
                  </a>
                </li>
              </ul>
            </div>
            <h3 className=" text-2xl font-light ">
              <a
                href="https://github.com/amishk783/meetup-frontend"
                target="_blank"
                className="hover:border-b-2 border-green-400"
              >
                Meetup WebApp - Linking Ideas, Building Communities
              </a>
            </h3>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className=" opacity-[1] flex-grow-0 flex-shrink-0 basis-auto  w-full xl:w-1/2 pr-6 pl-2 "
        >
          <div className=" mb-16">
            <div className="h-[410px] overflow-hidden rounded-[30px] relative mb-7">
              <a>
                <video
                  autoPlay
                  muted
                  loop
                  className="block w-full h-full object-left-top object-cover   "
                >
                  <source src="/video/code-animation.mp4" type="video/mp4" />
                </video>
              </a>
              <ul className=" absolute flex flex-wrap gap-2 items-center bottom-5 left-10  list-none">
                <li>
                  <a className="block text-sm bg-white  text-black rounded-2xl px-2 py-2">
                    NodeJS
                  </a>
                </li>
                <li>
                  <a className="block text-sm bg-white  text-black rounded-2xl px-2 py-2">
                    ExpressJS
                  </a>
                </li>
                <li>
                  <a className="block text-sm bg-white  text-black rounded-2xl px-2 py-2">
                    MySql
                  </a>
                </li>
              </ul>
            </div>
            <a
              href="https://github.com/amishk783/meetup-server"
              target="_blank"
              className="hover:border-b-2 text-2xl border-green-400"
            >
              Meetup Server
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className=" opacity-[1] flex-grow-0 flex-shrink-0 basis-auto w-full xl:w-1/2 pr-2 pl-4"
        >
          <div className=" mb-16">
            <div className="h-[410px] overflow-hidden rounded-[30px] relative mb-7">
              <a>
                <Image
                  className="block w-full h-full object-cover"
                  src="/portfolio-2.png"
                  alt="portfolio"
                  width={400}
                  height={100}
                />
              </a>
              <ul className=" absolute flex flex-wrap gap-3 items-center bottom-5 left-10  list-none">
                <li>
                  <a className="block text-sm bg-black  text-white rounded-2xl px-5 py-2">
                    NextJs
                  </a>
                </li>
                <li>
                  <a className="block text-sm bg-black  text-white rounded-2xl px-5 py-2">
                    React Js
                  </a>
                </li>
              </ul>
            </div>
            <a
              href="https://github.com/amishk783/open-waves"
              target="_blank"
              className="hover:border-b-2 text-2xl border-green-400"
            >
              Cross-Platform Design
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className=" opacity-[1] flex-auto w-full pr-2"
        >
          <div className=" mb-16">
            <div className="h-[460px] overflow-hidden rounded-[30px] relative mb-7">
              <a>
                <video
                  autoPlay
                  muted
                  loop
                  className="block w-full h-full object-cover"
                >
                  <source src="/video/portfolio-video.mp4" type="video/mp4" />
                </video>
              </a>
              <ul className=" absolute flex flex-wrap gap-3 items-center bottom-5 left-10  list-none">
                <li>
                  <a className="block text-sm bg-white  text-black rounded-2xl px-5 py-2">
                    NextJs
                  </a>
                </li>
                <li>
                  <a className="block text-sm bg-white  text-black rounded-2xl px-5 py-2">
                    React Js
                  </a>
                </li>
                <li>
                  <a className="block text-sm bg-white  text-black rounded-2xl px-5 py-2">
                    Embla Carousel
                  </a>
                </li>
              </ul>
            </div>
            <a
              href="https://github.com/amishk783/open-waves"
              target="_blank"
              className="hover:border-b-2 text-2xl border-green-400"
            >
              AstraLabs - Digital Agency
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
