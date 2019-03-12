import React, { Component } from "react";
import "./Recipes.css";

class Recipes extends Component {
  onDelete(e) {
    console.log(e.target.id);
    this.props.onDelete(e.target.id);
  }

  renderIngredients(ing) {
    return (
      ing.map((element, _) =>
        <p>ing.ingredients_name, ing.ingredients_quantity, ing.ingredients_unit</p>)
      
    )
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
            <th>Ingredients</th>
            <th>Cooking Instructions</th>
            <th>Tags</th>
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
              <td>{JSON.stringify(recipe.ingredients)}</td>            
              <td>{this.renderIngredients(recipe.ingredients)}</td>            
              <td>{recipe.instructions}</td>
              <td>{recipe.tags}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default Recipes;
