import './AppTheme.css'
import React, { useState } from 'react';
import HeaderTheme from './components/theme/Header';
import MainTheme from './components/theme/Main';
import FooterTheme from './components/theme/Footer';
import { DarkModeContext } from './context/DarkModeContext';

function AppTheme(props) {

  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }


  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <HeaderTheme />
      <MainTheme />
      <FooterTheme />
    </DarkModeContext.Provider>
  );
}

export default AppTheme;