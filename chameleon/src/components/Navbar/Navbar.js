import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import mainLogo from '../../images/chameleonlogo.png';
import heartImg from '../../images/heart_outline.png';
import cartImg from '../../images/cart.jpg';
import userImg from '../../images/user.jpg';

import { withRouter } from 'react-router-dom'




class Navbar extends Component {

    render() {




        return (
            <div className="NavbarItems">
            
                <a href="/"><img src={mainLogo} className="logo" ></img></a>
                <div style={{'width':'100%', 'flex-shrink': '3'}}></div>
                <a className="menu-item" href="/shop">SHOP</a>
                <a className="menu-item" href="/how-it-works">HOW IT WORKS</a>
                <a className="menu-item" href="/community">COMMUNITY</a>
                <div style={{'width': '40px'}}></div>
                <a href="/favorites"><img src={heartImg} className="header-icon" ></img></a>
                <a><img src={cartImg} className="header-icon" ></img></a>
                <a ><img src={userImg} className="header-icon" ></img></a>
                <div style={{'width': '50px'}}></div>


                {/*

                <h1 className="navbar-logo">chameleon<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i> 
                </div>
                <ul className="nav-menu">
                    {MenuItems.map((item, index)=>{
                        return (
                            <li key={index}>
                                <a className={"item.cName"} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            */}
            
            </div>
        )
    }
}

export default Navbar