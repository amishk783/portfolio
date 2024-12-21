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
import { SiTypescript } from "react-icons/si";
import { IoLogoDocker } from "react-icons/io5";
import { TbBrandRedux } from "react-icons/tb";
import { DiNginx } from "react-icons/di";

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
    icon: "/frontend.png",
  },
  {
    title: "Backend Development",
    description:
      "I specialize in backend development, utilizing tools such as Node.js, Express.js, and databases like SQL and MongoDB. From building robust APIs to managing data efficiently, I ensure seamless functionality and performance. Whether optimizing server-side processes or architecting scalable solutions, I leverage these tools to create reliable and secure backend systems that drive your application forward.",
    icon: "/backend.png",
  },
  {
    title: "FullStack Development",
    description:
      "I provide end-to-end full-stack development services, leveraging top-notch tools like Next.js, React.js, Tailwind CSS, Node.js, Express.js, SQL, and MongoDB. From creating immersive user experiences to ensuring seamless functionality, I turn innovative ideas into visually stunning web applications. Whether you need robust APIs, efficient data management, or scalable solutions, my comprehensive approach drives your project forward.",
    icon: "/backend.png",
  },
];

export const tools: { title: string; icon: IconType; color: string }[] = [
  {
    title: "JavaScript",
    icon: IoLogoJavascript,
    color: "#FDFD96",
  },
  {
    title: "TypeScript",
    icon: SiTypescript,
    color: "#2f74c0",
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
    title: "Tailwindcss",
    icon: SiTailwindcss,
    color: "#1ebabd",
  },
  {
    title: "Redux",
    icon: TbBrandRedux,
    color: "#7248b6",
  },

  {
    title: "NodeJs",
    icon: FaNodeJs,
    color: "#8fc708",
  },
  {
    title: "ExpressJs,",
    icon: SiExpress,
    color: "#FFFFFF",
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
  {
    title: "Nginx",
    icon: DiNginx,
    color: "#019137",
  },
  {
    title: "Docker",
    icon: IoLogoDocker,
    color: "#FFFFFF",
  },
];

export interface PortfolioType {
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
  videoLink: string;
}
export const portfolioItems: PortfolioType[] = [
  {
    title: "Pecunia",
    description:
      "A finance tracking app that allows users to manage budgets, track expenses, and visualize financial data with real-time updates.",
    githubLink: "https://github.com/amisk783/pecunia",
    liveLink: "https://app.pecunia.fyi/",
    videoLink: "/video/portfolio/portfolio1.mp4",
  },
  {
    title: "VideoFusion",
    description:
      "An interactive video platform where users can create, edit, and share video content with dynamic Framer Motion animations.",
    githubLink: "https://github.com/amisk783/videoFusion",
    liveLink: "https://video-fusion.vercel.app/",
    videoLink: "/video/portfolio/portfolio2.mp4",
  },
  {
    title: "Kollab",
    description:
      "A collaborative task management tool inspired by Kanban boards, featuring real-time updates, drag-and-drop functionality, and user permissions.",
    githubLink: "https://github.com/amisk783/crewtrello",
    liveLink: "https://crewtrello.vercel.app",
    videoLink: "/video/portfolio/portfolio3.mp4",
  },
];

interface ProjectsType {
  imageUrl: string;
  title: string;
  stack: string[];
  githubLink: string;
  liveLink: string;
}

export const projectLinks: ProjectsType[] = [
  {
    imageUrl: "/project/project1.png",
    title: "Pecunia",
    stack: [],
    githubLink: "https://github.com/amisk783/pecunia",
    liveLink: "https://app.pecunia.fyi/",
  },
  {
    imageUrl: "/project/project2.png",
    title: "VideoFusion",
    stack: [],
    githubLink: "https://github.com/amisk783/videoFusion",
    liveLink: "https://video-fusion.vercel.app/",
  },
  {
    imageUrl: "/project/project3.png",
    title: "Kollab",
    stack: [],
    githubLink: "https://github.com/amisk783/crewtrello",
    liveLink: "https://crewtrello.vercel.app",
  },
  {
    imageUrl: "/project/project4.png",
    title: "DigitalAgency",
    stack: [],
    githubLink: "https://github.com/amisk783/digitalagency",
    liveLink: "digitalagency-eight.vercel.app",
  },
];

export const faqContent = [
  {
    question: "How do I start a project with you ?",
    answer:
      "First, you can reach out to me through the contact form or email. We'll schedule an initial meeting to discuss your needs and plan the project together.",
  },
  {
    question: "What is the cost of your services ?",
    answer:
      "The cost of my projects varies depending on the type of service and project complexity. I'll provide a cost estimate after understanding your requirements.",
  },
  {
    question: "How much time is typically needed to finish a project ?",
    answer:
      "The timeline for project completion also varies depending on its complexity. I'll establish a realistic work schedule during the project planning phase.",
  },
  {
    question: "What sets you apart from your competitors?",
    answer:
      "I approach each project with a focus on innovative, creative, and solution-oriented design. I also prioritize client satisfaction above all and always strive to deliver the best results",
  },
  {
    question: "How can I contact you to initiate a project ?",
    answer:
      "You can reach me through the contact form on my website or by sending an email to the address listed on the contact page.",
  },
  {
    question: "Do you provide free consultations ?",
    answer:
      "Yes, I typically offer a free initial consultation to discuss your project and how I can assist you in achieving your design goals.",
  },
];

export const workProcess = [
  {
    title: "REQUEST PROJECT",
    description:
      "It all starts with your project request. I listen carefully to understand what you need and your ideas. Your ideas are my inspiration, and understanding your goals is my top priority.",
  },
  {
    title: "STRATEGY SESSION",
    description:
      "In this step, creativity takes center stage. I delve into brainstorming sessions to conceptualize your project. This is where I explore innovative solutions and artistic approaches to bring your vision to life.",
  },
  {
    title: "STRATEGY SESSION",
    description:
      "In this step, creativity takes center stage. I delve into brainstorming sessions to conceptualize your project. This is where I explore innovative solutions and artistic approaches to bring your vision to life.",
  },
  {
    title: "DESIGN & DEVELOPMENT",
    description:
      "With a clear concept in mind, we move to the design phase. This is where I weave together visual elements, user-friendly interfaces, and all the creative components that will make your project stand out. ",
  },
  {
    title: "FEEDBACK",
    description:
      "Your feedback is invaluable. I present the design work to you for your input. I'm dedicated to collaboration and will make revisions as necessary to ensure the final product aligns perfectly with your artistic vision.",
  },
  {
    title: " LAUNCH",
    description:
      "After your approval, it's time to release your project to the world. I handle all the technical details, ensuring a seamless launch. Your project is introduced to the public, where it will inspire and engage.",
  },
];

export const excperience = [
  {
    date: "August 2022 - Novemeber 2023",
    company: "Sphinx Computers",
    role: "React Intern",
    description:
      "Optimized website performance by implementing lazy loading and advanced techniques, achieving a 20% reduction in page load time and enhancing user experience. Leveraged WordPress, React.js, and CSS to design intuitive user interfaces, boosting engagement by 25%. Additionally, developed a personalized page tailored to customized configurations, driving a 30% increase in user footfall.",
  },
  {
    date: "August 2022 - October 2022",
    company: "NITI Aayog",
    role: "SDE Intern",
    description:
      "Engineered Python scripts to automate data analysis and reporting, saving an hour of manual work per task and significantly enhancing operational efficiency. Developed a streamlined algorithm for identifying the 'School of the Month' for ATL selection across India, reducing evaluation time by 50%",
  },
];

export const backgroundVideoLinks = [
  {
    title: "Earth Lines",
    url: "/background/video1.mp4",
  },
  {
    title: "Abstract Ball",
    url: "/background/video2.mp4",
  },
  {
    title: "Wave",
    url: "/background/video3.mp4",
  },
  {
    title: "Liquids Wavy",
    url: "/background/video4.mp4",
  },

  {
    title: "Space Trek",
    url: "/background/video6.mp4",
  },
  {
    title: "Tunnel",
    url: "/background/video7.mp4",
  },
  {
    title: "Ghost Ball",
    url: "/background/video9.mp4",
  },
  {
    title: "None",
    url: "",
  },
];
