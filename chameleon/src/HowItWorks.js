import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import './HowItWorks.css';
import { Redirect } from "react-router-dom";

import symbol1 from "./images/Symbol1.png";
import symbol2 from "./images/Symbol2.png";
import symbol3 from "./images/Symbol3.png";
import circleYellow from "./images/circleYellow.png";
import circleGreen from "./images/circleGreen.png";
import circlePink from "./images/circlePink.png";
import washingMachines from "./images/washingmachines.png";

import Footer from './components/Footer/Footer.js';
import Navbar from './components/Navbar/Navbar.js';

export class HowItWorks extends React.Component {

    render() {
        return (
            <fragment>
                {/*header*/}
                <div>
                    <Navbar ></Navbar>
                </div>

                <div class="marginFix"> </div>
                
                {/*How It Works*/}
                <div class="title">How It Works</div>
                <div className="flex-container-HIW">
                    <div class="flex-child-HIW">
                        <div><img src={symbol1}></img></div>
                        <div class="bodyText">1. Select your items.</div>
                    </div>
                    <div class="flex-child-HIW">
                        <div><img src={symbol2}></img></div>
                        <div class="bodyText">2. Wear your items.</div>
                    </div>
                    <div class="flex-child-HIW">
                        <div><img src={symbol3}></img></div>
                        <div class="bodyText">3. Return and Repeat!</div>
                    </div>
                </div>


                {/*Sanitation*/}
                <div class="rectangle">
                    <div class="HIW-buffer"> </div>
                    <div class="title">Sanitation</div>
                    <div className="flex-container-HIW">
                        <div class="flex-child-bullets">
                            <div class="bulletList">
                                <span class="bullets"><img src={circleGreen}></img></span>
                                <span class="bullet-text">Inspect for staining and to see if any items need to be retired.</span>
                            </div>
                            <div class="bulletList">
                                <span class="bullets"><img src={circlePink}></img></span>
                                <span class="bullet-text">Organic laundry detergent appropriate for sensitive skin.</span>
                            </div>
                            <div class="bulletList">
                                <span class="bullets"><img src={circleYellow}></img></span>
                                <span class="bullet-text">Every item is steamed before getting prepared for another family.</span>
                            </div>
                        </div>
                        <div class="flex-child-sanitation-img">
                            <img src={washingMachines} class="washingMachines"></img>
                        </div>
                    </div>  
                </div>
                
                {/*Pricing*/}
                <div class="title">Pricing</div>

                {/*footer*/}
                <div>
                    <Footer></Footer>
                </div>
            </fragment>


        );
    }
}