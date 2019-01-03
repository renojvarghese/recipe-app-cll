import React, { Component } from "react";
import "./App.css";
import fire from "../../util/firebase";
import axios from "../../util/axios";

class App extends Component {
  state = {
    recipes: [
      { id: 1, name: "Omelet" },
      { id: 2, name: "Egg Benedict" },
      { id: 3, name: "Christmas Tree" },
      { id: 4, name: "ABC" }
    ]
  };

  componentDidMount() {
    this.getRecipes();
    // data = Object.keys(data).map(key => data[key]);
    // const l = [];
    // data.forEach(ss => {
    //   l.push(ss.child("name").val());
    // });
    // this.state.data = data;
  }

  getRecipes = () => {
    axios
      .get(`/recipes.json`)
      .then(recipe => {
        console.log(`Getting recipes...`);
        console.log(recipe);
        this.setState({ recipes: Object.values(recipe.data) });
        // this.setState({
        //   recipes: recipe.data
        // });
        // return recipe.data;
      })
      .catch(err => {
        console.log(err);
      });
  };

  addRecipes() {
    axios
      .post(`/recipes.json`, {
        name: "egg pancake",
        ingredients: ["egg", "pan"],
        description: "pan can cake",
        create_time: Date.now()
      })
      .then(response => {
        console.log(response.data);
      });
  }

  render() {
    const { recipes } = this.state;
    return (
      <div className="recipe-list">
        {recipes.map(({ id, recipe }) => (
          <li key={recipe}> {recipe} </li>
        ))}

        {/* {this.addRecipes()} */}
      </div>
    );
  }
}

export default App;
