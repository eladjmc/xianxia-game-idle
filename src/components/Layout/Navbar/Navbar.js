import React from 'react';
import { Link } from 'react-router-dom';
import { useGameHook } from '../../../hooks/useGameHook';  // Import the custom hook
import './Navbar.scss';
import { formatSpiritStones } from '../../../utils/utils';

const Navbar = () => {
  const { spiritStones } = useGameHook();  // Destructure spiritStones from the custom hook

  // Function to format the spiritStones number

  return (
    <div className="navbar">
      <div className="navbar-links">
        <Link to="/">Cultivate</Link>
      </div>
      <div className="spirit-stones">
        <span className="diamond-icon"></span> 
        {formatSpiritStones(spiritStones)}
      </div>
    </div>
  );
};

export default Navbar;
