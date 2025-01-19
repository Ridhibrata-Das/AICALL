import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RoleSelection.css';
import adminIcon from '../../assets/icons/admin-icon.svg';
import userIcon from '../../assets/icons/user-icon.svg';
import agentIcon from '../../assets/icons/agent-icon.svg';

const RoleSelection = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [rememberRole, setRememberRole] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const navigate = useNavigate();

  const roles = [
    {
      id: 'admin',
      title: 'Admin',
      icon: adminIcon,
      color: '#1e40af',
      description: 'Manage your organizations call center operations',
      benefits: 'Take control of your call center with powerful management tools and real-time insights',
      responsibilities: [
        'Configure system settings',
        'Manage user access',
        'Monitor performance metrics',
        'Generate reports'
      ],
      path: '/admin/dashboard'
    },
    {
      id: 'user',
      title: 'User',
      icon: userIcon,
      color: '#059669',
      description: 'Access and utilize call center services',
      benefits: 'Experience seamless communication with AI-powered call handling',
      responsibilities: [
        'Make and receive calls',
        'Access call history',
        'Use AI features',
        'View personal analytics'
      ],
      path: '/user/dashboard'
    },
    {
      id: 'agent',
      title: 'Agent',
      icon: agentIcon,
      color: '#7c3aed',
      description: 'Handle customer interactions with AI assistance',
      benefits: 'Enhance your customer service with AI-powered insights and automation',
      responsibilities: [
        'Handle customer calls',
        'Use AI suggestions',
        'Track performance',
        'Manage queue'
      ],
      path: '/agent/dashboard'
    }
  ];

  const handleRoleSelect = (roleId) => {
    const selectedRoleData = roles.find(role => role.id === roleId);
    setSelectedRole(roleId);
    
    if (rememberRole) {
      localStorage.setItem('preferredRole', roleId);
    }

    // Navigate to the appropriate dashboard
    if (selectedRoleData) {
      navigate(selectedRoleData.path);
    }
  };

  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };

  return (
    <div className="role-selection">
      {/* Help Button */}
      <button 
        className="help-button"
        onClick={toggleHelp}
        aria-label="Help"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="help-icon">
          <circle cx="12" cy="12" r="10"/>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
          <line x1="12" y1="17" x2="12" y2="17"/>
        </svg>
      </button>

      {/* Help Modal */}
      {showHelp && (
        <div className="help-modal">
          <div className="help-content">
            <h3>Role Information</h3>
            <p>Choose the role that best fits your needs:</p>
            <ul>
              <li><strong>Admin:</strong> For organization managers and administrators</li>
              <li><strong>User:</strong> For general users of the call center services</li>
              <li><strong>Agent:</strong> For customer service representatives</li>
            </ul>
            <button onClick={toggleHelp} className="close-help">Close</button>
          </div>
        </div>
      )}

      <div className="role-selection-container">
        <h1>Choose Your Role</h1>
        <p className="subtitle">Select the role that best matches your needs</p>

        <div className="role-cards">
          {roles.map((role) => (
            <div 
              key={role.id}
              className={`role-card ${selectedRole === role.id ? 'selected' : ''}`}
              style={{'--card-color': role.color}}
            >
              <div className="card-content">
                <img src={role.icon} alt={`${role.title} icon`} className="role-icon" />
                <h2>{role.title}</h2>
                <p className="role-description">{role.description}</p>
                
                {/* Benefits Cloud */}
                <div className="benefits-cloud">
                  <p>{role.benefits}</p>
                </div>

                <div className="responsibilities">
                  <h3>Key Responsibilities:</h3>
                  <ul>
                    {role.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <button 
                  className="select-role-button"
                  onClick={() => handleRoleSelect(role.id)}
                >
                  Select {role.title}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="remember-selection">
          <label>
            <input
              type="checkbox"
              checked={rememberRole}
              onChange={(e) => setRememberRole(e.target.checked)}
            />
            Remember my selection for future visits
          </label>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
