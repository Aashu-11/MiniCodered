import React, { useEffect, useState } from 'react';
import backgroundImage from '../../assets/interfaces/final.jpg';
import mobileBackgroundImage from '../../assets/interfaces/final_resp.jpg';

const FinalPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${isMobile ? mobileBackgroundImage : backgroundImage})` }}
    >
    </div>
  );
};

export default FinalPage;