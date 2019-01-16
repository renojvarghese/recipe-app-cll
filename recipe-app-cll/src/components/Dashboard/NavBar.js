import React, { Component } from 'react';
import MenuBtn from './MenuBtn';
export class NavBar extends Component {

    render() {

        return ( 
        <header className = "nav-bar" >
            <div className = "nav" >
                <div className="icon">
                    <MenuBtn></MenuBtn>
                </div>
                <div >
                    <h2 > Recipe App </h2> 
                </div> 
                <div>
                    <a href = "./product.html">< button className = "add"> Add Recipe </button></a>
                </div> 
            </div> 
        </header>
        )
    }

}

export default NavBar;