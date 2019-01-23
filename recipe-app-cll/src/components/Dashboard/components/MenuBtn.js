import React, { Component } from 'react';
import BarTop from './BarTop';
import BarMid from './BarMid';
import BarBot from './BarBot';
import Menu from './Menu';
import {showMenu}  from './Menu';



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

    toggleClasses(){
        showMenu();
        this.toggleBtn();
    }

    render(){

        return (
            
            <span className={this.setStyleMenu()} onClick={this.toggleClasses}>
                <BarTop></BarTop>
                <BarMid></BarMid>
                <BarBot></BarBot>
            </span>
        )
    }
}

export default MenuBtn;