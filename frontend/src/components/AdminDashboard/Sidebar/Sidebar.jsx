import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      section: 'Useful',
      items: [
        { name: 'Dashboard', icon: '📊', path: '/admin/dashboard' },
        { name: 'Users', icon: '👥', path: '/admin/users' },
        { name: 'Plan', icon: '📋', path: '/admin/plan' },
        { name: 'Payment Gateway', icon: '💳', path: '/admin/payment' }
      ]
    },
    {
      section: 'Partnerships',
      items: [
        { name: 'Front Partner', icon: '🤝', path: '/admin/partners' },
        { name: 'Orders', icon: '📦', path: '/admin/orders' },
        { name: 'Leads', icon: '🎯', path: '/admin/leads' }
      ]
    },
    {
      section: 'Content Management',
      items: [
        { name: 'Manage Page', icon: '📝', path: '/admin/pages' },
        { name: 'Testimonial', icon: '💬', path: '/admin/testimonials' },
        { name: 'FAQ', icon: '❓', path: '/admin/faq' }
      ]
    },
    {
      section: 'Appearance & Settings',
      items: [
        { name: 'Web Theme', icon: '🎨', path: '/admin/theme' },
        { name: 'Web Config', icon: '⚙️', path: '/admin/config' },
        { name: 'SMTP Settings', icon: '📧', path: '/admin/smtp' },
        { name: 'Web Translation', icon: '🌐', path: '/admin/translation' }
      ]
    }
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <button className="toggle-button" onClick={toggleSidebar}>
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
        {!isCollapsed && <h2>Admin Panel</h2>}
      </div>

      <div className="sidebar-content">
        {menuItems.map((section, index) => (
          <div key={index} className="sidebar-section">
            {!isCollapsed && <h3 className="section-title">{section.section}</h3>}
            <ul className="section-items">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link
                    to={item.path}
                    className={`sidebar-item ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    <span className="item-icon">{item.icon}</span>
                    {!isCollapsed && <span className="item-name">{item.name}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="sidebar-footer">
        {!isCollapsed && (
          <div className="user-info">
            <div className="user-avatar">👤</div>
            <div className="user-details">
              <p className="user-name">Admin User</p>
              <p className="user-role">Super Admin</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
