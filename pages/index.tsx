import { useEffect, useState } from "react";
import Image from "next/image";

import { Inter } from "next/font/google";
import { Sidebar } from "@/components/Sidebar";
import { Slider } from "@/components/Slider";
import { Navbar } from "@/components/Navbar";
import { ChevronLeftCircle } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
    <main className="relative bg-[#0e1630] max-sm:flex-col  ">
      {/* Position the sidebar */}

      <Sidebar />

      {/* Position the hero content */}

      <Slider />

      {!isMenuOpen && (                                                           //mobile menu logic
        <button
          className="md:hidden fixed  right-[-18px] top-[50%] text-green-300 "
          onClick={menuHandler}
        >
          <ChevronLeftCircle size={52} />
        </button>
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
    </main>
  );
}
