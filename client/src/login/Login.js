import React, { Component } from 'react';
import './login.css';

export default class Login extends Component {

  render() {
    return (
      <div className="parent">
        <div className="container" id="container">
          <div className="form-container sign-up-container">

          </div>
          <div className="form-container sign-in-container">

          </div>
          <div className="overlay-container">

          </div>
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Register</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forgot your password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
            </p>
                <button className="ghost" id="signIn">Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" id="signUp">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}   