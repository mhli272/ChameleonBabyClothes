import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './components/HorizontalScroll/HorizontalScroll.css'
import babyclothesImg from './images/babyclothes.jpg';
import signupImg from './images/signup-button.png';

import clothing1 from './images/clothing1.png';
import clothing2 from './images/clothing2.png';
import clothing3 from './images/clothing3.png';
import clothing4 from './images/clothing4.png';

import clothing1_og from './images/clothing1_og.png';
import clothing2_og from './images/clothing2_og.png';
import clothing3_og from './images/clothing3_og.png';
import clothing4_og from './images/clothing4_og.png';

import shopall from './images/shopall.png';
import washingmachines from './images/washingmachines.png';
import sanitationImg from './images/sanitation-button.png';
import { Redirect } from "react-router-dom";

import Footer from './components/Footer/Footer.js';
import Navbar from './components/Navbar/Navbar.js';

export class HowItWorks extends React.Component {

    render() {

        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (
            <fragment>




                {/*header*/}
                <div>
                    <Navbar ></Navbar>
                </div>


                {/*footer*/}
                <div>
                    <Footer></Footer>
                </div>

            </fragment>


        );
    }
}