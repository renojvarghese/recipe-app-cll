import React, { Component } from 'react';
import MenuBtn from './MenuBtn';




export class Menu extends Component {  




    render(){
        return (
            <div className="menu-wrap">
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