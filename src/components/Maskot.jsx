import React, { useEffect, useState } from 'react';
import '../style/Maskot.css';

const Mascot = ({ eyeColor }) => { // Ambil eyeColor sebagai prop
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const mascot = document.querySelector('.mascot');
      const mascotRect = mascot.getBoundingClientRect();

      const eyeX = clientX - mascotRect.left - mascotRect.width / 2;
      const eyeY = clientY - mascotRect.top - mascotRect.height / 2;

      const angle = Math.atan2(eyeY, eyeX);
      const distance = Math.min(20, Math.sqrt(eyeX ** 2 + eyeY ** 2)); // Batas maksimum pergerakan mata
      setEyePosition({
        x: distance * Math.cos(angle),
        y: distance * Math.sin(angle),
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="mascot">
      <div className="face">
        <div
          className="eye"
          style={{
            backgroundColor: eyeColor, // Gunakan eyeColor dari props
            transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
          }}
        ></div>
        <div
          className="eye"
          style={{
            backgroundColor: eyeColor, // Gunakan eyeColor dari props
            transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Mascot;
