import React, { Component } from 'react';





export class Menu extends Component {  

    state = {

    }

    render(){

        const menuShow = this.props.hidden ? "menu-wrap" : "menu-wrap menu-show";

        return (

        <div className={menuShow}>
            <div className="menu-sidebar">
                <ul className="menu">
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./dashboard.html">Browse</a></li>
                    <li><a href="#">Account Settings</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
        )        

        
    }
}

export default Menu;
