import React, { useState, useEffect } from 'react';
import './signin.css';

import appleIcon from '../../assets/SignIn/apple-logo.svg';
import googleIcon from '../../assets/SignIn/google-logo.webp';
import fadeImg1 from '../../assets/SignIn/orange bottle.png'; 
import fadeImg2 from '../../assets/SignIn/yellow bottle.png'; 
import fadeImg3 from '../../assets/SignIn/red bottle.png'; 
import fadeImg4 from '../../assets/SignIn/green bottle.png'; 
import fadeImg5 from '../../assets/SignIn/purple bottle.png'; 

const SignInPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [currentFadeIdx, setCurrentFadeIdx] = useState(0);
  const fadeImages = [fadeImg1, fadeImg2, fadeImg3, fadeImg4, fadeImg5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFadeIdx((prev) => (prev + 1) % fadeImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [fadeImages.length]);

  return (
    <div className="v4-page-wrapper">
      <div className="fade-container">
        {fadeImages.map((img, index) => (
          <div key={index} className={`fade-slide ${index === currentFadeIdx ? 'active' : ''}`} style={{ backgroundImage: `url("${img}")` }} />
        ))}
        <div className="background-overlay" />
      </div>

      <nav className="auth-navbar">
        <div className="nav-logo">
          <span className="logo-text">Bowls <span>and</span> Bottles</span>
        </div>
      </nav>

      <main className="content-overlay">
        <section className="text-side">
          <div className="welcome-badge">Fresh, simple, secure</div>
          <h1 className="welcome-heading">
            Welcome <span className={`swinging-word ${isSignUp ? 'swing-out' : 'swing-in'}`}>back</span>
          </h1>
          <p className="welcome-subtext">Experience pure nature delivered to your doorstep.</p>
        </section>

        <section className="form-side">
          <div className="login-card-container">
            <div className="login-card clear-glass">
              <div className="card-header">
                <h2>{isSignUp ? 'Create your ' : 'Sign in to your '}<span>account</span></h2>
              </div>

              <form className="login-form">
                <div className="input-group">
                  <label>Email address</label>
                  <input type="email" placeholder="jane@example.com" />
                </div>

                <div className="input-group">
                  <label>{isSignUp ? 'Set password' : 'Password'}</label>
                  <input type="password" placeholder="••••••••" />
                </div>

                {isSignUp && (
                  <div className="input-group">
                    <label>Confirm password</label>
                    <input type="password" placeholder="••••••••" />
                  </div>
                )}

                <button type="submit" className="signin-button">
                  {isSignUp ? 'Create account' : 'Sign in to account'} →
                </button>

                <div className="divider"><span>OR CONTINUE WITH</span></div>

                <div className="social-buttons">
                  <button type="button" className="social-btn">
                    <img src={googleIcon} alt="Google" /> Continue with Google
                  </button>
                  <button type="button" className="social-btn">
                    <img src={appleIcon} alt="Apple" /> Continue with Apple
                  </button>
                </div>
              </form>
              
              <p className="signup-prompt">
                {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
                <a href="#" onClick={(e) => { e.preventDefault(); setIsSignUp(!isSignUp); }}>
                  {isSignUp ? 'Login' : 'Create an account'}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SignInPage;