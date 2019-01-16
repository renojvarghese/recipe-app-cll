import React, { Component } from 'react';



export class MenuBtn extends Component {

    state={
        clicked: false
    }


    toggleMenu = ()=> {
        this.setState({clicked: !this.state.clicked})
    }

    setStyleMenu = ()=> {
        
        if(this.state.clicked){
            return "button-open"
        } else {
            return "toggle-button"
        }
    }


    render(){

        return (
            
            <span className={this.setStyleMenu()} onClick={this.toggleMenu}>
                <div className ="menu-bar menu-bar-top"> </div> 
                <div className = "menu-bar menu-bar-middle"> </div> 
                <div className = "menu-bar menu-bar-bottom"> </div> 
            </span>
            
        )
    }
}

export default MenuBtn;