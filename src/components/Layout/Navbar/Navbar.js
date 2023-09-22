import React from 'react';
import { Link } from 'react-router-dom';
import { useGameHook } from '../../../hooks/useGameHook';  // Import the custom hook
import './Navbar.scss';

const Navbar = () => {
  const { spiritStones } = useGameHook();  // Destructure spiritStones from the custom hook

  // Function to format the spiritStones number
  const formatSpiritStones = (num) => {
    if (num < 1000) return num;
    const units = ['k', 'M', 'B', 'T'];
    const unit = Math.floor((num.toFixed(0).length - 1) / 3) * 3;
    const numStr = (num / ('1e' + unit)).toFixed(2);
    const unitStr = units[Math.floor(unit / 3) - 1];
    return `${numStr}${unitStr}`;
  };

  return (
    <div className="navbar">
      <div className="navbar-links">
        <Link to="/">Cultivate</Link>
        {/* Add more links as you create more pages */}
      </div>
      <div className="spirit-stones">
        <span className="diamond-icon"></span> {/* Replace with your actual diamond icon */}
        {formatSpiritStones(spiritStones)}
      </div>
    </div>
  );
};

export default Navbar;
