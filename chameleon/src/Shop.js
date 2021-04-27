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

import heart_outline from './images/heart_outline.png';
import heart_fill from './images/heart_fill.png';

import { Redirect } from "react-router-dom";

import Footer from './components/Footer/Footer.js';
import Navbar from './components/Navbar/Navbar.js';

var flagTops = 0;
var flagDresses = 0;
var flagOnesies = 0;
var flagBottoms = 0;
var flagShoes = 0;
var flagAccessories = 0;

var flag12 = 0;
var flag34 = 0;
var flag56 = 0;
var flag78 = 0;
var flag910 = 0;
var flag1112 = 0;

export class Shop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
      {
        id: 1,
        imgPath: clothing1,
        age: "5-6 months",
        type: "Dresses",
        name: "Floral Dress",
        brand: "Jacadi",
        imgName: clothing1_og,
        favorite: heart_outline
      },
      {
        id: 2,
        imgPath: clothing2,
        age: "3-4 months",
        type: "Onesies",
        name: "Out and About Romper",
        brand: "Monica + Andy",
        imgName: clothing2_og,
        favorite: heart_outline

      },
      {
        id: 3,
        imgPath: clothing3,
        age: "1-2 months",
        type: "Tops",
        name: "Fleece Jacket",
        brand: "Winter Water Factory",
        imgName: clothing3_og,
        favorite: heart_outline

      },
      {
        id: 4,
        imgPath: clothing4,
        age: "1-2 months",
        type: "Tops",
        name: "Soft Cotton Tee",
        brand: "Colored Organics",
        imgName: clothing4_og,
        favorite: heart_outline
      },
      {
        id: 5,
        imgPath: clothing1,
        age: "5-6 months",
        type: "Dresses",
        name: "Floral Dress",
        brand: "Jacadi",
        imgName: clothing1_og,
        favorite: heart_outline
      },
      {
        id: 6,
        imgPath: clothing2,
        age: "3-4 months",
        type: "Onesies",
        name: "Out and About Romper",
        brand: "Monica + Andy",
        imgName: clothing2_og,
        favorite: heart_outline
      },
      {
        id: 7,
        imgPath: clothing3,
        age: "1-2 months",
        type: "Tops",
        name: "Fleece Jacket",
        brand: "Winter Water Factory",
        imgName: clothing3_og,
        favorite: heart_outline
      },
      {
        id: 8,
        imgPath: clothing4,
        age: "1-2 months",
        type: "Tops",
        name: "Soft Cotton Tee",
        brand: "Colored Organics",
        imgName: clothing4_og,
        favorite: heart_outline
      },
      {
        id: 9,
        imgPath: clothing1,
        age: "5-6 months",
        type: "Dresses",
        name: "Floral Dress",
        brand: "Jacadi",
        imgName: clothing1_og,
        favorite: heart_outline
      },
      {
        id: 10,
        imgPath: clothing2,
        age: "3-4 months",
        type: "Onesies",
        name: "Out and About Romper",
        brand: "Monica + Andy",
        imgName: clothing2_og,
        favorite: heart_outline
      },
      {
        id: 11,
        imgPath: clothing3,
        age: "1-2 months",
        type: "Tops",
        name: "Fleece Jacket",
        brand: "Winter Water Factory",
        imgName: clothing3_og,
        favorite: heart_outline
      },
      {
        id: 12,
        imgPath: clothing4,
        age: "1-2 months",
        type: "Tops",
        name: "Soft Cotton Tee",
        brand: "Colored Organics",
        imgName: clothing4_og,
        favorite: heart_outline
      },
      {
        id: 13,
        imgPath: clothing1,
        age: "5-6 months",
        type: "Dresses",
        name: "Floral Dress",
        brand: "Jacadi",
        imgName: clothing1_og,
        favorite: heart_outline
      },
      {
        id: 14,
        imgPath: clothing2,
        age: "3-4 months",
        type: "Onesies",
        name: "Out and About Romper",
        brand: "Monica + Andy",
        imgName: clothing2_og,
        favorite: heart_outline
      },
      {
        id: 15,
        imgPath: clothing3,
        age: "1-2 months",
        type: "Tops",
        name: "Fleece Jacket",
        brand: "Winter Water Factory",
        imgName: clothing3_og,
        favorite: heart_outline
      },
      {
        id: 16,
        imgPath: clothing4,
        age: "1-2 months",
        type: "Tops",
        name: "Soft Cotton Tee",
        brand: "Colored Organics",
        imgName: clothing4_og,
        favorite: heart_outline
      }
      ],

      //flag = 1 means checked, flag = 0 means unchecked

      
      clothingType: ['Tops', 'Dresses', 'Onesies', 'Bottoms', 'Shoes', 'Accessories'],

      clothingAge: ['1-2 months', '3-4 months', '5-6 months', '7-8 months', '9-10 months', '11-12 months']

    }
  }

  editTypeArray(){
    var typeTemp = [];
    if (flagTops == 0 && flagDresses == 0 && flagOnesies == 0 && flagBottoms == 0 && flagShoes == 0 && flagAccessories == 0){
      typeTemp = ['Tops', 'Dresses', 'Onesies', 'Bottoms', 'Shoes', 'Accessories'];
    }else{
      if(flagTops == 1)
        typeTemp.push('Tops')
      if (flagDresses == 1)
        typeTemp.push('Dresses')
      if (flagOnesies == 1)
        typeTemp.push('Onesies')
      if (flagBottoms == 1)
        typeTemp.push('Bottoms')
      if (flagShoes == 1)
        typeTemp.push('Shoes')
      if (flagAccessories == 1)
        typeTemp.push('Accessories')
    }
    this.setState({clothingType: typeTemp})
  }


  editAgeArray() {
    var typeAge = [];
    if (flag12 == 0 && flag34 == 0 && flag56 == 0 && flag78 == 0 && flag910 == 0 && flag1112 == 0) {
      typeAge = ['1-2 months', '3-4 months', '5-6 months', '7-8 months', '9-10 months', '11-12 months'];
    } else {
      if (flag12 == 1)
        typeAge.push('1-2 months')
      if (flag34 == 1)
        typeAge.push('3-4 months')
      if (flag56 == 1)
        typeAge.push('5-6 months')
      if (flag78 == 1)
        typeAge.push('7-8 months')
      if (flag910 == 1)
        typeAge.push('9-10 months')
      if (flag1112 == 1)
        typeAge.push('11-12 months')
    }
    this.setState({ clothingAge: typeAge })
  }
  
  //type filter functions
  changeParamTops() {
    if (flagTops == 1) {
      flagTops = 0;
    }
    else{
      flagTops = 1;
    }
    this.editTypeArray();
  }

  changeParamDresses() {
    if (flagDresses == 1) {
      flagDresses = 0;
    }
    else {
      flagDresses = 1;
    }
    this.editTypeArray();
  }

  changeParamOnesies() {
    if (flagOnesies == 1) {
      flagOnesies = 0;
    }
    else {
      flagOnesies = 1;
    }
    this.editTypeArray();
  }

  changeParamBottoms() {
    if (flagBottoms == 1) {
      flagBottoms = 0;
    }
    else {
      flagBottoms = 1;
    }
    this.editTypeArray();
  }

  changeParamAccessories() {
    if (flagAccessories == 1) {
      flagAccessories = 0;
    }
    else {
      flagAccessories = 1;
    }
    this.editTypeArray();
  }
  
  changeParamShoes() {
    if (flagShoes == 1) {
      flagShoes = 0;
    }
    else {
      flagShoes = 1;
    }
    this.editTypeArray();
  }

  //age filter functions
  changeParam12months() {
    if (flag12 == 1) {
      flag12 = 0;
    }
    else {
      flag12 = 1;
    }
    this.editAgeArray();
  }

  changeParam34months() {
    if (flag34 == 1) {
      flag34 = 0;
    }
    else {
      flag34 = 1;
    }
    this.editAgeArray();
  }

  changeParam56months() {
    if (flag56 == 1) {
      flag56 = 0;
    }
    else {
      flag56 = 1;
    }
    this.editAgeArray();
  }

  changeParam78months() {
    if (flag78 == 1) {
      flag78 = 0;
    }
    else {
      flag78 = 1;
    }
    this.editAgeArray();
  }

  changeParam910months() {
    if (flag910 == 1) {
      flag910 = 0;
    }
    else {
      flag910 = 1;
    }
    this.editAgeArray();
  }


  changeParam1112months() {
    if (flag1112 == 1) {
      flag1112 = 0;
    }
    else {
      flag1112 = 1;
    }
    this.editAgeArray();
  }

  goToItemPage(id) {
    for (var i=0; i<this.state.items.length; i++) {
      if (this.state.items[i].id==id) {
        localStorage.setItem('id', JSON.stringify(this.state.items[i].id));
        localStorage.setItem('imgPath', JSON.stringify(this.state.items[i].imgPath));
        localStorage.setItem('type', JSON.stringify(this.state.items[i].type));
        localStorage.setItem('name', JSON.stringify(this.state.items[i].name));
        localStorage.setItem('age', JSON.stringify(this.state.items[i].age));
        localStorage.setItem('brand', JSON.stringify(this.state.items[i].brand));
        localStorage.setItem('imgName', JSON.stringify(this.state.items[i].imgName));
        localStorage.setItem('favorite', JSON.stringify(this.state.items[i].favorite));
        window.location.href="/Product";
        break;
      }
    }
  }

  checkFavorites(){
    if(localStorage.getItem('favoritesList') != null){
      var tempArr = JSON.parse(localStorage.getItem('favoritesList'));
      var tempItems = this.state.items.slice();
      for (var i = 0; i < tempArr.length; i++) {
        for (var j = 0; j < tempItems.length; j++) {
          if (tempItems[j].id == tempArr[i].id && tempItems[j].favorite == heart_outline) {
            tempItems[j].favorite = heart_fill;
            this.setState({items: tempItems});
            break;
          }
        }
      }
    }
  }

  render() {

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    this.checkFavorites();

    return (
      <fragment>
        {/*header*/}
        <div>
          <Navbar></Navbar>
        </div>

        <div class="buffer"> </div>

        <div class="flex-container-shop">

          <div class="flex-child-shop">
            {/*filters*/}
            <div className="categories-filters">Categories</div>
            <div className="age-type">Age</div>
            <div class="group">
              {/*<button onClick={() => this.changeParam12months()}>1-2 months</button>

              <button onClick={() => this.changeParam34months()}>3-4 months</button>

              <button onClick={() => this.changeParam56months()}>5-6 months</button>*/}

              <input type="checkbox" onClick={() => this.changeParam12months()} id="1-2 Months"/>
              <label for="1-2 Months"> 1-2 Months</label><br></br><br></br>
              <input type="checkbox" onClick={() => this.changeParam34months()} id="3-4 Months"/>
              <label for="3-4 Months"> 3-4 Months</label><br></br><br></br>
              <input type="checkbox" onClick={() => this.changeParam56months()} id="5-6 Months"/>
              <label for="5-6 Months"> 5-6 Months</label><br></br><br></br>
              <input type="checkbox" onClick={() => this.changeParam78months()} id="7-8 Months"/>
              <label for="7-8 Months"> 7-8 Months</label><br></br><br></br>
              <input type="checkbox" onClick={() => this.changeParam910months()} id="9-10 Months"/>
              <label for="9-10 Months"> 9-10 Months</label><br></br><br></br>
              <input type="checkbox" onClick={() => this.changeParam1112months()} id="11-12 Months"/>
              <label for="11-12 Months"> 11-12 Months</label><br></br><br></br>
              
            </div>

            <div className="categories-filters">Filters</div>
            <div className="age-type">Item Type</div>
            <div>
              {/*<button onClick={() => this.changeParamTops()}>Tops</button>

              <button onClick={() => this.changeParamDresses()}>Dresses</button>

              <button onClick={() => this.changeParamOnesies()}>Onesies</button>*/}

              <input type="checkbox" onClick={() => this.changeParamOnesies()} id="onesies" />
              <label for="onesies"> Onesies</label><br></br><br></br>
              <input type="checkbox" onClick={() => this.changeParamDresses()} id="dresses" />
              <label for="dresses"> Dresses</label><br></br><br></br>
              <input type="checkbox" onClick={() => this.changeParamTops()} id="tops" />
              <label for="tops"> Tops</label><br></br><br></br>
              <input type="checkbox" onClick={() => this.changeParamBottoms()} id="Bottoms" />
              <label for="Bottoms"> Bottoms</label><br></br><br></br>
              <input type="checkbox" onClick={() => this.changeParamShoes()} id="Shoes" />
              <label for="Shoes"> Shoes</label><br></br><br></br>
              <input type="checkbox" onClick={() => this.changeParamAccessories()} id="Accessories" />
              <label for="Accessories"> Accessories</label><br></br><br></br>
            </div>

          </div>
          <div class="flex-child-shop:first-child" >
            <div class="view-all">View All</div>
            {this.state.items.filter(item => this.state.clothingType.includes(item.type) && this.state.clothingAge.includes(item.age)).map(filteredItem =>
            (<div class="card" onClick={() => this.goToItemPage(filteredItem.id)}>
              <img class="item" src={filteredItem.imgPath}></img>
            </div>))}
          </div>

        </div>

        {/*footer*/}
        <div>
          <Footer></Footer>
        </div>

        {/*test button*/}



        {/*{this.state.items.map((value, index) =>
          <div class="card"><img class="item" src={value.imgPath}></img> </div>)}*/}



      </fragment>


    );
  }
}