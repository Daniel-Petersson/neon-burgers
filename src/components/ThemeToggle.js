import React from 'react';
import '../styles/ThemeToggle.css';

const ThemeToggle = ({ toggleTheme, isDarkTheme }) => {
  return (
    <div className="theme-toggle">
      <button className="btn btn-secondary" onClick={toggleTheme}>
        Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
      </button>
    </div>
  );
};

export default ThemeToggle;
