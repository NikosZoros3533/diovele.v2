"use client";
import { useState } from "react";
import MenuButton from "../MenuButton/MenuButton";
import Link from "next/link";
import "../Menu/Menu.css";


export default function Menu() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function toggleMenu() {
    setIsMenuVisible((prevStateNavbar) => !prevStateNavbar);
  }

  return <div className="menu-container">
    <MenuButton menuState={isMenuVisible} onClick={toggleMenu}/>
    {isMenuVisible && (
        <nav className="menu">
          <ul className="menu-list">
            <li>
              <Link href="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link href="/couples" onClick={toggleMenu}>Couples</Link>
            </li>
            <li>
              <Link href="/portraits" onClick={toggleMenu}>Portraits</Link>
            </li>
            <li>
              <Link href="/food" onClick={toggleMenu}>Food & Beverages</Link>
            </li>
            <li>
              <Link href="/studio-portraits" onClick={toggleMenu}>Studio</Link>
            </li>
            <li>
              <Link href="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li>
              <Link href="/contact" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </nav>
      )}
  </div>;
}
