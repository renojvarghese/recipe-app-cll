import React, { Component } from "react";

class Form extends Component {
  state = {
    formValues: {
      title: "",
      cook_time: "",
      description: "",
      ingredients_name: "",
      ingredients_quantity: "",
      ingredients_unit: ""
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
          <br/>
          <label>Ingredients: </label>
          <input
            name="ingredients_quantity"
            placeholder="quantity(~3)"
            onChange={this.handleTermChange.bind(this)}
          />
          <input
            name="ingredients_unit"
            placeholder="unit(~teaspoon)"
            onChange={this.handleTermChange.bind(this)}
          />
          of
          <input
            name="ingredients_name"
            placeholder="food_name(~milk)"
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
