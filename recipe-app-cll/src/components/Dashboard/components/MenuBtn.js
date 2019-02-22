import React, { Component } from 'react';





export class MenuBtn extends Component {

    state={
        clicked: false
    }

    toggleBtn = ()=> {
        this.setState({clicked: !this.state.clicked})
    }

    setStyleBtn = ()=> {
        if(this.state.clicked){
            return "toggle-button menu button-open"
        } else {
            return "toggle-button menu"
        }
    }


    //wraps both functions to trigger action for menu and btn
    onClickHandler = () => {
        this.props.toggleMenu();
        this.toggleBtn();
    }
    

    render(){
        
        const styleBtn = this.state.clicked ? "toggle-button menu button-open" : "toggle-button menu";
        
        return (
            
            <div className="icon">
                <div className={styleBtn} onClick={this.onClickHandler} onMouseEnter={this.onClickHandler}>
                    <div className ="menu-bar menu-bar-top"></div>
                    <div className = "menu-bar menu-bar-middle"> </div> 
                    <div className ="menu-bar menu-bar-bottom"> </div>
                </div>
            </div>
        )
    }
}

export default MenuBtn;
