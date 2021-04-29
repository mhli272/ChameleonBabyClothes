import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import './HowItWorks.css';
import { Redirect } from "react-router-dom";

import HIWheader from './images/HIW-header.png';
import step1 from './images/Step1.png';
import step2 from './images/Step2.png';
import step3 from './images/Step3.png';
import washingMachines from "./images/washingmachines.png";

import monthly_price from './images/monthly_price.png';
import seasonal_price from './images/seasonal_price.png';

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
                <div class="HIW-header"><img src={HIWheader}></img></div>
                
                {/*How It Works*/}
                <div class="title">How It Works</div>
                <div class="sub-title">CLOTHES ARRIVE AT YOUR DOOR IN 3 SIMPLE STEPS</div>

                <div className="flex-container-HIW">
                    <div class="flex-child-HIW">
                        <div><img src={step1}></img></div>
                        <div class="step-text">STEP ONE</div>
                        <div class="step-title">Pick Your Items</div>
                        <div class="step-body">Browse our closet and select garments that are fit for your little Chameleon. The choice is always yours.</div>
                    </div>
                    <div class="flex-child-HIW">
                        <div class="step2Img"><img src={step2}></img></div>
                        <div class="step-text">STEP TWO</div>
                        <div class="step-title">Place Your Order</div>
                        <div class="step-body">Order your garments to your residence by selected the dates on the calendar function and check out.</div>
                    </div>
                    <div class="flex-child-HIW">
                        <div class="step3Img"><img src={step3}></img></div>
                        <div class="step-text">STEP THREE</div>
                        <div class="step-title">Receive & Repeat!</div>
                        <div class="step-body">After receiving your order, return it (or buy it!) when you’re ready so the garments can be sanitized and prepared for the next little chameleon</div>

                    </div>
                </div>


                {/*Sanitation*/}
                <div class="rectangle">
                    <div class="HIW-buffer"> </div>
                    <div class="title-sanitation">Sanitation</div>
                    <div className="flex-container-HIW">
                        <div class="flex-child-sanitation-info">
                            <div class="HIW-sanitation-title">INSPECTION</div>
                            <div class="sanitation-body">Inspect for staining and to see if any items need to be retired.</div>
                            <div class="HIW-sanitation-title">CLEAN</div>
                            <div class="sanitation-body">Organic laundry detergent appropriate for sensitive skin.</div>
                            <div class="HIW-sanitation-title">STEAM</div>
                            <div class="sanitation-body">Every item is steamed before getting prepared for another family.</div>
                        </div>
                        <div class="flex-child-sanitation-img">
                            <img src={washingMachines} class="washingMachines"></img>
                        </div>
                    </div>  
                </div>
                
                {/*Pricing*/}
                <div class="title">Pricing</div>
                <div class="sub-title">BECOME A MEMBER BY SELECTING A PLAN</div>
                <div class="pricing">
                    <span class="price-img"><img src={monthly_price}></img></span>
                    <span><img src={seasonal_price}></img></span>
                </div>
                <div class="pricing-rect">
                    <div class="includes-title">Each Membership Plan includes:</div>
                    <ul class="includes-bullets">
                        <li class="individual-bullet">Free shipping and returns</li>
                        <li class="individual-bullet">Thorough sanitation and cleaning of each product</li>
                        <li class="individual-bullet">Ability to purchase items at any time at a discounted price</li>
                        <li class="individual-bullet">Recycled packaging</li>
                    </ul>
                </div>

                {/*footer*/}
                <div>
                    <Footer></Footer>
                </div>
            </fragment>


        );
    }
}