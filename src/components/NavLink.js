import React from "react";
import { Link } from "react-router-dom";
import "./NavLink.css"; 

const NavLink = ({ to, label, onClick }) => {
  return (
    <Link to={to} onClick={onClick} className="nav-link">
      {label}
    </Link>
  );
};

export default NavLink;
