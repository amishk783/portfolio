import React from "react";
import Image from "next/image";
import { TextReveal } from "./TextReveal";
import { ArrowRight } from "lucide-react";

interface Props {
  imageUrl: string;
  title: string;
  stack: string[];
  githubLink: string;
  liveLink: string;
}
export const ProjectCard: React.FC<Props> = ({
  imageUrl,
  title,
  stack,
  githubLink,
  liveLink,
}) => {
  return (
    <div className=" w-full items-center justify-center font-inter-medium">
      <div className="w-full h-full flex flex-col gap-4">
        <div className=" h-[425px] rounded-xl overflow-hidden">
          <Image
            className=" w-full h-full rounded-md hover:scale-105 transition-transform duration-300 ease-in-out"
            src={imageUrl}
            width={600}
            height={500}
            alt="project image"
          />
        </div>

        <div className=" w-full px-2 ">
          <div className=" flex items-center justify-between">
            <h2 className=" text-3xl font-semibold">
              <TextReveal text={title} />
            </h2>
            <h2 className="flex items-center text-lg gap-2 text-white">
              View Project
              <span>
                <ArrowRight />
              </span>
            </h2>
          </div>
        </div>
        <div>
          {stack.map((tool, index) => (
            <p key={index}>
              {tool} <span>{index === stack.length ? "*" : ""}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
