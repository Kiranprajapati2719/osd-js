import React, { Component } from 'react';
import './login.css';

export default class Login extends Component {

  render() {
    return (

      <div>
        <div className='bold'></div>
        <div className='container'>
          <div className='window'>
            <div className='overlay'></div>
            <div className='content'>
              <div className='welcome'>Login</div>
              <div className='input-fields'>
                <input type='email' placeholder='Email' className='input-line full-width' required></input>
                <input type='password' placeholder='Password' className='input-line full-width' required></input>

              </div>
              <div><button className='button full-width'>Login</button></div>
            </div>
          </div>
        </div>

      </div>

    );
  }
}   