import React, { useState, useEffect, useRef } from "react"; // React features for state, effects, and references
import { motion } from "framer-motion"; // For smooth animations
import NavLink from "./NavLink"; // my custom reusable NavLink component
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track if the hamburger menu is open
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu(); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // add event listener for mouse clicks
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMenu(); // Close the menu if the screen is resized to larger than 768px
      }
    };

    window.addEventListener("resize", handleResize); // Add resize listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
  <span className="logo">Creating a Responsive Navigation Menu</span>
  
  
  <div className="hamburger" onClick={toggleMenu}>
    <div className={isOpen ? "line open" : "line"}></div>
    <div className={isOpen ? "line open" : "line"}></div>
    <div className={isOpen ? "line open" : "line"}></div>
  </div>

 {/* Animated menu container */}
  <motion.div
    ref={menuRef}
    className={isOpen ? "menu open" : "menu"}
    initial={{ x: "100%" }}  // Initial position (off the screen to the right)
    animate={{ x: isOpen ? 0 : "100%" }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    {/* Navigation links */}
    <NavLink to="/" label="Home" onClick={closeMenu} />
    <NavLink to="/about" label="About" onClick={closeMenu} />
    <NavLink to="/contact" label="Contact" onClick={closeMenu} />
  </motion.div>

      </div>
    </nav>
  );
};

export default Navbar;
