import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import TrustIndicators from './components/TrustIndicators/TrustIndicators';
import ProductDemo from './components/ProductDemo/ProductDemo';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import RoleSelection from './pages/RoleSelection/RoleSelection';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import './App.css';

// Landing page component
const LandingPage = () => {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <Features />
      <ProductDemo />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/role-selection" element={<RoleSelection />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/login" element={<div>Login Page</div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
