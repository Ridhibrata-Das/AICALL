import React from 'react';
import './Testimonials.css';
import testimonial1 from '../../assets/testimonials/testimonial1.svg';
import testimonial2 from '../../assets/testimonials/testimonial2.svg';
import testimonial3 from '../../assets/testimonials/testimonial3.svg';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Thompson",
      role: "Customer Service Director",
      company: "TechCorp Solutions",
      image: testimonial1,
      quote: "AiCall has revolutionized our customer service operations. The AI-powered features have improved our response times by 60% and customer satisfaction scores have never been higher.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Operations Manager",
      company: "Global Innovations",
      image: testimonial2,
      quote: "The analytics and reporting features are exceptional. We can now make data-driven decisions that have significantly improved our call center efficiency.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Head of Support",
      company: "CloudServe Inc",
      image: testimonial3,
      quote: "Implementation was seamless, and the support team was incredible. Our agents love the intuitive interface, and our customers appreciate the improved service quality.",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <svg
        key={index}
        className="star-icon"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>What Our Clients Say</h2>
          <p>Trusted by leading companies worldwide</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <blockquote className="testimonial-quote">
                "{testimonial.quote}"
              </blockquote>
              <div className="testimonial-author">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="author-image"
                />
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                  <p className="company-name">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
