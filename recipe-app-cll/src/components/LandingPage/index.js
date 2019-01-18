import React from "react";
import { Link } from 'react-router-dom';

export default class LandingPage extends React.Component {
    render() {
        return (
            <div>
                { /*
                <h1>I am the Landing Page Component</h1>
                <h2>Edit me from src/components/LandingPage/index.js</h2>
                <h2>Edit my styles from src/components/App/App.css</h2>
                */ }
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
                    <form>
                      <div>
                        <input className="email" name="email" type="email" ref={(input) => {this.emailInput = input}} placeholder="Email Address"></input>
                      </div>
                      <div>
                        <input className="password" name="password" type="password" ref={(input) => {this.passwordInput = input}} placeholder="Password"></input>
                      </div>
                      <input className="signin-btn" type="submit" value="Sign In"></input>  
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