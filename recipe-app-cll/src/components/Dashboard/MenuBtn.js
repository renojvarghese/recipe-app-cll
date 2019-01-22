import React, { Component } from 'react';
import BarTop from './components/BarTop';
import BarMid from './components/BarMid';
import BarBot from './components/BarBot';



export class MenuBtn extends Component {

    state={
        clicked: false
    }


    toggleBtn = ()=> {
        this.setState({clicked: !this.state.clicked})
    }

    setStyleMenu = ()=> {
        
        if(this.state.clicked){
            return "toggle-button menu button-open"
        } else {
            return "toggle-button menu"
        }
    }


    render(){

        return (
            
            <span className={this.setStyleMenu()} onClick={this.toggleBtn}>
                    <div className="menu-bar menu-bar-top"></div>
                    <div className="menu-bar menu-bar-middle"></div>
                    <div className="menu-bar menu-bar-bottom"></div>
            </span>
        )
    }
}

export default MenuBtn;