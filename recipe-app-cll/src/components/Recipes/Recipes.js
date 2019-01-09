import React, { Component } from "react";

class Recipes extends Component {
  onDelete(e) {
    console.log(e.target.id);
    this.props.onDelete(e.target.id);
  }

  render() {
    return (
      <div>
        {this.props.recipes.map(recipe => (
          <li id={recipe.id}>
            {" "}
            <button id={recipe.id} onClick={this.onDelete.bind(this)}>
              X
            </button>{" "}
            {recipe.recipe}{" "}
          </li>
        ))}
      </div>
    );
  }
}

export default Recipes;
