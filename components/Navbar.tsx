
import { Home } from "lucide-react";
import { UserRound } from "lucide-react";
import { SiOnlyoffice } from "react-icons/si";
import { IoCodeSlash } from "react-icons/io5";
import { FaCodeMerge } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { X } from "lucide-react";


export function Navbar({
  onClick,
  toScroll,
  activeSection,
}: {
  onClick: () => void;
  toScroll: (section: string) => void;
  activeSection: string;
}) {
  return (
    <ul className="flex flex-col xl:trasnlate-y-[-50%] fixed right-5 xl:right-[68px] gap-[28px] px-4  top-[15%] z-20 justify-center items-center self-end py-12 mt-32 border border-solid bg-stone-900 border-zinc-600 rounded-[30px] max-md:mt-10">
      <li className="">
        <span>
          <Home
            size={32}
            className={` ${
              activeSection === "hero" ? " text-green-400 " : "text-white "
            } `}
            onClick={() => toScroll("hero")}
          />
        </span>
      </li>
      <li>
        <span>
          <UserRound
            className={` ${
              activeSection === "about" ? " text-green-400   " : "text-white"
            } `}
            size={32}
            onClick={() => toScroll("about")}
          />
        </span>
      </li>
      <li>
        <span>
          <SiOnlyoffice
            className={` ${
              activeSection === "education" ? "text-green-400  " : ""
            } `}
            size={32}
            onClick={() => toScroll("education")}
          />
        </span>
      </li>
      <li>
        <span>
          <MdOutlineMiscellaneousServices
            size={32}
            className={` ${
              activeSection === "service" ? "text-green-400  " : ""
            } `}
            onClick={() => toScroll("service")}
          />
        </span>
      </li>
      <li>
        <span>
          <IoCodeSlash
            className={` ${
              activeSection === "skills" ? "text-green-400  " : ""
            } `}
            size={32}
            onClick={() => toScroll("skills")}
          />
        </span>
      </li>
      <li>
        <span></span>
        <FaCodeMerge
          size={32}
          className={` ${
            activeSection === "portfolio" ? "text-green-400  " : ""
          } `}
          onClick={() => toScroll("portfolio")}
        />
      </li>
      <li>
        {" "}
        <span>
          <CiMail
            className={` ${
              activeSection === "contact" ? "  text-green-400   " : " "
            } `}
            size={32}
            onClick={() => toScroll("contact")}
          />{" "}
        </span>
      </li>
      <button className="md:hidden" onClick={onClick}>
        <X size={32} color="red" />
      </button>
    </ul>
  );
}
