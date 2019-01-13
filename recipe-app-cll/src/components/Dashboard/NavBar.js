import React, { Component } from 'react';

export class NavBar extends Component {

    
    
    render() {
        return (
            <header className="nav-bar">
            <div className="nav">
                <div className="icon">
                    <span className="toggle-button menu">
                        <div className="menu-bar menu-bar-top"></div>
                        <div className="menu-bar menu-bar-middle"></div>
                        <div className="menu-bar menu-bar-bottom"></div>
                    </span>
                </div>
                <div>
                    <h2>Recipe App</h2>
                </div>
                <div>
                    <a href="./product.html"><button className="add">Add Recipe</button></a>
                </div>
            </div>
        </header>
        )
    }    
    
}

export default NavBar;