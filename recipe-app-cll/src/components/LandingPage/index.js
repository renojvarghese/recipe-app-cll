import React from "react";
import { Link } from 'react-router-dom';
import fire from "../../util/firebase";

export default class LandingPage extends React.Component {
    constructor() {
      super()

      this.authEmailPwd = this.authEmailPwd.bind(this)

      this.state = {
        email: "",
        password: "",
        loginStatus: 1,
        loginEmail: "",
        emailError: "",
        passwordError: ""
      }
    }
  
  authEmailPwd(event) {
    event.preventDefault()
    
    //const email = this.emailInput.value
    //const password = this.passwordInput.value

    console.log("Authenticate with password")
    console.table([{
      email: this.emailInput.value,
      password: this.passwordInput.value,
    }])

    fire
      .auth()
      .signInWithEmailAndPassword(this.emailInput.value, this.passwordInput.value)
      .then(u => {
        this.setState({
          email: "",
          password: "",
          loginStatus: 1,
          loginEmail: this.emailInput.value
        });
        console.log(`Login successful with ${this.emailInput.value}`);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleEmailChange = (event) => {
    this.setState({email: event.target.value}, () => {
      this.validateEmail();
      console.log('Email Change');
    });
  };

  validateEmail = () => {
    const { email } = this.state;
    this.setState({
      emailError:
        email.length > 5 ? null : 'Email must be longer than 5 characters'
    });
  }

    render() {
        return (
            <div>
                <div id="container">
                  <div className="left">
                    <h1>CoderCooks</h1>
                    <h2>Welcome to our app!</h2>
                    <h2>A collaborative effort from the CLL community 
                        looking to learn and develop a project we can call
                        our own.
                    </h2>
                  </div>
                  <div className="right">
                    <form onSubmit={(event) => this.authEmailPwd(event)}>
                      <div>
                        <input 
                          className="email" 
                          name="email" 
                          type="email" 
                          ref={(input) => {this.emailInput = input}} 
                          placeholder="Email Address"
                          onChange={this.handleEmailChange}
                          onBlur={this.validateEmail}>
                        </input>
                      </div>
                      <div>
                        <input 
                          className="password" 
                          name="password" 
                          type="password" 
                          ref={(input) => {this.passwordInput = input}} 
                          placeholder="Password"
                          onChange={this.handlePasswordChange}
                          onBlur={this.validatePassword}>
                        </input>
                      </div>
                      <div className='display-error'>{this.state.emailError}
                      </div>
                      <input className="signin-btn" type="submit" value="Sign In">
                      </input>  
                    </form>
                    <div className="links">
                      <p><Link to="../CreateAccount">Create Account</Link></p>
                      <p><Link to="../TermsConditions">Terms &amp; Conditions</Link></p>
                    </div>
                    <footer>Copyright 2019</footer>
                  </div>
                </div>
            </div>
        )
    }
}