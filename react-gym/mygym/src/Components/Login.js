import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import '../Styling/login.css';

const Login = () => {
  const [activeForm, setActiveForm] = useState('login');
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  const { name, email, password } = credentials;
  const response = await fetch(`http://localhost:5001/auth/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, password })
  });
  const json = await response.json();
  console.log(json);

  }


  const handleSubmit1 = async (e) => {
    e.preventDefault();

  const response = await fetch(`http://localhost:5001/auth/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email: credentials.email, password: credentials.password})
            });
  const json = await response.json();
  console.log(json);

  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const switchForm = (form) => {
    setActiveForm(form);
  };

  return (
    <>
      <section className="forms-section">
        <h1 className="section-title">Animated Forms</h1>
        <div className="forms">
          <div className={`form-wrapper ${activeForm === 'login' ? 'is-active' : ''}`}>
            <button
              type="button"
              className="switcher switcher-login"
              onClick={() => switchForm('login')}
            >
              Login
              <span className="underline"></span>
            </button>
            <form  onSubmit={handleSubmit1} className="form form-login">
              <fieldset>
                <legend>Please, enter your email and password for login.</legend>
                <div className="input-block">
                  <label htmlFor="login-email">E-mail</label>
                  <input name="email" id="email" onChange={onChange} type="email" required />
                </div>
                <div className="input-block">
                  <label htmlFor="login-password">Password</label>
                  <input id="password" name='password' type="password" onChange={onChange} required />
                </div>
              </fieldset>
              <button type="submit" className="btn-login">
                Login
              </button>
            </form>
          </div>

          <div className={`form-wrapper ${activeForm === 'signup' ? 'is-active' : ''}`}>
            <button
              type="button"
              className="switcher switcher-signup"
              onClick={() => switchForm('signup')}
            >
              Sign Up
              <span className="underline"></span>
            </button>
            <form  onSubmit={handleSubmit} className="form form-signup">
              <fieldset>
                <legend>
                  Please, enter your email, password, and password confirmation for sign up.
                </legend>
                <div className="input-block">
                  <label htmlFor="name">Name</label>
                  <input id="name" name='name'onChange={onChange} type="text" required />
                </div>
                <div className="input-block">
                  <label htmlFor="signup-email">E-mail</label>
                  <input id="email" name='email'onChange={onChange} type="email" required />
                </div>
                <div className="input-block">
                  <label htmlFor="signup-password">Password</label>
                  <input id="password" name="password" onChange={onChange}type="password" required />
                </div>
                <div className="input-block">
                  <label htmlFor="signup-password-confirm">Confirm password</label>
                  <input id="cpassword" type="password" name='password' onChange={onChange}required />
                </div>
              </fieldset>
              <button type="submit" className="btn-signup">
                Continue
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
