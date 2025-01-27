import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import NavLink from "./NavLink";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
  <span className="logo">Creating a Responsive Navigation Menu</span>
  
  {/* hamburger menu */}
  <div className="hamburger" onClick={toggleMenu}>
    <div className={isOpen ? "line open" : "line"}></div>
    <div className={isOpen ? "line open" : "line"}></div>
    <div className={isOpen ? "line open" : "line"}></div>
  </div>

  <motion.div
    ref={menuRef}
    className={isOpen ? "menu open" : "menu"}
    initial={{ x: "100%" }}
    animate={{ x: isOpen ? 0 : "100%" }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    <NavLink to="/" label="Home" onClick={closeMenu} />
    <NavLink to="/about" label="About" onClick={closeMenu} />
    <NavLink to="/contact" label="Contact" onClick={closeMenu} />
  </motion.div>

      </div>
    </nav>
  );
};

export default Navbar;
