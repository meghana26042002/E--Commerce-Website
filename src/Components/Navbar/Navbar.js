import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart, FaHeart } from 'react-icons/fa'; // Importing Font Awesome icons
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  // State variable to track whether the menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggles the value of isOpen
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Brand/logo */}
        <Link className="navbar-brand">Exclusive</Link>

        {/* Hamburger icon */}
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu items */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link  to="/Home" className="nav-link " aria-current="page" >Home</Link>
            </li>
            <li className="nav-item">
              <Link  to="/Contact"className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <Link  to="/About" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link  to="/Sign Up" className="nav-link">Sign up</Link>
            </li>
          </ul>

          {/* Search form */}
          <form className="d-flex me-3">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          {/* Icons */}
          <div className="d-flex align-items-center">
            <span><FaHeart size={"24px"} gap={"1rem"}/></span>
            <span><FaShoppingCart size={"24px"} gap={"1rem"} /></span>
          </div>
        </div>
        </div>
    </nav>
    
  );
}

export default Navbar;