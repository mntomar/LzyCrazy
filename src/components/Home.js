// src/components/LoginForm.js
import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaGoogle, FaFacebook, FaUser } from 'react-icons/fa';

const Home = () => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="login-container">
      {/* === LEFT SIDE === */}
      <div className="logo-side">
        <img src="https://lzycrazy.com/assets/lzy%20logo-Cl4gUC2f.jpg" alt="LzyCrazy Logo" className="logo-img" />
        <input type="text" placeholder="🔍 Search here..." className="search-box" />
        <div className="button-group">
  {[
    "About Us",
    "LzyCrazy Services",
    "LzyCrazy Marketplace",
    "We Are Hiring",
    "LzyCrazy News",
  ].map((label) => (
    <button key={label} className="pill-button">
      {label}
    </button>
  ))}
</div>
      </div>

      {/* === RIGHT SIDE: Conditional Form === */}
      <div className="form-side">
        {!showSignup ? (
          // === LOGIN FORM ===
          <form className="form">
            <div className="input-group">
              <FaEnvelope />
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="input-group">
              <FaLock />
              <input type="password" placeholder="Password" />
            </div>
            <div className="forgot">Forgot Password?</div>
            <button className="login-btn">Login</button>
            <hr />
            <p>or continue with</p>
            <div className="social-buttons">
              <button><FaGoogle /> Google</button>
              <button><FaFacebook /> Facebook</button>
            </div>
            <button
              type="button"
              className="signup-btn"
              onClick={() => setShowSignup(true)}
            >
              Create New Account
            </button>
          </form>
        ) : (
          // === SIGNUP FORM ===
          <form className="form">
            <div className="input-group">
              <FaUser />
              <input type="text" placeholder="Full Name" />
            </div>

            <div className="input-group">
              <img src="https://flagcdn.com/w40/in.png" width="20" alt="India" />
              <input type="text" value="+91" readOnly style={{ border: 'none', width: '50px' }} />
            </div>

            <div className="input-group">
              <FaEnvelope />
              <input type="email" placeholder="Email Address" />
            </div>

            <div className="input-group">
              <FaLock />
              <input type="password" placeholder="Password" />
            </div>

            <p style={{ fontSize: '0.9rem', margin: '1rem 0' }}>
              We may use your contact information to improve your experience. <a href="#">Learn more</a>
            </p>

            <p style={{ fontSize: '0.8rem' }}>
              By clicking Sign Up, you agree to our
              <a href="#"> Terms of Service</a>,
              <a href="#"> Privacy Policy</a>, and
              <a href="#"> Cookies Policy</a>.
            </p>

            <button className="login-btn">Signup</button>

            <p style={{ marginTop: '1rem', textAlign: 'center' }}>
              <button onClick={() => setShowSignup(false)} style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer' }}>
                Already have an account?
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Home;
