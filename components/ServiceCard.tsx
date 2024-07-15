import { ServiceType } from "@/constants/constant";
import Image from "next/image";

export function ServiceCard({ title, description, icon }: ServiceType) {

  
  return (
    <div className=" flex flex-col border-[1px] border-solid border-[#565656] px-6  xl:px-12 py-11 mb-10 hover:border-green-500 rounded-[20px]">
      <div className="flex justify-between mb-5">
        <h3 className="mt-2 font-light text-white text-xl w-[20%] xl:w-full xl:text-2xl">{title}</h3>
        <Image className="" src={icon} alt="icon" width={50} height={20} />
      </div>
      <p className="text-sm xl:text-base">{description}</p>
    </div>
  );
}
