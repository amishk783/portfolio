import React, { useState } from "react";
import { motion } from "framer-motion";
interface Props {
  text: string;
  className?: string;
}

export const TextReveal: React.FC<Props> = ({ text, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={` flex items-center flex-col overflow-hidden py-1  relative  ${className} `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ opacity: 1, translateY: 0 }}
        className=" w-full"
        animate={
          isHovered
            ? {  opacity: 0, translateY: -100 }
            : { opacity: 1, translateY: 0 }
        }
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {text}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, translateY: -10 }}
        animate={
          isHovered
            ? { opacity: 1, translateY: 0 }
            : {  opacity: 0, translateY: 50 }
        }
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className=" absolute w-full "
      >
        {text}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute h-[2px] left-0 right-0 bg-white origin-center"
        ></motion.div>
      </motion.div>
    </div>
  );
};
