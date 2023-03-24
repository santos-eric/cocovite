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
        <Link to="/" className="link">
          <h1>CocoLoko</h1>
        </Link>
        <Link to="/" className="link">
          <h4>Home</h4>
        </Link>
        <Link to="/about" className="link">
          <h4>About</h4>
        </Link>
        {/* Add Phone Icon */}
        <a href="tel:915-244-1865"className="phone-number">915-244-1865</a>
      </nav>
    </>
  );
};
export default Navbar;