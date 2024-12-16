import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PortfolioType } from "@/constants/constant";
import Link from "next/link";
import { Github, RadioTower } from "lucide-react";

interface Props {
  items: PortfolioType[];
}
export const StickyScrollRevel: React.FC<Props> = ({ items }) => {
  const ref = useRef(null);

  const [currentCard, setCurrentCard] = useState(0);
  console.log("🚀 ~ currentCard:", currentCard);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentCard) {
          video.play();
        } else {
          video.pause();
        }
      }
    });
  }, [currentCard]);

  const cardLength = items.length;

  // Listen for changes in the active card
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = items.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setCurrentCard(closestBreakpointIndex);
  });

  return (
    <div
      ref={ref}
      className="w-full flex h-[190vh]  will-change-scroll   relative space-x-10 rounded-md  "
    >
      <div className="  flex  xl:h-[400px]  top-0 w-full items-start px-4">
        <motion.div className="max-w-2xl h-[100vh]   ">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: currentCard === index ? 1 : 0.1,
              }}
              className={`my-40 h-[400px] w-[800px]   relative  `}
              style={{
                display: "flex",
              }}
            >
              <div className=" flex items-start flex-col p-10 gap-5 h-min font-syne  justify-center relative border-[1px]  border-white/30 border-solid w-full rounded-3xl origin-center  ">
                <div className="flex flex-col items-start relative">
                  <h1 className=" text-3xl font-semibold">{item.title}</h1>
                </div>
                <div className="">
                  <p className=" text-lg">{item.description}</p>
                </div>
                <div className=" flex items-center gap-4">
                  <Link href={item.githubLink}>
                    <Github size={30} />
                  </Link>
                  <Link
                    href={item.liveLink}
                    className=" hover:text-red-400 transition-colors duration-200 hover:scale-105"
                  >
                    <RadioTower size={30} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="hidden lg:block h-[800px] rounded-md  sticky top-10 ">
        <div className="w-full h-full relative flex items-center justify-center">
          <Image
            src="/placeholder.png"
            width={1000}
            height={700}
            className=" object-cover  object-right "
            alt="placeholder"
          />
          <div className=" flex w-full absolute items-center top-0 justify-center h-[67%] ">
            <div className="absolute  p-2 w-[372px]  rounded-3xl h-[272px] bg-white">
              {items.map((item, index) => (
                <video
                  key={index}
                  ref={(el) => (videoRefs.current[index] = el)} 
                  loop
                  muted
                  preload="auto"
                  playsInline
                  className={`cursor-none w-full h-full block object-cover rounded-xl object-center ${
                    currentCard === index ? "block" : "hidden"
                  }`}
                  src={item.videoLink}
                ></video>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
