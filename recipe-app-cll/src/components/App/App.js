import React, { Component } from "react";
import "./App.css";
// import fire from "../../util/firebase";
import axios from "../../util/axios";
// import "bootstrap/dist/css/bootstrap.min.css";

import Recipes from "../Recipes/Recipes";
import Form from "../Form/Form";
import Auth from "../Auth/Auth";

import AppRouter from "../AppRouter";

class App extends Component {
  state = {
    recipes: [
      { id: 1, name: "Omelet" },
      { id: 2, name: "Egg Benedict" },
      { id: 3, name: "Christmas Tree" },
      { id: 4, name: "ABC" }
    ]
  };

  componentWillMount() {
    // return;
    this.getRecipes();
  }

  getRecipes = () => {
    axios
      .get(`/recipes.json`)
      .then(res => {
        console.log(`Getting recipes...`);
        const recipes = [];
        for (let key in res.data) {
          recipes.push({
            ...res.data[key],
            id: key
          });
        }
        console.log(recipes);
        this.setState({
          recipes: recipes
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  addRecipes(formValues) {
    axios
      .post(`/recipes.json`, {        
        title: formValues.title,
        cook_time: formValues.cook_time,
        description: formValues.description
        // ingredients: ingredients
        // ingredients: {"name": "salt", "quantity": 2, "unit": "teaspoon"},
        // create_time: Date.now()eatable
      })
      .then(response => {
        console.log(response.data);
        this.getRecipes();
      });
  }

  deleteRecipe(id) {
    axios.delete(`/recipes/${id}.json`).then(res => {
      console.log(res);
      this.getRecipes();
    });
  }

  render() {
    const { recipes } = this.state;
    return (
      <div>
        <AppRouter />
        <Recipes recipes={recipes} onDelete={this.deleteRecipe.bind(this)} />
        <br />
        <Form addRecipes={this.addRecipes.bind(this)} />
        <br />
        <Auth />
      </div>
    );
  }
}

export default App;
