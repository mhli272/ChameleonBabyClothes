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
          type: "Dresses"
        },
        {
          imgPath: clothing2,
          age: "3-4 months",
          type: "Onesies"
        },
        {
          imgPath: clothing3,
          age: "1-2 months",
          type: "Tops"
        },
        {
          imgPath: clothing4,
          age: "1-2 months",
          type: "Tops"
        },
        {
          imgPath: clothing1,
          age: "5-6 months",
          type: "Dresses"
        },
        {
          imgPath: clothing2,
          age: "3-4 months",
          type: "Onesies"
        },
        {
          imgPath: clothing3,
          age: "1-2 months",
          type: "Tops"
        },
        {
          imgPath: clothing4,
          age: "1-2 months",
          type: "Tops"
        },
        {
          imgPath: clothing1,
          age: "5-6 months",
          type: "Dresses"
        },
        {
          imgPath: clothing2,
          age: "3-4 months",
          type: "Onesies"
        },
        {
          imgPath: clothing3,
          age: "1-2 months",
          type: "Tops"
        },
        {
          imgPath: clothing4,
          age: "1-2 months",
          type: "Tops"
        },
        {
          imgPath: clothing1,
          age: "5-6 months",
          type: "Dresses"
        },
        {
          imgPath: clothing2,
          age: "3-4 months",
          type: "Onesies"
        },
        {
          imgPath: clothing3,
          age: "1-2 months",
          type: "Tops"
        },
        {
          imgPath: clothing4,
          age: "1-2 months",
          type: "Tops"
        }
       
      ],

      //flag = 1 means show, flag = 0 means dont show

      flagTops: 1,
      flagDresses: 1,
      flagOnesies:1,
      clothingType: ['Tops', 'Dresses','Onesies'],


      flag12: 1,
      flag34: 1,
      flag56: 1,
      clothingAge: ['1-2 months', '3-4 months', '5-6 months']




    }
  }

  //type filter functions
  changeParamTops(){
    if (this.state.flagTops==1) {
      this.setState({flagTops: 0})
      var temp = this.state.clothingType;
      var index = temp.indexOf('Tops');
      if (index!=-1) {
        temp.splice(index, 1)
        this.setState({clothingType: temp})
      }
    }

    else if (this.state.flagTops==0) {
      this.setState({flagTops: 1})
      var temp = this.state.clothingType;
      temp.push('Tops');
    }
  }

  changeParamDresses(){
    if (this.state.flagDresses==1) {
      this.setState({flagDresses: 0})
      var temp = this.state.clothingType;
      var index = temp.indexOf('Dresses');
      if (index!=-1) {
        temp.splice(index, 1)
        this.setState({clothingType: temp})
      }
    }

    else if (this.state.flagDresses==0) {
      this.setState({flagDresses: 1})
      var temp = this.state.clothingType;
      temp.push('Dresses');
    }
  }

  changeParamOnesies(){
    if (this.state.flagOnesies==1) {
      this.setState({flagOnesies: 0})
      var temp = this.state.clothingType;
      var index = temp.indexOf('Onesies');
      if (index!=-1) {
        temp.splice(index, 1)
        this.setState({clothingType: temp})
      }
    }

    else if (this.state.flagOnesies==0) {
      this.setState({flagOnesies: 1})
      var temp = this.state.clothingType;
      temp.push('Onesies');
    }
  }


  //age filter functions
  changeParam12months(){
    if (this.state.flag12==1) {
      this.setState({flag12: 0})
      var temp = this.state.clothingAge;
      var index = temp.indexOf('1-2 months');
      if (index!=-1) {
        temp.splice(index, 1)
        this.setState({clothingAge: temp})
      }
    }

    else if (this.state.flag12==0) {
      this.setState({flag12: 1})
      var temp = this.state.clothingAge;
      temp.push('1-2 months');
    }
  }

  changeParam34months(){
    if (this.state.flag34==1) {
      this.setState({flag34: 0})
      var temp = this.state.clothingAge;
      var index = temp.indexOf('3-4 months');
      if (index!=-1) {
        temp.splice(index, 1)
        this.setState({clothingAge: temp})
      }
    }

    else if (this.state.flag34==0) {
      this.setState({flag34: 1})
      var temp = this.state.clothingAge;
      temp.push('3-4 months');
    }
  }

  changeParam56months(){
    if (this.state.flag56==1) {
      this.setState({flag56: 0})
      var temp = this.state.clothingAge;
      var index = temp.indexOf('5-6 months');
      if (index!=-1) {
        temp.splice(index, 1)
        this.setState({clothingAge: temp})
      }
    }

    else if (this.state.flag56==0) {
      this.setState({flag56: 1})
      var temp = this.state.clothingAge;
      temp.push('5-6 months');
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

        

        {/*test*/}

        
        
        <div class="flex-container-shop">

          <div class="flex-child-shop">
            {/*filters*/}
            <div className="categories-filters">Categories</div>
            <div className="age-type">Age</div>
            <div>    
              <button onClick={() => this.changeParam12months()}>1-2 months</button>

              <button onClick={() => this.changeParam34months()}>3-4 months</button>

              <button onClick={() => this.changeParam56months()}>5-6 months</button>
            </div>

            <div className="categories-filters">Filters</div>
            <div className="age-type">Item Type</div>
            <div>
              <button onClick={() => this.changeParamTops()}>Tops</button>

              <button onClick={() => this.changeParamDresses()}>Dresses</button>

              <button onClick={() => this.changeParamOnesies()}>Onesies</button>
            </div>
            
          </div>  
          <div class="flex-child-shop:first-child" >
            <div class="view-all">View All</div>
            {this.state.items.filter(item => this.state.clothingType.includes(item.type) && this.state.clothingAge.includes(item.age)).map(filteredItem =>
            (<div class="card">
              <img class="item" src={filteredItem.imgPath}></img>
            </div>))}
          </div>

        </div>


        {/*test button*/}



        
        {/*{this.state.items.map((value, index) =>
          <div class="card"><img class="item" src={value.imgPath}></img> </div>)}*/}



      </fragment>
    
          
	  );
  } 
}