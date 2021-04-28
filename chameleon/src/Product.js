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

import clothing1 from './images/clothing1.png';
import clothing2 from './images/clothing2.png';
import clothing3 from './images/clothing3.png';
import clothing4 from './images/clothing4.png';
import shopall from './images/shopall.png';

import heart_outline from './images/heart_outline.png';
import heart_fill from './images/heart_fill.png';
import calender from './images/calender.png';
import product_prev from './images/product-prev.png';
import product_next from './images/product-next.png';
import clear from './images/clear.png';
import frame from './images/frame.png';
import continueshopping from './images/continueshopping.png';
import calender_icon from './images/calender_icon.png';


import reviewChart from './images/reviewChart.png';
import reviews from './images/reviews.png';
import writeAReview from './images/writeAReview.png';
import chamelemom from './images/Chamelemom.png';
import chamelemomInfo from './images/chamelemom_info.png';
import chameledad from './images/chameledad.png';
import chameledadInfo from './images/chameledad_info.png';
import chamelefam from './images/chamelefam.png';
import chamelefamInfo from './images/chamelefam_info.png';
import seeMoreReviews from './images/See_more_reviews.png';

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
      date_display: 'MM/DD/YYYY - MM/DD/YYYY',
      items_left: 0
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
      this.setState({ date_display: 'MM/DD/YYYY - MM/DD/YYYY' })
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
    if (this.state.date_display != 'MM/DD/YYYY - MM/DD/YYYY') {
      var mini_cart = document.getElementById("mini-cart");
      mini_cart.style.display = "block";
    }
  }

  closeMinicart() {
    var mini_cart = document.getElementById("mini-cart");
    mini_cart.style.display = "none";
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
          <Navbar></Navbar>
        </div>

        <div class="buffer"> </div>

        <div class="product-buffer"> </div>

        <div class="flex-container-product">

          <div class="flex-child-product">
            <img style={{ width: "300px" }} src={this.state.imgName}></img>


          </div>
          <div class="flex-child-product:first-child" >

            <div style={{ 'display': 'flex' }}>
              <span style={{ 'white-space': 'nowrap', 'font-family': "DM Sans", 'font-style': "normal", 'font-weight': "bold", 'font-size': "32px", 'color': "#333333" }}>{this.state.name}</span>
              <span style={{ width: '100%', 'flex-shrink': '3' }}></span>
              <span><img class="product-heart-size" onClick={() => this.clickedFavorite()} src={this.state.favorite}></img></span>
            </div>
            <div style={{ 'font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': 'bold', 'font-size': '18px', 'line-height': '23px', 'letter-spacing': '0.15em', 'color': '#828282' }}>{this.state.age}</div>
            <div style={{ 'font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': 'normal', 'font-size': '18px', 'line-height': '23px', 'color': '#828282' }}>{this.state.brand}</div>

            <hr></hr>

            <div style={{ 'margin-bottom': '15px', 'margin-top': '30px', 'font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': '500', 'font-size': '14px', 'line-height': '18px', 'letter-spacing': '0.15em', 'color': '#333333' }}>CHOOSE A PLAN:</div>
            <div className="product-plan-flex-container">
              <div onClick={() => this.calenderpopup(0)} className="product-plan-flex-child">
                <div style={{ 'font-weight': 'bold', 'font-size': '16px' }}>Monthly</div>
                <div style={{}}>Choose up to 5</div>
                <div style={{}}>items for 30 days</div>
              </div>
              <div className="product-plan-buffer"></div>
              <div onClick={() => this.calenderpopup(1)} className="product-plan-flex-child">
                <div style={{ 'font-weight': 'bold', 'font-size': '16px' }}>Seasonal</div>
                <div style={{}}>Choose up to 8</div>
                <div style={{}}>items for 90 days</div>
              </div>
            </div>

            <div style={{ 'margin-bottom': '10px', 'font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': '500', 'font-size': '14px', 'line-height': '18px', 'letter-spacing': '0.15em' }}>DELIVERY + RETURN DATES</div>

            <div style={{ 'padding-bottom': '5px', 'padding-top': '5px', 'padding-left': '15px', 'border-radius': '4px', 'width': '300px', 'border': '2px solid #BDBDBD', 'font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': '500', 'font-size': '16px', 'line-height': '21px', 'color': '#828282' }} >
              <span style={{ 'vertical-align': 'middle', 'margin-right': '15px' }}><img src={calender_icon}></img></span>
              <span style={{ 'vertical-align': 'middle' }}>{this.state.date_display}</span>
            </div>

            <div>
              <button className="add-to-cart" onClick={() => this.addToCart()}>ADD TO CART</button>
            </div>





          </div>

        </div>




        {/* Calender Modal --> */}
        <div id="myModal" class="calender-modal">

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

        {/* Mini-cart Modal --> */}
        <div id="mini-cart" class="mini-cart-modal">

          <div className="mini-cart-modal-content">
            <div style={{ 'margin-bottom': '40px' }}>
              <span style={{ 'vertical-align': 'middle', 'font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': 'bold', 'font-size': '18px', 'line-height': '23px', 'color': '#333333' }}>Your Shopping Bag</span>
              <span onClick={() => this.closeMinicart()} style={{ 'cursor':'pointer','margin-left': '120px', 'vertical-align': 'middle' }}><img style={{ 'vertical-align': 'middle' }} src={clear}></img></span>
            </div>
            <div style={{ 'font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': 'bold', 'font-size': '16px', 'line-height': '21px', 'color': '#333333' }}>{this.state.plan_name}</div>

            <hr></hr>

            <div style={{ 'margin-top':'30px','margin-bottom': '10px', 'font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': '500', 'font-size': '12px', 'line-height': '18px', 'letter-spacing': '0.15em' }}>DELIVERY + RETURN DATES</div>

            <div style={{ 'padding-bottom': '5px', 'padding-top': '5px', 'padding-left': '15px', 'border-radius': '4px', 'width': '200px', 'border': '2px solid #BDBDBD', 'font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': '500', 'font-size': '11px', 'line-height': '13px','color': '#333333' }} >
              <span style={{ 'vertical-align': 'middle', 'margin-right': '7px' }}><img style={{height: '25px', 'vertical-align':'middle'}} src={calender_icon}></img></span>
              <span style={{ 'vertical-align': 'middle' }}>{this.state.date_display}</span>
            </div>

            <hr></hr>

            <div style={{'display':'flex'}}>
              <div style={{'flex':'1'}}><img src={frame}></img></div>
              <div style={{'flex':'1'}}>
                <div>You have 3 items left in your {this.state.plan_name}.</div>
                <div><img src={continueshopping}></img></div>
              </div>
            </div>

          </div>

        </div>


        {/*Reviews*/}
        <div class="review-buffer"> </div>
        <div class="rectangle-product">
          <div class="review-buffer"> </div>
          <div className="flex-container-review">
            <div class="flex-child-stars">
              <div><img src={reviews}></img></div>
              <br></br>
              <div><img src={writeAReview}></img></div>
            </div>
            <div class="flex-child-ratings-chart">
              <img src={reviewChart} class="reviewChartImg"></img>
            </div>
          </div>
        </div>

        {/*charmelemom*/}

        <div class="reviews">
          <span class="individual-info"><img src={chamelemom}></img></span>
          <span><img src={chamelemomInfo} class="reviewChartImg"></img></span>
        </div>
        <hr class="line"></hr>
        <div class="reviews">
          <span class="individual-info"><img src={chameledad}></img></span>
          <span><img src={chameledadInfo} class="reviewChartImg"></img></span>
        </div>
        <hr class="line"></hr>
        <div class="reviews">
          <span class="individual-info"><img src={chamelefam}></img></span>
          <span><img src={chamelefamInfo} class="reviewChartImg"></img></span>
        </div>
        <br></br>
        <div><img src={seeMoreReviews} class="see-more-reviews"></img></div>
        <br></br>


        {/*You May Also Like*/}

        <div className="new-arrivals">
          <div className="also-like-title">You may also like</div>

          <div class="scrolling-wrapper">
            <div class="card"><img class="no-hover-item" src={clothing1}></img></div>
            <div class="card"><img class="no-hover-item" src={clothing2}></img></div>
            <div class="card"><img class="no-hover-item" src={clothing3}></img></div>
            <div class="card"><img class="no-hover-item" src={clothing4}></img></div>
          </div>

          <div><a href="/shop"><img src={shopall} className="shop-all"></img></a></div>
        </div>


        {/*footer*/}
        <div>
          <Footer></Footer>
        </div>

      </fragment>

    );
  }
}