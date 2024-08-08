import React from 'react';
import '../styles/Header.css';


const Header = ({ toggleTheme, isDarkTheme }) => {
  return (
    <header className="app-header">
      <button className="btn btn-link theme-toggle-btn" onClick={toggleTheme}>
        <i className={`bi ${isDarkTheme ? 'bi-sun' : 'bi-moon'}`}></i>
      </button>
      <h1 className="app-title">
        <span className="metal raise">Neeon</span><br />
        <span className="metal raise">Burgers</span>
      </h1>
      <h2 className="app-subtitle">The Future of Fast Food</h2>
    </header>
  );
};

export default Header;