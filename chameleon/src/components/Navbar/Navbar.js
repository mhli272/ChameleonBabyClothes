import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

class Navbar extends Component{
    state = { clicked: false }

    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked })
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">chameleon<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i> {/* This is for the hamburger icon from fontAwesome. Can use for shop/profile */} 
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
            </nav>
        )
    }
}

export default Navbar