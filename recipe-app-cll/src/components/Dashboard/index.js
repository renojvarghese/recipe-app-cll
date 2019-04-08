import React from "react";
import NavBar from "./containers/NavBar";
import Menu from "./components/Menu";
import CardContainer from "./containers/CardContainer";
import SearchButton from "./components/SearchButton";
import MenuBtn from "./components/MenuBtn";

import axios from "../../util/axios";



export default class Dashboard extends React.Component {

    state = {
        hidden: true, //menu
        clicked: false, //button
        recipes: [
            { id: 1, title: "Omelet" },
            { id: 2, title: "Egg Benedict" },
            { id: 3, title: "Christmas Tree" },
            { id: 4, title: "ABC" }
        ]
    }
    constructor(props) {
        super(props);
        this.toggleMenu.bind(this);
    }
    toggleMenu = () => {   
        this.setState({hidden: !this.state.hidden})
    }

    closeMenu = () => {
        this.setState({
            hidden : true,
            clicked : false
        })
    }

    componentWillMount() {
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

    deleteRecipe(id) {
        axios.delete(`/recipes/${id}.json`).then(res => {
          console.log(res);
          this.getRecipes();
        });
    }

    render() {
        const { recipes } = this.state;
        return(
            
            <div>
                <NavBar/>
                <MenuBtn toggleMenu={this.toggleMenu} closeMenu={this.closeMenu} hidden={this.state.hidden}></MenuBtn>                 
                <main>
                <Menu hidden={ this.state.hidden } toggleMenu={this.toggleMenu} closeMenu={this.closeMenu}></Menu>
                <SearchButton></SearchButton>
                <CardContainer recipes={recipes} onDelete={this.deleteRecipe.bind(this)}></CardContainer>
                </main>
            </div>
        )
    }
}