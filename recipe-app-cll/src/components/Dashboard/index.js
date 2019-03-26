import React from "react";
import NavBar from "./containers/NavBar";
import Menu from "./components/Menu";
import CardContainer from "./containers/CardContainer";
import SearchButton from "./components/SearchButton";
import MenuBtn from "./components/MenuBtn";



export default class Dashboard extends React.Component {

    state = {
        hidden: true, //menu
        clicked: false //button
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

    render() {
        return(
            
            <div>
                <NavBar/>
                <MenuBtn toggleMenu={this.toggleMenu} closeMenu={this.closeMenu} hidden={this.state.hidden}></MenuBtn>                 
                <main>
                <Menu hidden={ this.state.hidden } toggleMenu={this.toggleMenu} closeMenu={this.closeMenu}></Menu>
                <SearchButton></SearchButton>
                <CardContainer></CardContainer>
                </main>
            </div>
        )
    }
}