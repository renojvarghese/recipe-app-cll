import React from "react";
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> master
import fire from "../../util/firebase";
require("firebase/auth"); // to prevent weird bugs by firebase

export default class CreateAccount extends React.Component {
  state = {
    email: "",
<<<<<<< HEAD
    password: "",
    displaymsg: ""
=======
    password: ""
>>>>>>> master
  };

  // update state with contents of input field
  handleTermChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    if (this.props.message) this.props.setMessage(""); // reset error message if there was one
  };

  // create account
  createAccount = (e, email, password) => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
<<<<<<< HEAD
        /* alert("Account Created!"); */
        console.log('Account Created');
        this.setState({
          loginStatus: false,
          displaymsg: 'Your account has been successfully created.  Please sign in.'
        })
      })
      .catch(error => {
        console.log(error);
        /* alert(error); */
        this.setState({
            displaymsg: error.message
        });
=======
        alert("Account Created!");
      })
      .catch(error => {
        console.log(error);
        alert(error);
>>>>>>> master
      });
  };

  render() {
    return (
      <div>
<<<<<<< HEAD
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
            <h2>Create Your Account</h2>
            <h4>Save your personal receipes here.</h4>
            <form autoComplete="off">
            <input
              className="email"
              name="email"
              type="email"
              placeholder="Email Address"
              value={this.state.email}
              onChange={this.handleTermChange}
              /* onBlur={this.validateEmail} */>
            </input>
            <input
              className="password"
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleTermChange}
              /* onBlur={this.validatePassword} */ >
            </input>
            <div className="display-error">
              {this.state.displaymsg}
            </div>
            <input
              className="signin-btn"
              type="submit"
              value="Create Account"
              onClick={this.createAccount}
            >
            </input>
          </form>
          <div className="links">
            <p><Link to={"../"}>Sign In</Link></p>
          </div>
        </div>
      </div>
=======
        <h1>I am the Create Account Component</h1>
        <h2>Edit me from src/components/CreateAccount/index.js</h2>
        <h2>Edit my styles from src/components/App/App.css</h2>
        {/* content separator */}
        <br />
        <label>Create An Account :)</label>
        <form autoComplete="off">
          <input
            value={this.state.email}
            onChange={this.handleTermChange}
            type="email"
            name="email"
            placeholder="Email"
          />
          <br />
          <input
            value={this.state.password}
            onChange={this.handleTermChange}
            type="password"
            name="password"
            placeholder="Password"
          />
          <br />
          <button type="submit" onClick={this.createAccount}>
            Create
          </button>
        </form>
        <br />
>>>>>>> master
      </div>
    );
  }
}
