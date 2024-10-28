import React, { createContext, useState } from 'react';

export const DarkModeContext = createContext(true);

export const DarkModeProvider = ({ initDarkMode, children }) => {
  const [darkMode, setDarkMode] = useState(initDarkMode);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
