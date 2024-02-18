import { motion } from "framer-motion";
import { useState } from "react";
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export function ToggleButton() {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <div
      className={`w-[160px] h-[100px] bg-slate-300 flex  rounded-[50px] p-2 cursor-pointer ${
        isOn ? " justify-end" : "justify-start"
      } `}
      data-isOn={isOn}
      onClick={toggleSwitch}
    >
      <motion.div
        className="w-[80px] h-[80px] bg-white rounded-[40px]"
        layout
        transition={spring}
      />
    </div>
  );
}
