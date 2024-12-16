import React from "react";
import { TextReveal } from "./TextReveal";

export const Header = () => {
  return (
    <div className="flex container items-center justify-between py-8 text-lg ">
      <div className="flex items-center gap-20">
        <TextReveal text="Home"></TextReveal>
        <TextReveal text="About"></TextReveal>
      </div>

      <TextReveal
        text="AMISH KUMAR"
        className="text-2xl font-semibold "
      ></TextReveal>
      <div className="flex items-center gap-20">
        <TextReveal text="Work"></TextReveal>
        <TextReveal text="Contact"></TextReveal>
        <a href="/file/resume.pdf" download>
          <TextReveal text="Resume"></TextReveal>
        </a>
      </div>
    </div>
  );
};
