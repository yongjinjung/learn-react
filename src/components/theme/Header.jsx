import React, { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';

function Header(props) {

  const {darkMode, toggleDarkMode} =  useContext(DarkModeContext);
  return (
    <header className={`header ${darkMode ? 'header--dark' : 'header--light'}`}> 
      <h1 className="header__title">헤더 컴포넌트</h1>
      <button className="header__button" onClick={toggleDarkMode}>
        {darkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
      </button>
    </header>
  );
}

export default Header;