"use client";
import Image from "next/image";
import bgImg from "@/public/images/bgImg.webp";
import { motion, useScroll, useTransform } from "framer-motion";

const labelVariants = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 30,
      mass: 0.2,
      delay: 0.3,
    },
  },
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yScale = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const y = useTransform(scrollYProgress, [0,0,0.4, 1], ["0vh","0vh","0vh", "-50vh"]);

  return (
    <div id="home">
      <Image src={bgImg} alt="background" className="bg-img" />
      <motion.label
        id="title"
        initial="hidden"
        animate="visible"
        variants={labelVariants}
        style={{ scale: yScale, y }}
      >
        DioVeLe
      </motion.label>
    </div>
  );
}
