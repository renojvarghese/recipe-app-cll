import React, { Component } from 'react';

export class NavBar extends Component {

    render() {

        return ( 
        <header className = "nav-bar" >
                <div >
                    <h2 > Recipe App </h2> 
                </div> 
                <div>
                    <a href = "./product.html">< button className = "add"> Add Recipe </button></a>
                </div> 
        </header>
        )
    }

}

export default NavBar;