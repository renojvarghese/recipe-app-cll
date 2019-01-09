import React, { Component } from "react";

class Form extends Component {
  state = {
    name: ""
  };

  handleTermChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit() {
    this.props.addRecipes(this.state.name);

    console.log("are we refreshing???");
  }

  render() {
    return (
      <div>
        <div className="InputForm">
          <input
            placeholder="maybe name?"
            onChange={this.handleTermChange.bind(this)}
          />
        </div>
        <div className="SubmitRecipe">
          <button onClick={this.handleSubmit.bind(this)}>
            Submit New Recipe!
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
