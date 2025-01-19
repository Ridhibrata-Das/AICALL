import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleTryNow = () => {
    navigate("/role-selection");  // Fixed navigation path
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Transform Your Customer Service with AI</h1>
          <p className="hero-subtitle">
            Elevate your call center operations with AI-powered insights, 
            automated responses, and intelligent call routing
          </p>
          <button className="hero-button" onClick={handleTryNow}>
            Try Now
          </button>
        </div>
        <div className="hero-image">
          {/* Your hero image/illustration */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
