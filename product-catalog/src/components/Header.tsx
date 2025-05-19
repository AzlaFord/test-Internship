import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <header className="main-header">
      <div className="header-top">
        <div className="logo" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>ENCORE <span className="logo-custom">Custom</span></div>
        <div className="header-icons">
          <span className="icon" onClick={() => navigate('/cart')} style={{ cursor: 'pointer' }}>🛒</span>
          <span className="icon">👤</span>
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 