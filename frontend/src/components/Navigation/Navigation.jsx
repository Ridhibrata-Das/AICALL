import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import logo from '../../assets/logo.svg';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Hide navigation on role selection page
  if (location.pathname === '/role-selection') {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = {
    product: {
      label: 'Product',
      items: [
        { label: 'Features', href: '#features' },
        { label: 'Solutions', href: '#solutions' },
        { label: 'Enterprise', href: '#enterprise' },
        { label: 'Security', href: '#security' },
      ]
    },
    resources: {
      label: 'Resources',
      items: [
        { label: 'Documentation', href: '#docs' },
        { label: 'API Reference', href: '#api' },
        { label: 'Guides', href: '#guides' },
        { label: 'Case Studies', href: '#cases' },
      ]
    },
    company: {
      label: 'Company',
      items: [
        { label: 'About', href: '#about' },
        { label: 'Careers', href: '#careers' },
        { label: 'Blog', href: '#blog' },
        { label: 'Press', href: '#press' },
      ]
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (key) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <img src={logo} alt="AiCall Logo" />
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-button ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {/* Main Menu Items */}
          <div className="main-menu">
            {Object.entries(menuItems).map(([key, item]) => (
              <div 
                key={key} 
                className="menu-item"
                onMouseEnter={() => !isMenuOpen && toggleDropdown(key)}
                onMouseLeave={() => !isMenuOpen && toggleDropdown(null)}
              >
                <button 
                  className={`menu-button ${activeDropdown === key ? 'active' : ''}`}
                  onClick={() => isMenuOpen && toggleDropdown(key)}
                >
                  {item.label}
                  <svg
                    className={`arrow-icon ${activeDropdown === key ? 'active' : ''}`}
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M2 4L6 8L10 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className={`dropdown-menu ${activeDropdown === key ? 'active' : ''}`}>
                  {item.items.map((subItem, index) => (
                    <a
                      key={index}
                      href={subItem.href}
                      className="dropdown-item"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="nav-actions">
            <Link to="/login" className="nav-button secondary">Log In</Link>
            <Link to="/role-selection" className="nav-button primary">Start Free Trial</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
