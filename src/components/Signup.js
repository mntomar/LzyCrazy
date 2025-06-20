
// src/components/SignupForm.js
import React from 'react';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

const Signup = () => {
  return (
    <div className="form-side">
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
          <a href="/">Already have an account?</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
