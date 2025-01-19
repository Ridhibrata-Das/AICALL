import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How does AiCall's AI technology improve customer service?",
      answer: "AiCall uses advanced AI algorithms to analyze customer interactions, automate routine queries, and provide real-time insights. This results in faster response times, more accurate solutions, and improved customer satisfaction. Our AI system learns from each interaction to continuously enhance service quality."
    },
    {
      id: 2,
      question: "What kind of analytics and reporting features are available?",
      answer: "Our platform offers comprehensive analytics including call metrics, agent performance data, customer satisfaction scores, and trend analysis. You get real-time dashboards, customizable reports, and AI-driven insights to make informed decisions about your customer service operations."
    },
    {
      id: 3,
      question: "Is it easy to integrate AiCall with existing systems?",
      answer: "Yes! AiCall is designed for seamless integration with popular CRM systems, help desk software, and communication platforms. Our API-first approach and dedicated integration team ensure a smooth setup process, typically completed within days."
    },
    {
      id: 4,
      question: "What kind of support and training do you provide?",
      answer: "We offer comprehensive support including 24/7 technical assistance, detailed documentation, video tutorials, and personalized training sessions. Our customer success team works closely with you during onboarding and provides ongoing support to ensure maximum value from our platform."
    },
    {
      id: 5,
      question: "How secure is the AiCall platform?",
      answer: "Security is our top priority. We implement enterprise-grade encryption, regular security audits, and comply with industry standards (GDPR, HIPAA, etc.). All data is stored in secure, redundant data centers with continuous monitoring and backup systems."
    },
    {
      id: 6,
      question: "Can I customize the system according to my needs?",
      answer: "Absolutely! AiCall offers extensive customization options including branded interfaces, custom workflows, personalized AI responses, and tailored reporting. Our flexible platform adapts to your specific business requirements and can scale as your needs evolve."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about AiCall</p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                <svg
                  className="arrow-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 9L12 16L5 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="faq-answer">
                <div className="answer-content">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-footer">
          <p>Still have questions?</p>
          <button className="contact-support-btn">Contact Support</button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
