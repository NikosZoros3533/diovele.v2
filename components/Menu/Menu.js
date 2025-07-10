"use client";
import { useState } from "react";
import MenuButton from "../MenuButton/MenuButton";
import { motion, AnimatePresence, stagger } from "framer-motion";
import Link from "next/link";
import "../Menu/Menu.css";

const ulVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1, // Reverse stagger on exit
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: 1, // Normal stagger on enter
    },
  },
};

const liVariants = {
  hidden: { opacity: 0, x: -30, transition: { duration: 0.1 } },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 200 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

export default function Menu() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function toggleMenu() {
    setIsMenuVisible((prevStateNavbar) => !prevStateNavbar);
  }

  return (
    <div className="menu-container">
      <MenuButton menuState={isMenuVisible} onClick={toggleMenu} />
      <AnimatePresence>
        {isMenuVisible && (
          <nav className="menu">
            <motion.ul
              className="menu-list"
              variants={ulVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <motion.li variants={liVariants}>
                <Link href="/" onClick={toggleMenu}>
                  Home
                </Link>
              </motion.li>
              <motion.li variants={liVariants}>
                <Link href="/couples" onClick={toggleMenu}>
                  Couples
                </Link>
              </motion.li>
              <motion.li variants={liVariants}>
                <Link href="/portraits" onClick={toggleMenu}>
                  Portraits
                </Link>
              </motion.li>
              <motion.li variants={liVariants}>
                <Link href="/food" onClick={toggleMenu}>
                  Food & Beverages
                </Link>
              </motion.li>
              <motion.li variants={liVariants}>
                <Link href="/studio-portraits" onClick={toggleMenu}>
                  Studio
                </Link>
              </motion.li>
              <motion.li variants={liVariants}>
                <Link href="/about" onClick={toggleMenu}>
                  About
                </Link>
              </motion.li>
              <motion.li variants={liVariants}>
                <Link href="/contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </motion.li>
            </motion.ul>
          </nav>
        )}
      </AnimatePresence>
    </div>
  );
}
