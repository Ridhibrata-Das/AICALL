import React from 'react';
import './Features.css';
import featureImg1 from '../../assets/feature1.svg';
import featureImg2 from '../../assets/feature2.svg';
import featureImg3 from '../../assets/feature3.svg';
import featureImg4 from '../../assets/feature4.svg';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "AI Recordings",
      description: "Leverage advanced AI technology to automatically record, transcribe, and analyze all your customer interactions. Get valuable insights and improve your service quality.",
      image: featureImg1,
      alt: "AI Recording Feature"
    },
    {
      id: 2,
      title: "IVR System",
      description: "Create intelligent voice response systems that streamline customer interactions. Our advanced IVR technology ensures efficient call routing and improved customer satisfaction.",
      image: featureImg2,
      alt: "IVR System Feature"
    },
    {
      id: 3,
      title: "Call Management",
      description: "Comprehensive call management system with real-time monitoring, call queuing, and advanced routing capabilities. Handle high call volumes with ease.",
      image: featureImg3,
      alt: "Call Management Feature"
    },
    {
      id: 4,
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your call center operations. Automate routine tasks and provide intelligent responses to common customer queries.",
      image: featureImg4,
      alt: "AI Integration Feature"
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={feature.id} className={`feature-item ${index % 2 === 0 ? 'feature-right' : 'feature-left'}`}>
            <div className="feature-content">
              <div className="feature-text">
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
                <button className="try-demo-btn">Try Demo</button>
              </div>
              <div className="feature-image">
                <img src={feature.image} alt={feature.alt} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
