import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/interfaces/Home.jpg';
import mobileBackgroundImage from '../../assets/interfaces/home_resp.jpg';

const HomePage = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleSkip = (e) => {
      if (!isMobile && (e.code === 'Enter' || e.type === 'touchstart')) {
        navigate('/backstory_1');
      }
    };

    window.addEventListener('keydown', handleSkip);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleSkip);
    };
  }, [navigate, isMobile]);

  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${isMobile ? mobileBackgroundImage : backgroundImage})` }}
    >
      {!isMobile && (
        <div
          className='font-[Seagram] bottom-5 text-5xl w-full flex items-center justify-center fixed'
          style={{
            color: '#EFA34F',
            WebkitTextStroke: '6px black',
            paintOrder: 'stroke',
            letterSpacing: '0.54rem',
          }}
        >
          Press Enter To Proceed
        </div>
      )}
      {isMobile && (
        <button
          onClick={() => navigate('/backstory_1')}
          className="fixed bottom-5 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-2xl tracking-wide rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 border-2 border-white"
        >
          Proceed
        </button>
      )}
    </div>
  );
};

export default HomePage;