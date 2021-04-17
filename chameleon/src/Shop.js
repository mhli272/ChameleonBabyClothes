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



export class Shop extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      items: [
        {
          imgPath: clothing1,
          age: "5-6 months",
          type: "Tops"
        },
        {
          imgPath: clothing2,
          age: "3-4 months",
          type: "Dresses"
        },
        {
          imgPath: clothing3,
          age: "1-2 months",
          type: "Dresses"
        },
        {
          imgPath: clothing4,
          age: "1-2 months",
          type: "Tops"
        },
        {
          imgPath: clothing1,
          age: "5-6 months",
          type: "Tops"
        },
        {
          imgPath: clothing2,
          age: "3-4 months",
          type: "Dresses"
        },
        {
          imgPath: clothing3,
          age: "1-2 months",
          type: "Dresses"
        },
        {
          imgPath: clothing4,
          age: "1-2 months",
          type: "Tops"
        },
        {
          imgPath: clothing1,
          age: "5-6 months",
          type: "Tops"
        },
        {
          imgPath: clothing2,
          age: "3-4 months",
          type: "Dresses"
        },
        {
          imgPath: clothing3,
          age: "1-2 months",
          type: "Dresses"
        },
        {
          imgPath: clothing4,
          age: "1-2 months",
          type: "Tops"
        },
        {
          imgPath: clothing1,
          age: "5-6 months",
          type: "Tops"
        },
        {
          imgPath: clothing2,
          age: "3-4 months",
          type: "Dresses"
        },
        {
          imgPath: clothing3,
          age: "1-2 months",
          type: "Dresses"
        },
        {
          imgPath: clothing4,
          age: "1-2 months",
          type: "Tops"
        }
      ],
      param: "1-2 months"

    }
  }


  changeParam(){
    this.setState({param: "3-4 months"})
  }

  render() {
    return (
      <fragment>



        
      {/*header*/}
        <div>
          <Navbar ></Navbar>
        </div> 

        <div class="buffer"> </div>

        

        {/*test*/}

        
        
        <div class="flex-container-shop">

          <div class="flex-child-shop">
            {/*filters*/}
            <div className="categories-filters">Categories</div>
            <div className="age-type">Age</div>
            <div className="categories-filters">Filters</div>
            <div className="age-type">Item Type</div>
          </div>  
          <div class="flex-child-shop:first-child" >
            <div class="view-all">View All</div>
            {this.state.items.filter(item => item.age == this.state.param).map(filteredItem =>
            (<div class="card">
              <img class="item" src={filteredItem.imgPath}></img>
            </div>))}
          </div>

        </div>


        {/*test button*/}    
        <button onClick={() => this.changeParam()}>Change the Parameter</button>

        
        {/*{this.state.items.map((value, index) =>
          <div class="card"><img class="item" src={value.imgPath}></img> </div>)}*/}



      </fragment>
    
          
	  );
  } 
}