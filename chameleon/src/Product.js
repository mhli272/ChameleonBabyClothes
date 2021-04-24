import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './components/HorizontalScroll/HorizontalScroll.css'
import babyclothesImg from './images/babyclothes.jpg';
import signupImg from './images/signup-button.png';

import clothing1_og from './images/clothing1_og.png';
import clothing2_og from './images/clothing2_og.png';
import clothing3_og from './images/clothing3_og.png';
import clothing4_og from './images/clothing4_og.png';

import heart_outline from './images/heart_outline.png';
import shopall from './images/shopall.png';
import washingmachines from './images/washingmachines.png';
import sanitationImg from './images/sanitation-button.png';


import Navbar from './components/Navbar/Navbar.js';

import Collapsible from 'react-collapsible';


export class Product extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      name: sessionStorage.getItem('name'),
      brand: sessionStorage.getItem('brand'),
      age: sessionStorage.getItem('age'),
      imgName: sessionStorage.getItem('imgName')

    }
  }

  collapse() {
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  }

  render() {
    return (




      <fragment>

        {/*header*/}
        <div>
          <Navbar ></Navbar>
        </div>

        <div class="buffer"> </div>

        <div class="buffer"> </div>

        <div class="flex-container-product">

          <div class="flex-child-product">
            <img src={this.state.imgName}></img>


          </div>
          <div class="flex-child-product:first-child" >

            <div>
              <span>{this.state.name}</span>
              <span class="product-header-buffer"></span>
              <span><img src={heart_outline}></img></span>
            </div>
            <div>{this.state.age}</div>
            <div>{this.state.brand}</div>

            <hr></hr>

            <div>CHOOSE A PLAN:</div>
            <div className="product-plan-flex-container">
              <div className="product-plan-flex-child">
                <div>Monthly</div>
                <div>$17 for 1 month</div>
              </div>
              <div className="product-plan-flex-child">
                <div>Seasonal</div>
                <div>$20 for 3 months</div>
              </div>
            </div>

            <div>DELIVERY + RETURN DATES</div>

            <div>
              <button>ADD TO CART</button>
            </div>

            



          </div>

        </div>

      </fragment>

    );
  }
}