"use client";
import Image from "next/image";
import bgImg from "@/public/images/bgImg.webp";
import {  motion } from "framer-motion";

const labelVariants = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 70,
      mass: 0.5,
      delay: 0.3,
    },
  },
};

export default function Home() {
  return (
    <div id="home">
      <Image src={bgImg} alt="background" className="bg-img" />
      <motion.label
        id="title"
        initial="hidden"
        animate="visible"
        variants={labelVariants}
      >
        DioVeLe
      </motion.label>
    </div>
  );
}
