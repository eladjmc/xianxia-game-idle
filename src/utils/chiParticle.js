export const setupParticles = (container) => {
    const createParticle = () => {
      const chiParticle = document.createElement('div');
      chiParticle.classList.add('chi-particle');
  
      const centerX = container.clientWidth / 2;
      const centerY = container.clientHeight / 2;
  
      let radius = 110; // Adjust this value as needed
      let angle = Math.random() * 2 * Math.PI;
  
      let x = centerX + radius * Math.cos(angle);
      let y = centerY + radius * Math.sin(angle);
  
      let size = Math.random() * 18 + 5;
      chiParticle.style.width = `${size}px`;
      chiParticle.style.height = `${size}px`;
  
      chiParticle.style.left = `${x}px`;
      chiParticle.style.top = `${y}px`;
  
      container.appendChild(chiParticle);
  
      const spiralSpeed = 0.02;
      const moveSpeed = 2;
  
      const moveParticle = () => {
        angle += spiralSpeed;
        radius -= moveSpeed;
        size *= 0.99; // Reduce size by 1% each frame
  
        x = centerX + radius * Math.cos(angle);
        y = centerY + radius * Math.sin(angle);
  
        chiParticle.style.left = `${x}px`;
        chiParticle.style.top = `${y}px`;
        chiParticle.style.width = `${size}px`;
        chiParticle.style.height = `${size}px`;
  
        if (radius > 0 && size > 0.5) {
          requestAnimationFrame(moveParticle);
        } else {
          chiParticle.remove();
        }
      };
  
      moveParticle();
    };
  
    const intervalId = setInterval(() => {
      const chiParticleCount = Math.floor(Math.random() * 7) + 1;
      for (let i = 0; i < chiParticleCount; i++) {
        createParticle();
      }
    }, 500);
  
    return () => clearInterval(intervalId); // Return cleanup function
  };
  