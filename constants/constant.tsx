import { RiReactjsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { IconType } from "react-icons";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

export interface ServiceType {
  title: string;
  description: string;
  icon: string;
}

export const serviceDetails: ServiceType[] = [
  {
    title: "Frontend Development",
    description:
      "I create immersive user experiences using Next.js, React.js, and Tailwind CSS. Inspired by innovation, I turn concepts into captivating digital products. With seamless integration of aesthetics and functionality, I deliver visually stunning and intuitive web applications.",
    icon: "/frontend.png ",
  },
  {
    title: "Backend Development",
    description:
      "I specialize in backend development, utilizing tools such as Node.js, Express.js, and databases like SQL and MongoDB. From building robust APIs to managing data efficiently, I ensure seamless functionality and performance. Whether optimizing server-side processes or architecting scalable solutions, I leverage these tools to create reliable and secure backend systems that drive your application forward.",
    icon: "/backend.png ",
  },
  {
    title: "FullStack Development",
    description:
      "bacI provide end-to-end full-stack development services, leveraging top-notch tools like Next.js, React.js, Tailwind CSS, Node.js, Express.js, SQL, and MongoDB. From creating immersive user experiences to ensuring seamless functionality, I turn innovative ideas into visually stunning web applications. Whether you need robust APIs, efficient data management, or scalable solutions, my comprehensive approach drives your project forward.",
    icon: "/backend.png ",
  },
  
];

export const tools: { title: string; icon: IconType; color: string }[] = [
  {
    title: "JavaScript",
    icon: IoLogoJavascript,
    color: "#FDFD96",
  },
  {
    title: "HTML/CSS",
    icon: FaHtml5,
    color: "#FF6961",
  },

  {
    title: "ReactJs",
    icon: RiReactjsFill,
    color: "#1082a7",
  },
  {
    title: "NextJs",
    icon: TbBrandNextjs,
    color: "#ffffff",
  },

  {
    title: "ExpressJs,",
    icon: SiExpress,
    color: "#FFFFFF",
  },
  {
    title: "NodeJs",
    icon: FaNodeJs,
    color: "#8fc708",
  },
  {
    title: "Tailwindcss",
    icon: SiTailwindcss,
    color: "#1ebabd",
  },
  {
    title: "SQL",
    icon: SiMysql,
    color: "#f19317",
  },
  {
    title: "MongoDB",
    icon: SiMongodb,
    color: "#00a74a",
  },
  {
    title: "VS Code",
    icon: TbBrandVscode,
    color: "#2cacf3",
  },
  {
    title: "Git",
    icon: FaGitAlt,
    color: "#f15639",
  },
  {
    title: "GitHub",
    icon: FaGithub,
    color: "#000000",
  },
];
