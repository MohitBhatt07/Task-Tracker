import axios from "axios";
import { createContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
 
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, DarkModeProvider };
