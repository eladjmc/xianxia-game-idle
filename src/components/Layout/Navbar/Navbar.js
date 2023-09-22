import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';  

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <Link to="/">Cultivate</Link>
        {/* Add more links as you create more pages */}
      </div>
    </div>
  );
};

export default Navbar;
