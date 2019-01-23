import React, { Component } from 'react';





export class Menu extends Component {  

            state = {
                visible: false,
            }

            toggleMenu = ()=> {
                this.setState({visble: !this.state.visble})
            }

            showMenu = ()=> {
                if (this.state.visible){
                    return "menu-wrap menu-show"
                } else {
                    return "menu-wrap"
                }
            }

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
