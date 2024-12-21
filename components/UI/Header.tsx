import React, { useState } from "react";
import { TextReveal } from "./TextReveal";
import Link from "next/link";
import { Menu, Settings } from "lucide-react";
import { CustomPicker } from "./CustomPicker";
import { cn } from "@/util";
import { motion } from "framer-motion";

export const Header = () => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [isMobileMenuOpen, setIsMenuMobileOpen] = useState(false);
  return (
    <div className="flex max-sm:relative lg:container font-inter-medium  items-center justify-between py-8 text-lg text-primary-foreground ">
      <div className="relative lg:absolute left-6  z-[100] transition-transform   duration-200">
        <div
          onClick={() => setIsPickerOpen((prev) => !prev)}
          className="hover:scale-125"
        >
          <Settings className=" animate-spin " />
        </div>

        <CustomPicker
          className={cn(
            " absolute top-10 transition-transform duration-300 ease-in-out delay-75 ",
            isPickerOpen ? " translate-x-50 " : "-translate-x-[115%] "
          )}
        />
      </div>
      <div className="hidden lg:flex uppercase  items-center gap-10 ml-10 xl:gap-20">
        <Link href="/">
          <TextReveal text="Home" />
        </Link>
        <Link href="/about">
          <TextReveal text="About" />
        </Link>
      </div>

      <Link href="/">
        <TextReveal text="AMISH KUMAR" className="text-2xl font-semibold " />
      </Link>
      <div className="hidden lg:flex uppercase  items-center gap-10 xl:gap-20">
        <Link href="/work">
          <TextReveal text="Work" />
        </Link>
        <Link href="/contact">
          <TextReveal text="Contact" />
        </Link>
        <a href="/file/resume.pdf" download>
          <TextReveal text="Resume" />
        </a>
      </div>
      <div className=" flex relative max-sm:pr-4 lg:hidden">
        <Menu onClick={() => setIsMenuMobileOpen((prev) => !prev)} />
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isMobileMenuOpen
            ? { height: 160, opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          opacity: { delay: isMobileMenuOpen ? 0 : 0.2 },
        }}
        className=" md:hidden  absolute overflow-hidden drop-shadow-xl shadow-sm shadow-primary-foreground bg-primary-foreground bg-opacity-25  top-20  py-4  w-full flex items-center justify-center text-primary  h-full xl:hidden transition-transform duration-1000"
      >
        <motion.nav
          initial={{ opacity: 0 }}
          animate={isMobileMenuOpen ? { opacity: 1 } : { opacity: 0 }}
          className="uppercase flex  flex-col gap-2  text-2xl font-semibold items-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={
              isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
            }
          >
            <Link href="/work">
              <TextReveal className=" border-b-2 border-primary" text="Work" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={
              isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
            }
          >
            <Link href="/contact">
              <TextReveal
                className=" border-b-2 border-primary"
                text="Contact"
              />
            </Link>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, x: 0 }}
            animate={
              isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }
            }
            className=" border-b-2 border-primary"
            href="/file/resume.pdf"
            download
          >
            <TextReveal text="Resume" />
          </motion.a>
        </motion.nav>
      </motion.div>
    </div>
  );
};
