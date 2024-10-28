import React, { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';

function Footer(props) {
  const { darkMode } = useContext(DarkModeContext);
  console.log('darkMode : ', darkMode);

  return (
    <footer className={`footer ${darkMode ? 'footer--dark' : 'footer--light'}`}>
      <p className="footer__text">푸터 컴포넌트</p>
    </footer>
  );
}

export default Footer;
