import React, { Component } from 'react';

export class BarTop extends Component {
    
    state = {
        clicked: false
    }

    
    toggleBarBot = ()=> {
        this.setState({clicked: !this.state.clicked})
    }

    setStyleBot = ()=> {
        
        if(this.state.clicked){
            return "button-open menu-bar-top"
        } else {
            return "toggle-button"
        }
    }

    render(){
        return (
            <div className ="menu-bar menu-bar-bottom"> </div> 
        )
    }
}

export default BarTop;