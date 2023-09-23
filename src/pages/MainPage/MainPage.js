import React, { useEffect } from 'react';
import { setupParticles } from '../../utils/chiParticle'; // Import the setup function
import './MainPage.scss';

const MainPage = () => {
  useEffect(() => {
    const container = document.querySelector('.medi');
    const cleanup = setupParticles(container); // Setup particles and get the cleanup function

    return () => cleanup(); // Cleanup on unmount
  }, []);

  return (
    <div className='main-page'>
      <div className='medi'></div>
    </div>
  );
};

export default MainPage;
