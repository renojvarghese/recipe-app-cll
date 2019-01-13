import React, { Component } from "react";
import "./App.css";
// import fire from "../../util/firebase";
import axios from "../../util/axios";
// import "bootstrap/dist/css/bootstrap.min.css";

import Recipes from "../Recipes/Recipes";
import Form from "../Form/Form";

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
        this.setState({
          recipes: recipes
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  addRecipes(name) {
    axios
      .post(`/recipes.json`, {
        recipe: name
        // ingredients: ["egg", "pan"],
        // description: "pan can cake",
        // create_time: Date.now()
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
        <AppRouter></AppRouter>
        {/*<Recipes recipes={recipes} onDelete={this.deleteRecipe.bind(this)} />
        <br />
    <Form addRecipes={this.addRecipes.bind(this)} />*/}
      </div>
    );
  }
}

export default App;
