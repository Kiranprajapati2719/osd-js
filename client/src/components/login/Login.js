import React, { Component } from 'react';
import './login.css';
import axios from 'axios';

export default class Login extends Component {

  state ={
    email: '',
    password: '',
    confirmPassword:'',
    username: '',
    error:'',
    task:''
  };

  handleSubmit = e => {
    e.preventDefault();
    const {username, password, confirmPassword, email, task} = this.state;
    if(task === 'signup'){
      if(password === confirmPassword){
        this.setState({error: ''});
        const user = {username, password, email};
        axios.post("/register",user)
        .then(res=>alert(res.data))
        .catch(err=>console.log(err.message)); 
      }else{
        this.setState({error: 'Password do not match'});
      }
    }else if(task === 'signin'){
      this.setState({error: ''});
      const user = {password, email};
      console.log(user);
      axios.post("/login",user)
      .then(res=>alert(res.data))
      .catch(err=>console.log(err.message));
    }
  };

  handleInput = e => {
    this.setState({[e.target.name]: e.target.value});
  };

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
            <form onSubmit={this.handleSubmit}>
              <h2>Create Account</h2>
              <input type="text" placeholder="Name" name="username" required onChange={this.handleInput}/>
              <input type="email" placeholder="Email" name="email" required onChange={this.handleInput}/>
              <input type="password" placeholder="Password" name="password" required onChange={this.handleInput} />
              <input type="password" placeholder="Confirm Password" name="confirmPassword" required onChange={this.handleInput} />
              {(this.state.error) ? <span> {this.state.error} </span>:null }
              <button type="submit" onClick={()=>this.setState({task: 'signup'})}>Register</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form onSubmit={this.handleSubmit}>
              <h2>Sign in</h2>
              <input type="email" placeholder="Email" name="email" required onChange={this.handleInput}/>
              <input type="password" placeholder="Password" name="password" required onChange={this.handleInput}/>
              <button type="submit"  onClick={()=>this.setState({task: 'signin'})}>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h2>Welcome Back!</h2>
                <p> To keep connected with us please login with your personal info</p>
                <button className="ghost" id="signIn">Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h2>Hello, Friend!</h2>
                <p>Enter your personal details  and start journey with us</p>
                <button className="ghost" id="signUp">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}   