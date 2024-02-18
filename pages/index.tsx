import { Fragment, useEffect, useState } from "react";

import { motion, useScroll } from "framer-motion";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/Sidebar";
import { Slider } from "@/components/Slider";
import { Navbar } from "@/components/Navbar";
import { ChevronLeftCircle } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSelection, setActiveSelection] = useState("");

  const menuHandler = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  const handleClickScroll = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSelection(section);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections: string[] = [
        "hero",
        "about",
        "education",
        "service",
        "skills",
        "portfolio",
        "contact",
      ];
      const scrollPosition = window.scrollY;
      const visibleSelection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (visibleSelection) {
        setActiveSelection(visibleSelection);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Fragment>
      <motion.main className="relative bg-[#0e1630] max-sm:flex-col   ">
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className=" bg-gradient-to-r from-rose-400 blur-sm via-fuchsia-500 to-indigo-500 opacity-100  z-50 w-full fixed top-0 left-0 animate-glowing  h-2 origin-[0%] duration-300 ease-out rounded-[30px]"
        ></motion.div>
        {/* Position the sidebar */}

        <Sidebar />

        {/* Position the hero content */}

        <Slider />

        {!isMenuOpen && ( //mobile menu logic
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="md:hidden fixed  right-[-18px] top-[50%] text-green-300 animate-pulse "
            onClick={menuHandler}
          >
            <ChevronLeftCircle size={52} />
          </motion.button>
        )}

        {isMenuOpen && (
          <Navbar
            onClick={menuHandler}
            toScroll={handleClickScroll}
            activeSection={activeSelection}
          />
        )}
        <div className="hidden md:block">
          <Navbar
            onClick={menuHandler}
            toScroll={handleClickScroll}
            activeSection={activeSelection}
          />
        </div>
        {/* <Navbar /> */}
        <div className="flex"></div>
      </motion.main>
    </Fragment>
  );
}
