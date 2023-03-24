import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import '../styles/navbar.sass'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (
    <>
      <div className="mobile-menu-bar">
        <Link to="/" className="link">
          <img src="logo48.png" alt="logo" />
        </Link>
        <HiOutlineMenu className="menu-icon" size="30" onClick={handleClick} />
      </div>
      <nav className={isActive ? "open" : null}>
        <a href="/">Coco Loko</a>
        <ul>
          <li className="link">
            <Link to="/" className="link">
            <h4>Home</h4>
            </Link>
          </li>
          <li className="link">
            <Link to="/about" className="link">
            <h4>About</h4>
            </Link>
          </li>
          <li className="link">
            <Link to="/contact" className="link">
            <h4>Contact</h4>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;