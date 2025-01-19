import React from 'react';
import './TrustIndicators.css';
import company1 from '../../assets/companies/company1.svg';
import company2 from '../../assets/companies/company2.svg';
import company3 from '../../assets/companies/company3.svg';
import company4 from '../../assets/companies/company4.svg';
import company5 from '../../assets/companies/company5.svg';
import company6 from '../../assets/companies/company6.svg';
import company7 from '../../assets/companies/company7.svg';

const TrustIndicators = () => {
  const companies = [
    { id: 1, name: "TechCorp", logo: company1 },
    { id: 2, name: "InnovateAI", logo: company2 },
    { id: 3, name: "SmartSolutions", logo: company3 },
    { id: 4, name: "CloudTech", logo: company4 },
    { id: 5, name: "DataFlow", logo: company5 },
    { id: 6, name: "AIVentures", logo: company6 },
    { id: 7, name: "FutureServe", logo: company7 },
  ];

  return (
    <section className="trust-section">
      <div className="trust-container">
        <h3>TRUSTED BY GLOBAL BRANDS</h3>
        <div className="logo-scroll-container">
          <div className="logo-track">
            {/* First set of logos */}
            {companies.map((company) => (
              <div key={company.id} className="logo-item">
                <img src={company.logo} alt={company.name} />
              </div>
            ))}
            {/* Duplicate set for seamless scrolling */}
            {companies.map((company) => (
              <div key={`duplicate-${company.id}`} className="logo-item">
                <img src={company.logo} alt={company.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
