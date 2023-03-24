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
    <header>
      <Link to='/' className="link">Coco Loko</Link>
      <nav>
        <ul>
          <li className="link">
            <Link to="/" className="link">
            Home
            </Link>
          </li>
          <li className="link">
            <Link to="/about" className="link">
            About
            </Link>
          </li>
          <li className="link">
            <Link to="/contact" className="link">
            Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;