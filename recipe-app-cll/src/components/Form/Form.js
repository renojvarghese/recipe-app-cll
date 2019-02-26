import React, { Component } from "react";

class Form extends Component {
  state = {
    formValues: {
      title: "",
      cook_time: "",
      description: "",
      // ingredients_name: "",
      // ingredients_quantity: "",
      // ingredients_unit: ""
    }
  };

  handleTermChange(e) {
    let formValues = this.state.formValues;
    let name = e.target.name;
    let value = e.target.value;
    formValues[name] = value;

    this.setState({ formValues });
  }

  handleSubmit() {
    this.props.addRecipes(this.state.formValues);

    console.log("are we refreshing???");
  }

  render() {
    return (
      <div>
        <div className="InputForm">
          <label>Title: </label>
          <input
            name="title"
            placeholder="title"
            onChange={this.handleTermChange.bind(this)}
          />
          <label>Cook Time: </label>
          <input
            name="cook_time"
            placeholder="cook_time"
            onChange={this.handleTermChange.bind(this)}
          />
          <label>Description: </label>
          <input
            name="description"
            placeholder="description"
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
