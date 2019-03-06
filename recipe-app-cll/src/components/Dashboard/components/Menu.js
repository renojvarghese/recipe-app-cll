import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LandingPage from '../../LandingPage/index';
import CreateAccount from '../../CreateAccount/index';
import Form from '../../Form/Form';
import Dashboard from '../../Dashboard/index'





export class Menu extends Component {  



    render(){

        const menuShow = this.props.hidden ? "menu-wrap" : "menu-wrap menu-show";
        
        return (

        <div className={menuShow} >
            <div className="menu-sidebar" >
                <ul className="menu">
                <Link to={LandingPage}><li> Home</li></Link> 
                <Link to={Dashboard} ><li> Dashboard</li></Link> 
                <Link to= {Form}><li> Settings</li></Link> 
                <Link to={CreateAccount} ><li> Contact</li></Link> 
                </ul>
            </div>
        </div>
        )        

        
    }
}

export default Menu;
