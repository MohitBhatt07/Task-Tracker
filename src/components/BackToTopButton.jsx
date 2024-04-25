import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleUp, FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`fixed bottom-10 left-5 bg-indigo-700 hover:bg-indigo-600 text-white font-bold py-4 px-4 rounded-full shadow-md transition duration-300 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToTop}
    >
        <FaArrowUp  className='' size={30}/>
    </button>
  );
};

export default BackToTopButton;