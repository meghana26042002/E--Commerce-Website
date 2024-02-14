import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus, FaHeart, FaSearch } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.css';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">Exclusive</div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <Link to="/Home" className="nav-item">Home</Link>
                    <Link to="/Contact" className="nav-item">Contact</Link>
                    <Link to="/About" className="nav-item">About</Link>
                    <Link to="/Sign Up" className="nav-item">Sign Up</Link>
                </div>
                <div className="navbar-icons">
                    <div className="search-bar">
                        <input type="text" placeholder='What are looking for?' className="search-input" />
                        <FaSearch className="search-icon" />
                    </div>
                  <h1>  <FaHeart className="icon"/></h1>
                    <h1><FaCartPlus className="icon" /></h1>
                </div>
                <div className='nav-icon'onClick={handleShowNavbar}>
                <GiHamburgerMenu />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;