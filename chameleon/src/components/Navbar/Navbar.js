import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import mainLogo from'../../images/logo.jpg';
import searchImg from'../../images/search.jpg';
import cartImg from'../../images/cart.jpg';
import userImg from'../../images/user.jpg';
import { withRouter } from 'react-router-dom'



class Navbar extends Component{

    render(){


        

        return(
            <nav className="NavbarItems">
            
                <a href="/"><img src={mainLogo} className="logo" ></img></a>
                <a className="menu-item" href="/shop">SHOP</a>
                <a className="menu-item">HOW IT WORKS</a>
                <a className="menu-item">COMMUNITY</a>
                <div className="buffer"></div>
                <img src={searchImg} className="header-icon" ></img>
                <img src={cartImg} className="header-icon" ></img>
                <img src={userImg} className="header-icon" ></img>
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