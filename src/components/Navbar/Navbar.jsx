import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import { getImageUrl } from "../../utils";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
      <nav className={styles.navbar}>
        <a className={styles.title} href="/">Resume</a>
        <div className={styles.menu}>
          <img className={styles.menuBtn} 
          src={
            menuOpen 
              ? getImageUrl("nav/closeIcon.png") 
              : getImageUrl("nav/menuIcon.png")
            } 
            onClick={() => setMenuOpen(!menuOpen)}
            alt="menu-button"/>
          <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}>
            <li>
              <a className="" href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;