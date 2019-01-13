import React, { Component } from 'react';




export class Menu extends Component {    
    render(){
        return (
            <div class="menu-wrap">
            <div class="menu-sidebar">
                <ul class="menu">
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