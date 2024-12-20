import React from "react";

interface Props {
  title: string;
  description: string;
  index: number;
}

export const ProcessWorkCard: React.FC<Props> = ({
  title,
  description,
  index,
}) => {
  return (
    <div className="  relative px-4  md:px-14 pt-14 flex flex-col gap-10 py-10 md:h-[425px] w-full lg:w-[800px] rounded-xl border-2 border-primary-foreground ">
      <h5 className=" text-3xl w-1/2  md:text-4xl ">{title}</h5>
      <p className=" text-lg md:text-2xl">{description}</p>
      <p className=" text-4xl xl:text-9xl absolute max-sm:top-14 max-sm:right-5  md:-bottom-6">0{index+1}</p>
    </div>
  );
};
