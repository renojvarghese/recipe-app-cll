import React from "react";
import fire from "../../util/firebase";
require("firebase/auth"); // to prevent weird bugs by firebase

export default class CreateAccount extends React.Component {
  state = {
    email: "",
    password: ""
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
        alert("Account Created!");
      })
      .catch(error => {
        console.log(error);
        alert(error);
      });
  };

  render() {
    return (
      <div>
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
      </div>
    );
  }
}
