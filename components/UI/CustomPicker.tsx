import { cn } from "@/util";
import React, { useState } from "react";
import { backgroundVideoLinks } from "@/constants/constant";
import { useTheme } from "@/components/Provider/ThemeProvider";
interface Props {
  className?: string;
}

export const CustomPicker: React.FC<Props> = ({ className }) => {
  const { updateBackgroundLink } = useTheme();

  const updateColor = (primary: string, foreground: string) => {
    console.log("🚀 ~ updateColor ~ value:", primary);
    document.documentElement.style.setProperty("--primary", primary);
    document.documentElement.style.setProperty(
      "--primary-foreground",
      foreground
    );
  };

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div
      className={cn(
        " w-80 md:w-96 h-min bg-primary-foreground text-primary font-inter-medium px-4  py-4 rounded-xl",
        className
      )}
    >
      <div className=" flex flex-col gap-6 py-2">
        <h2 className=" text-2xl">Configuration</h2>

        <div className="flex flex-col ">
          <h2 className=" text-2xl">Colors</h2>
          <div className=" flex gap-4 py-2">
            <div
              onClick={() => updateColor("#000000", "#fff")}
              className="w-6 h-6  bg-black rounded-full border-2 border-white"
            ></div>
            <div
              onClick={() => updateColor("#ffffff", "#000000")}
              className="w-6 h-6 bg-white rounded-full border-2 border-black"
            ></div>
            <div
              onClick={() => updateColor("#0e1630", "#ffffff")}
              className="w-6 h-6 bg-[#0e1630] rounded-full"
            ></div>
            <div
              onClick={() => updateColor("#581c87", "#ffffff")}
              className="w-6 h-6  bg-purple-900 rounded-full"
            ></div>
          </div>
        </div>
        <div className="flex flex-col gap-4  ">
          <h2 className=" text-2xl">Background</h2>
          <div className=" md:text-xl flex gap-2 md:gap-4 flex-wrap py-2">
            {backgroundVideoLinks.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  updateBackgroundLink(item.url);
                  setActiveIndex(index);
                }}
                className={cn(
                  " px-4 md:px-6 py-2  rounded-full border-2",
                  activeIndex === index
                    ? " border-primary "
                    : " border-transparent "
                )}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
