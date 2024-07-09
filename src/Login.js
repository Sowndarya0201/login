import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const [role, setRole] = useState('jobseeker');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const renderForm = () => {
    return (
      <>
        <div className="input-group">
          <FaEnvelope className="input-icon" />
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="input-group">
          <FaLock className="input-icon" />
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
            />
            <span className="toggle-password" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="login-container">
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
      <div className="login-box">
        <h2>Log In</h2>

        <div className="role-selection">
          <button 
            className={`role-button ${role === 'jobseeker' ? 'active' : ''}`} 
            onClick={() => setRole('jobseeker')}
          >
            Job Seeker
          </button>
          <button 
            className={`role-button ${role === 'recruiter' ? 'active' : ''}`} 
            onClick={() => setRole('recruiter')}
          >
            Recruiter
          </button>
        </div>

        {renderForm()}

        <button className="login-button">Log In</button>

        <div className="social-icons">
          <a href="/auth/google" className="social-icon">
            <img src="https://www.transparentpng.com/thumb/google-logo/google-logo-png-icon-free-download-SUF63j.png" alt="Google" />
          </a>
          <a href="/auth/facebook" className="social-icon">
            <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-circle-512.png" alt="Facebook" />
          </a>
          <a href="/auth/linkedin" className="social-icon">
            <img src="https://static-00.iconduck.com/assets.00/linkedin-round-icon-2048x2048-iqy08mdc.png" alt="LinkedIn" />
          </a>
        </div>

        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

