import React, { Component } from "react";
import "./App.css";
// import fire from "../../util/firebase";
// import axios from "../../util/axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  ListGroupItemText
} from "reactstrap";

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

  componentDidMount() {
    return;
  }

  // getRecipes = () => {
  //   axios
  //     .get(`/recipes.json`)
  //     .then(recipe => {
  //       console.log(`Getting recipes...`);
  //       console.log(recipe.data);
  //       this.setState({
  //         recipes: recipe.data
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // addRecipes() {
  //   axios
  //     .post(`/recipes.json`, {
  //       name: "egg pancake",
  //       ingredients: ["egg", "pan"],
  //       description: "pan can cake",
  //       create_time: Date.now()
  //     })
  //     .then(response => {
  //       console.log(response.data);
  //     });
  // }

  render() {
    const { recipes } = this.state;
    return (
      <div>
        <AppRouter></AppRouter>
        <ListGroup className="recipe-list">
          {recipes.map(({ id, name }) => (
            <ListGroupItem key={id}> {name} </ListGroupItem>
          ))}

          {/* {this.addRecipes()} */}
        </ListGroup>
       

      </div>
    );
  }
}

export default App;
