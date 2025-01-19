import React, { useState } from 'react';
import './CTA.css';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the email submission
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="cta-section">
      {/* Main CTA */}
      <div className="cta-container main-cta">
        <div className="cta-content">
          <h2>Transform Your Customer Service Today</h2>
          <p>Join thousands of businesses revolutionizing their customer experience with AI-powered solutions.</p>
          <div className="cta-buttons">
            <button className="cta-button primary">Start Free Trial</button>
            <button className="cta-button secondary">Schedule Demo</button>
          </div>
          <div className="cta-features">
            <div className="feature">
              <svg className="feature-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>14-day free trial</span>
            </div>
            <div className="feature">
              <svg className="feature-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="feature">
              <svg className="feature-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="cta-container newsletter-cta">
        <div className="newsletter-content">
          <h3>Stay Updated with AiCall</h3>
          <p>Get the latest updates, news, and special offers directly to your inbox.</p>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              <button type="submit">Subscribe</button>
            </div>
            {isSubmitted && (
              <div className="success-message">
                Thanks for subscribing! 🎉
              </div>
            )}
            <p className="privacy-note">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </form>
        </div>
      </div>

      {/* Contact Sales CTA */}
      <div className="cta-container contact-cta">
        <div className="contact-content">
          <div className="contact-text">
            <h3>Need a Custom Solution?</h3>
            <p>Our team is ready to help you find the perfect solution for your business needs.</p>
          </div>
          <button className="contact-button">
            Contact Sales
            <svg className="arrow-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
