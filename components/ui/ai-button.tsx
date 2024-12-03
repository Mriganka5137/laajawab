"use client";
import { motion } from "framer-motion";

interface AIButtonProps {
  classname?: string;
  text?: string;
  href?: string;
}
const AIButton = ({ classname, href, text }: AIButtonProps) => {
  return (
    <button className="text-white font-medium px-3 py-2 rounded-md overflow-hidden relative transition-transform hover:scale-105 active:scale-95">
      <span className="relative z-10 font-sans  tracking-widest">{text}</span>
      <motion.div
        initial={{ left: 0 }}
        animate={{ left: "-300%" }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 4,
          ease: "linear",
        }}
        className="bg-[linear-gradient(to_right,#ff4500,#ff8c00,#ffd700)] absolute z-0 inset-0 w-[400%]"
      ></motion.div>
    </button>
  );
};

export default AIButton;
