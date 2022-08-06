import React from "react";
import { Link } from "react-router-dom";
import '../Css/Navbar.css';
const Navbar = () => {
  return (
    <div className="nav">
      <ul>
        <Link to="/"> Home</Link>
        <Link to="/add-book"> Add-Book</Link>
      </ul>
    </div>
  );
};

export default Navbar;
