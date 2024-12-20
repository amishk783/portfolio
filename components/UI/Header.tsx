import React, { useState } from "react";
import { TextReveal } from "./TextReveal";
import Link from "next/link";
import { Menu, Settings } from "lucide-react";
import { CustomPicker } from "./CustomPicker";
import { cn } from "@/util";

export const Header = () => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  return (
    <div className="flex lg:container font-inter-medium  items-center justify-between py-8 text-lg text-primary-foreground ">
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
      <div className=" flex lg:hidden">
        <Menu />
      </div>
    </div>
  );
};
