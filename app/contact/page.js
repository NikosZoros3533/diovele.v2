'use client';
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
      <motion.div
        style={{ width: 150, height: 150, background: "purple" }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "circOut" }}
      ></motion.div>
    </div>
  );
}
