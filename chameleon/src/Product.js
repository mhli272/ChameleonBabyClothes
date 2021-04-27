import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import './App.css';
import './Product.css';

//import 'bootstrap/dist/css/bootstrap.min.css';
import './components/HorizontalScroll/HorizontalScroll.css'
import babyclothesImg from './images/babyclothes.jpg';
import signupImg from './images/signup-button.png';

import clothing1_og from './images/clothing1_og.png';
import clothing2_og from './images/clothing2_og.png';
import clothing3_og from './images/clothing3_og.png';
import clothing4_og from './images/clothing4_og.png';

import heart_outline from './images/heart_outline.png';
import heart_fill from './images/heart_fill.png';
import calender from './images/calender.png';
import product_prev from './images/product-prev.png';
import product_next from './images/product-next.png';
import clear from './images/clear.png';

import Footer from './components/Footer/Footer.js';
import Navbar from './components/Navbar/Navbar.js';

import Collapsible from 'react-collapsible';
import { Favorites } from './Favorites';

export class Product extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: JSON.parse(localStorage.getItem('id')),
      imgPath: JSON.parse(localStorage.getItem('imgPath')),
      name: JSON.parse(localStorage.getItem('name')),
      type: JSON.parse(localStorage.getItem("type")),
      brand: JSON.parse(localStorage.getItem('brand')),
      age: JSON.parse(localStorage.getItem('age')),
      imgName: JSON.parse(localStorage.getItem('imgName')),
      favorite: JSON.parse(localStorage.getItem('favorite')),
      date: 'May 2021',
      plan_name: 'Monthly Plan',
      start_date: 'May 1st, 2020',
      return_date: 'June 1st, 2021',
      plan_mode: 0, //0 = monthly, 1 means seasonal
      date_display: ''
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

  calenderpopup(mode) {
    if (mode == 0) {
      this.setState({ plan_name: 'Monthly Plan' })
      this.setState({ start_date: 'May 1st, 2021' })
      this.setState({ return_date: 'June 1st, 2021' })
      this.setState({ plan_mode: 0 })
    }
    else {
      this.setState({ plan_name: 'Seasonal Plan' })
      this.setState({ start_date: 'May 1st, 2021' })
      this.setState({ return_date: 'August 1st, 2021' })
      this.setState({ plan_mode: 1 })
    }
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }

  closeCalender(submit) {
    if (submit == 1) {
      this.setState({ date_display: this.state.start_date + ' - ' + this.state.return_date })
    }
    else {
      this.setState({ date_display: '' })
    }
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  prev() {
    if (this.state.plan_mode == 1) {
      if (this.state.date == 'June 2021') {
        this.setState({ date: 'May 2021' })
      }
      else if (this.state.date == 'July 2021') {
        this.setState({ date: 'June 2021' })
      }
    }
  }

  next() {
    if (this.state.plan_mode == 1) {
      if (this.state.date == 'May 2021') {
        this.setState({ date: 'June 2021' })
      }
      else if (this.state.date == 'June 2021') {
        this.setState({ date: 'July 2021' })
      }
    }
  }

  addToCart() {
    if (this.state.date_display != '') {

    }
  }

  clickedFavorite(){
    if(this.state.favorite == heart_outline){
      this.setState({favorite: heart_fill});
      var item = {
        id: this.state.id,
        imgPath: this.state.imgPath,
        age: this.state.age,
        type: this.state.type,
        name: this.state.name,
        brand: this.state.brand,
        imgName: this.state.imgName,
        favorite: heart_fill
      }
      //localStorage.setItem('favorite', JSON.stringify(heart_fill));
      if(localStorage.getItem("favoritesList") == null){
        var tempArr = [];
        tempArr.push(item);
        localStorage.setItem('favoritesList', JSON.stringify(tempArr));
      }else{
        var tempArr = JSON.parse(localStorage.getItem("favoritesList"));
        var changed = false;
        for (var i = 0; i < tempArr.length; i++) {
          if (this.state.id == tempArr[i].id) {
            tempArr[i].favorite = heart_fill;
            changed = true;
            break;
          }
        }
        if (changed == false)
          tempArr.push(item);
        localStorage.setItem('favoritesList', JSON.stringify(tempArr));
      }
    }else{
      this.setState({favorite: heart_outline});
      localStorage.setItem('favorite', JSON.stringify(heart_outline));
      var tempArr = JSON.parse(localStorage.getItem("favoritesList"));
      var newArr = [];
      for (var i = 0; i < tempArr.length; i++) {
        if (this.state.id != tempArr[i].id) {
          tempArr[i].favorite = heart_fill;
          newArr.push(tempArr[i]);
        }else{
          tempArr[i].favorite = heart_outline;
        }
      }
      localStorage.setItem('favoritesList', JSON.stringify(newArr));
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
              <span><img class="product-heart-size" onClick={() => this.clickedFavorite()} src={this.state.favorite}></img></span>
            </div>
            <div>{this.state.age}</div>
            <div>{this.state.brand}</div>

            <hr></hr>

            <div>CHOOSE A PLAN:</div>
            <div className="product-plan-flex-container">
              <div onClick={() => this.calenderpopup(0)} className="product-plan-flex-child">
                <div>Monthly</div>
                <div>Choose up to 5</div>
                <div>items for 30 days</div>
              </div>
              <div className="product-plan-buffer"></div>
              <div onClick={() => this.calenderpopup(1)} className="product-plan-flex-child">
                <div>Seasonal</div>
                <div>Choose up to 8</div>
                <div>items for 90 days</div>
              </div>
            </div>

            <div>DELIVERY + RETURN DATES</div>

            <div>{this.state.date_display}</div>

            <div>
              <button onClick={() => this.addToCart()}>ADD TO CART</button>
            </div>





          </div>

        </div>





        <div id="myModal" class="calender-modal">

          {/* Modal content --> */}

          <div className="calender-modal-content">
            <div className="calender-header">
              <div>
                <span><img onClick={() => this.closeCalender(0)} className="calender-clear" src={clear}></img></span>
                <span className="calender-header-text">Delivery + Return Dates</span>
              </div>
            </div>
            <hr></hr>

            <div className="calender-modal-subcontent">



              <div className="calender-title">
                <span className="calender-date">{this.state.date}</span>
                <span className="calender-plan">{this.state.plan_name}</span>
                <span className="calender-title-buffer"></span>
                <span ><img onClick={() => this.prev()} className="calender-title-arrows" src={product_prev}></img></span>
                <span ><img onClick={() => this.next()} className="calender-title-arrows" src={product_next}></img></span>
              </div>

              <hr></hr>

              <img class="calender-img" src={calender}></img>
              <div className="calender-flex-container">
                <div className="calender-flex-child">
                  <div className="calender-start-return">START DATE</div>
                  <div className="calender-start-return-date">{this.state.start_date}</div>
                </div>


                <div className="calender-flex-child">
                  <div className="calender-start-return">RETURN DATE</div>
                  <div className="calender-start-return-date">{this.state.return_date}</div>

                </div>

              </div>

              <div className="calender-bottom">
                <span className="calender-submit" onClick={() => this.closeCalender(1)}>Submit</span>
                <span className="calender-clear-all-dates" onClick={() => this.closeCalender(0)}>Clear all dates</span>
              </div>



            </div>

          </div>

        </div>

        {/*footer*/}
        <div>
          <Footer></Footer>
        </div>

      </fragment>

    );
  }
}