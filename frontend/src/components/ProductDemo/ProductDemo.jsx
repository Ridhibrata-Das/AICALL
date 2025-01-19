import React, { useState } from 'react';
import './ProductDemo.css';
import dashboardImage from '../../assets/dashboard-preview.svg';
import analyticsImage from '../../assets/analytics-preview.svg';
import callsImage from '../../assets/calls-preview.svg';

const ProductDemo = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const demoTabs = [
    {
      id: 'dashboard',
      title: 'Intuitive Dashboard',
      description: 'Get a complete overview of your call center operations with our intuitive dashboard. Monitor real-time metrics, agent performance, and call analytics at a glance.',
      image: dashboardImage
    },
    {
      id: 'analytics',
      title: 'Advanced Analytics',
      description: 'Dive deep into your call center data with comprehensive analytics. Track KPIs, identify trends, and make data-driven decisions to improve performance.',
      image: analyticsImage
    },
    {
      id: 'calls',
      title: 'Call Management',
      description: 'Efficiently manage all your calls with our advanced call routing system. Monitor active calls, view call history, and optimize your call flow in real-time.',
      image: callsImage
    }
  ];

  const activeDemo = demoTabs.find(tab => tab.id === activeTab);

  return (
    <section className="product-demo-section">
      <div className="product-demo-container">
        <div className="demo-header">
          <h2>Experience the Future of Call Centers</h2>
          <p>See how AiCall transforms your customer service operations</p>
        </div>

        <div className="demo-content">
          <div className="demo-tabs">
            {demoTabs.map((tab) => (
              <button
                key={tab.id}
                className={`demo-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <h3>{tab.title}</h3>
                <p>{tab.description}</p>
              </button>
            ))}
          </div>

          <div className="demo-preview">
            <div className="preview-container">
              <img 
                src={activeDemo.image} 
                alt={activeDemo.title}
                className="preview-image"
              />
              <div className="preview-overlay">
                <div className="browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="demo-cta">
          <button className="demo-button">Schedule a Demo</button>
          <p>See the full platform in action • 30 min</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;
