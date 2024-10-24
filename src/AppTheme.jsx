import './AppTheme.css'
import React, { useState } from 'react';
import HeaderTheme from './components/theme/Header';
import MainTheme from './components/theme/Main';
import FooterTheme from './components/theme/Footer';
import { DarkModeProvider } from './context/DarkModeContext';

function AppTheme(props) {

 

  return (
    <DarkModeProvider initDarkMode={false}>
      <HeaderTheme />
      <MainTheme />
      <FooterTheme />
    </DarkModeProvider>
  );
}

export default AppTheme;