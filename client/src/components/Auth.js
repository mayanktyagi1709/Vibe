import React, { useState } from "react";
import Cookies from "universal-cookie";
// import axios from 'axios'
import signInImage from "../assets/signup.jpg";

const Auth = () => {
  const [form, setForm] = useState();
  const [isSignup, setIsSignup] = useState(true);
  const handleChange = () => {};
  
  const switchMode = () => {
    setIsSignup((prevSignup) => !prevSignup);
  };

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? "Sign Up" : "Sign In"}</p>
          <form onSubmit={() => {}}>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  required
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Username"
                name="username"
                required
                onChange={handleChange}
              />
            </div>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  required
                  onChange={handleChange}
                />
              </div>
            )}
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="avatarURL">Avatar URL</label>
                <input
                  type="text"
                  placeholder="Avatar URL"
                  name="Avatar URL"
                  required
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                onChange={handleChange}
              />
            </div>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  required
                  onChange={handleChange}
                />
              </div>
            )}
          </form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignup ? "Already have an account? " : "Don't have an account? "}
              <span onClick={switchMode}>{isSignup?"Sign In": "Sign Up"}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="auth__form-container_image">
        <img src={signInImage} alt="sign in"/>
      </div>
    </div>
  );
};

export default Auth;
