import React, { useState } from 'react';
import '../Styling/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const toggleNav = () => {
    const nav = document.getElementById('myTopnav');
    nav.classList.toggle('responsive');
  };

  return (
    <div>
      <div className="topnav" id="myTopnav">
        <Link to="/" className={`nav-link ${activeLink === '/' ? 'active' : ''}`} onClick={() => handleLinkClick('/')}>Home</Link>
        <Link to="/About" className={`nav-link ${activeLink === '/About' ? 'active' : ''}`} onClick={() => handleLinkClick('/About')}>About</Link>
        <Link to="/Contact" className={`nav-link ${activeLink === '/Contact' ? 'active' : ''}`} onClick={() => handleLinkClick('/Contact')}>Contact</Link>
        <Link to="/Pricing" className={`nav-link ${activeLink === '/Pricing' ? 'active' : ''}`} onClick={() => handleLinkClick('/Pricing')}>Plans</Link>
        <Link to="/Gallery" className={`nav-link ${activeLink === '/Gallery' ? 'active' : ''}`} onClick={() => handleLinkClick('/Gallery')}>Gallery</Link>
        <Link to="/Login" className={`nav-link ${activeLink === '/Login' ? 'active' : ''}`} onClick={() => handleLinkClick('/Login')}>Login</Link>

        <a href="javascript:void(0);" className="icon" onClick={toggleNav}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
