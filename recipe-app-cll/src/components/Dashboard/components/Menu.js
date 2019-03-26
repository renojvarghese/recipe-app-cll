import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LandingPage from '../../LandingPage/index';
import CreateAccount from '../../CreateAccount/index';
import AccountSettings from '../../AccountSettings/';
import Dashboard from '../../Dashboard/index'





export class Menu extends Component {  



    render(){

        const menuShow = this.props.hidden ? "menu-wrap" : "menu-wrap menu-show";
        
        return (

        <div className={menuShow} onMouseLeave={this.props.closeMenu} >
            <div className="menu-sidebar" >
                <ul className="menu"> 
                <Link to={Dashboard} ><li> Dashboard</li></Link> 
                <Link to= {AccountSettings}><li> Settings</li></Link> 
                <a href="mailto: mail@email.com"><li> Contact</li></a> 
                <Link to={LandingPage}><li> Sign Out</li></Link>
                </ul>
            </div>
        </div>
        )        

        
    }
}

export default Menu;
