import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import Users from './Users/Users';
import './AdminDashboard.css';

// Placeholder components for other routes
const Dashboard = () => <div className="admin-content">Dashboard Overview</div>;
const Plan = () => <div className="admin-content">Plan Management</div>;
const Payment = () => <div className="admin-content">Payment Gateway</div>;
const Partners = () => <div className="admin-content">Front Partner Management</div>;
const Orders = () => <div className="admin-content">Orders Management</div>;
const Leads = () => <div className="admin-content">Leads Management</div>;
const Pages = () => <div className="admin-content">Page Management</div>;
const Testimonials = () => <div className="admin-content">Testimonials Management</div>;
const FAQ = () => <div className="admin-content">FAQ Management</div>;
const Theme = () => <div className="admin-content">Web Theme Settings</div>;
const Config = () => <div className="admin-content">Web Configuration</div>;
const SMTP = () => <div className="admin-content">SMTP Settings</div>;
const Translation = () => <div className="admin-content">Web Translation</div>;

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/theme" element={<Theme />} />
          <Route path="/config" element={<Config />} />
          <Route path="/smtp" element={<SMTP />} />
          <Route path="/translation" element={<Translation />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
