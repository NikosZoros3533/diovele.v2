"use client";
import Image from "next/image";
import bgImg from "@/public/images/bgImg.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/dist/lenis-react";
import { Hero } from "@/components/ReactBits/SmoothHero";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yScale = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const y = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1],
    [0, 0, -10, -20, -30, -100, -200]
  );

  return (
    <>
      <div id="home">
        <Image src={bgImg} alt="background" className="bg-img" />
        <ReactLenis
          root
          options={{
            // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
            lerp: 0.07,
            //   infinite: true,
              syncTouch: true,
          }}
        >
          <motion.label
            id="title"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            style={{ scale: yScale, y }}
          >
            DioVeLe
          </motion.label>
          <Hero />
        </ReactLenis>
      </div>
    </>
  );
}
