import React, { Component } from 'react';

export class BarTop extends Component {
    
    state = {
        clicked: false
    }

    
    toggleBarTop = ()=> {
        this.setState({clicked: !this.state.clicked})
    }

    setStyleTop = ()=> {
        
        if(this.state.clicked){
            return "button-open menu-bar-top"
        } else {
            return "toggle-button"
        }
    }

    render(){
        return (
            <div className ="menu-bar menu-bar-top"></div>
        )
    }
}

export default BarTop;