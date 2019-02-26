import React, { Component } from "react";
import "./Recipes.css";

class Recipes extends Component {
  onDelete(e) {
    console.log(e.target.id);
    this.props.onDelete(e.target.id);
  }

  render() {
    return (
      <div>
        <table>
          <tr>
            <th></th>
            <th>title</th>
            <th>cooking time</th>
            <th>description</th>
          </tr>
          {this.props.recipes.map(recipe => (
            <tr id={recipe.id}>
              <td>
              <button id={recipe.id} onClick={this.onDelete.bind(this)}>
                X
              </button>
              </td>
              <td>{recipe.title}{" "}</td>
              <td>{recipe.cook_time}{" "}</td>
              <td>{recipe.description}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default Recipes;
