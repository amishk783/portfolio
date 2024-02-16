import { Inter } from "next/font/google";
import clsx from "clsx";
import Image from "next/image";
const interFont = Inter({ subsets: ["latin"] });

export function Portfolio() {
  return (
    <section>
      <div id="portfolio" className="pt-24 xl:pt-10 xl:mt-20">
        <div
          className={clsx(
            " max-w-[135px] px-11 py-3.5 text-sm font-light leading-4 text-white uppercase whitespace-nowrap border border-solid border-neutral-600 rounded-[30px] max-md:px-5",
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
      </div>
      <div className=" flex flex-wrap mt-4">
        <div className=" opacity-[1] flex-auto w-full">
          <div className=" mb-16">
            <div className="h-[460px] overflow-hidden rounded-[30px] relative mb-7">
              <a>
                <Image
                  className="block w-full h-full object-cover"
                  src="/portfolio1.jpg"
                  alt="portfolio"
                  width={400}
                  height={100}
                />
              </a>
              <ul className=" absolute flex flex-wrap gap-3 items-center bottom-5 left-10  list-none">
                <li>
                  <a className="block text-sm bg-white  text-black rounded-2xl px-5 py-2">
                    Wordpress
                  </a>
                </li>
                <li>
                  <a className="block text-sm bg-white  text-black rounded-2xl px-5 py-2">
                    React Js
                  </a>
                </li>
              </ul>
            </div>
            <h3 className=" text-2xl font-light">
              Bureau - Architecture Studio Website
            </h3>
          </div>
        </div>
        <div className=" opacity-[1] flex-grow-0 flex-shrink-0 basis-auto  w-full xl:w-1/2 pr-6 pl-2 ">
          <div className=" mb-16">
            <div className="h-[410px] overflow-hidden rounded-[30px] relative mb-7">
              <a>
                <Image
                  className="block w-full h-full object-cover"
                  src="/portfolio2.jpg"
                  alt="portfolio"
                  width={400}
                  height={100}
                />
              </a>
              <ul className=" absolute flex flex-wrap gap-3 items-center bottom-5 left-10  list-none">
                <li>
                  <a className="block text-sm bg-white  text-black rounded-2xl px-5 py-2">
                    Wordpress
                  </a>
                </li>
                <li>
                  <a className="block text-sm bg-white  text-black rounded-2xl px-5 py-2">
                    React Js
                  </a>
                </li>
              </ul>
            </div>
            <h3 className=" text-2xl font-light">Moonex WordPress Theme</h3>
          </div>
        </div>
        <div className=" opacity-[1] flex-grow-0 flex-shrink-0 basis-auto w-full xl:w-1/2 pr-2 pl-4">
          <div className=" mb-16">
            <div className="h-[410px] overflow-hidden rounded-[30px] relative mb-7">
              <a>
                <Image
                  className="block w-full h-full object-cover"
                  src="/portfolio2.jpg"
                  alt="portfolio"
                  width={400}
                  height={100}
                />
              </a>
              <ul className=" absolute flex flex-wrap gap-3 items-center bottom-5 left-10  list-none">
                <li>
                  <a className="block text-sm bg-white  text-black rounded-2xl px-5 py-2">
                    Wordpress
                  </a>
                </li>
                <li>
                  <a className="block text-sm bg-white  text-black rounded-2xl px-5 py-2">
                    React Js
                  </a>
                </li>
              </ul>
            </div>
            <h3 className=" text-2xl font-light">Moonex WordPress Theme</h3>
          </div>
        </div>
        <div className=" opacity-[1] flex-auto w-full pr-2">
          <div className=" mb-16">
            <div className="h-[460px] overflow-hidden rounded-[30px] relative mb-7">
              <a>
                <Image
                  className="block w-full h-full object-cover"
                  src="/portfolio1.jpg"
                  alt="portfolio"
                  width={400}
                  height={100}
                />
              </a>
              <ul className=" absolute flex flex-wrap gap-3 items-center bottom-5 left-10  list-none">
                <li>
                  <a className="block text-sm bg-white  text-black rounded-2xl px-5 py-2">
                    Wordpress
                  </a>
                </li>
                <li>
                  <a className="block text-sm bg-white  text-black rounded-2xl px-5 py-2">
                    React Js
                  </a>
                </li>
              </ul>
            </div>
            <h3 className=" text-2xl font-light">
              Bureau - Architecture Studio Website
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
