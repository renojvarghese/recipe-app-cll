import React, { Component } from "react";
import fire from "../../util/firebase";
require("firebase/auth"); // to prevent weird bugs by firebase

// log in to the app
class Auth extends Component {
  state = {
    email: "",
    password: "",
    loginStatus: 0,
    loginedEmail: ""
  };

  // update state with contents of input field
  handleTermChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    if (this.props.message) this.props.setMessage(""); // reset error message if there was one
  };

  // log in with form data
  login = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        this.setState({
          email: "",
          password: "",
          loginStatus: 1,
          loginedEmail: this.state.email
        });
        alert("Successful Login!");
      })
      .catch(error => {
        // this.props.setMessage(error.message);
        console.log(error);
        alert(error);
      });
  };

  render() {
    return (
      <div>
        <p>Login Status: {this.state.loginStatus ? "Yes" : "No"}</p>
        <p>User: {this.state.loginStatus ? this.state.loginedEmail : ""}</p>
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
          <button type="submit" onClick={e => this.login(e)}>
            Log in
          </button>
        </form>
      </div>
    );
  }
}

export default Auth;
