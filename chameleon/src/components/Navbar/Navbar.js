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
            <nav className="NavbarItems">
            
                <a href="/"><img src={mainLogo} className="logo"></img></a>
                <a className="menu-item" href="/shop">SHOP</a>
                <a className="menu-item" href="/how-it-works">HOW IT WORKS</a>
                <a className="menu-item" href="/community">COMMUNITY</a>
                <div className="buffer"></div>
                <a href="/favorites"><img src={heartImg} className="header-icon" ></img></a>
                <img src={cartImg} className="header-icon"></img>
                <img src={userImg} className="header-icon"></img>
                <div className="endbuffer"></div>



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
            
            </nav>
        )
    }
}

export default Navbar