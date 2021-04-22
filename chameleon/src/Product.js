import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './components/HorizontalScroll/HorizontalScroll.css'
import babyclothesImg from'./images/babyclothes.jpg';
import signupImg from'./images/signup-button.png';
import clothing1 from'./images/clothing1.png';
import clothing2 from'./images/clothing2.png';
import clothing3 from'./images/clothing3.png';
import clothing4 from'./images/clothing4.png';
import shopall from'./images/shopall.png';
import washingmachines from'./images/washingmachines.png';
import sanitationImg from'./images/sanitation-button.png';


import Navbar from './components/Navbar/Navbar.js';


export class Product extends React.Component {

  constructor(props){
    super(props);
    this.state = {

      name: sessionStorage.getItem('name')

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

  <div >{this.state.name}</div>

</fragment>
        
	);
  }
}