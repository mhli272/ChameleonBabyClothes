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
import headerstars from './images/headerstars.png';

import colored_organics_sizing from './images/colored_organics_sizing.png';
import jacadi_sizing from './images/jacadi_sizing.png';
import monica_andy_sizing from './images/monica_andy_sizing.png';
import winter_water_factory_sizing from './images/winter_water_factory_sizing.png';

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
      plan_mode: JSON.parse(localStorage.getItem('plan_mode')), //0 = monthly, 1 means seasonal
      date_display: 'MM/DD/YYYY - MM/DD/YYYY',
      items_left: 0,
      items: [],//0 means hidden
      product_details: 0,
      about_the_brand: 0,
      sizing_chart_url: null,
      brand_description: null
    }
  }

  revealSizing(num) {
    if (num == 1) {
      if (this.state.brand == 'Monica + Andy') {
        this.setState({ sizing_chart_url: monica_andy_sizing })
      }
      else if (this.state.brand == 'Jacadi') {
        this.setState({ sizing_chart_url: jacadi_sizing })
      }
      else if (this.state.brand == 'Winter Water Factory') {
        this.setState({ sizing_chart_url: winter_water_factory_sizing })
      }
      else if (this.state.brand == 'Colored Organics') {
        this.setState({ sizing_chart_url: colored_organics_sizing })
      }
      var content = document.getElementById("style-fit");
      content.style.display = "block";
    }
    else {
      var content = document.getElementById("style-fit");
      content.style.display = "none";
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
      if (this.state.plan_mode == 1) {
        var tempArr = [];
        this.setState({ items: tempArr })
        localStorage.setItem('cartList', JSON.stringify(tempArr));
      }
      this.setState({ plan_mode: 0 });
      localStorage.setItem('plan_mode', 0);

    }
    else {
      this.setState({ plan_name: 'Seasonal Plan' })
      this.setState({ start_date: 'May 1st, 2021' })
      this.setState({ return_date: 'August 1st, 2021' })
      if (this.state.plan_mode == 0) {
        var tempArr = [];
        this.setState({ items: tempArr })
        localStorage.setItem('cartList', JSON.stringify(tempArr));
      }
      this.setState({ plan_mode: 1 });
      localStorage.setItem('plan_mode', 1);
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

  updateItemsLeft() {
    var temp;
    var tempArr = JSON.parse(localStorage.getItem("cartList"));
    if (this.state.plan_mode == 0) {
      if (tempArr == null) {
        temp = 5
      }
      else {
        temp = 5 - tempArr.length;
      }
    }

    else {
      if (tempArr == null) {
        temp = 8
      }
      else {
        temp = 8 - tempArr.length;
      }
    }
    this.setState({ items_left: temp })
  }

  addToCart() {
    if (!(JSON.parse(localStorage.getItem("cartList")) == null ||
      (this.state.plan_mode == 0 && JSON.parse(localStorage.getItem("cartList")).length < 5) ||
      (this.state.plan_mode == 1 && JSON.parse(localStorage.getItem("cartList")).length < 8))) {
      return;
    }

    if (this.state.date_display != 'MM/DD/YYYY - MM/DD/YYYY') {
      //if monthly
      var mini_cart = document.getElementById("mini-cart");
      mini_cart.style.display = "block";

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

      if (localStorage.getItem("cartList") == null) {
        var tempArr = [];
        tempArr.push(item);
        this.setState({ items: tempArr })
        localStorage.setItem('cartList', JSON.stringify(tempArr));
      } else {
        var tempArr = JSON.parse(localStorage.getItem("cartList"));
        tempArr.push(item);
        this.setState({ items: tempArr })
        localStorage.setItem('cartList', JSON.stringify(tempArr));
      }

    }

    this.updateItemsLeft();

  }

  removeCartItem(id) {
    var tempArr = JSON.parse(localStorage.getItem("cartList"));
    if (tempArr != null) {
      for (var i = 0; i < tempArr.length; i++) {
        if (tempArr[i].id == id) {
          tempArr.splice(i, 1);
          localStorage.setItem('cartList', JSON.stringify(tempArr));
          this.setState({ items: tempArr });
          break;
        }
      }
    }
    this.updateItemsLeft();
  }

  closeMinicart() {
    var mini_cart = document.getElementById("mini-cart");
    mini_cart.style.display = "none";
  }

  reveal(num) {

    if (num == 2) {
      var content = document.getElementById("product-details");
      if (this.state.product_details == 0) {
        content.style.display = "block";
        this.setState({ product_details: 1 });
      }

      else {
        content.style.display = "none";
        this.setState({ product_details: 0 });
      }
    }
    else if (num == 3) {
      var content = document.getElementById("about-the-brand");
      if (this.state.about_the_brand == 0) {
        if (this.state.brand == 'Monica + Andy') {
          this.setState({ brand_description: "Monica + Andy wasn’t born in a boardroom. It was born in a delivery room to a mom, who in that moment, wanted nothing more than to know with absolute confidence that what touched her daughter’s newborn skin would be the softest, most trustworthy fabric available. A mom who, when she couldn’t easily find those products, vowed to make them herself. Using the softest, safest GOTS-certified organic fabrics, we make limited-edition prints and mix-and-match essentials. We understand that there’s no one-size-fits-all way to do this mom thing. Welcome to Monica + Andy. Motherhood done your way." })
        }
        else if (this.state.brand == 'Jacadi') {
          this.setState({ brand_description: "Since 1976, Jacadi Paris has crafted collections that reimagines the timeless heritage of French fashion for children. As a contemporary brand with classic roots, Jacadi creates clothes, accessories, shoes, and nursery items that celebrate the magic and whimsy of childhood." })
        }
        else if (this.state.brand == 'Winter Water Factory') {
          this.setState({ brand_description: "Winter Water Factory is a Brooklyn-based design and manufacturing company specializing in screen printed textiles and organic kids' clothing. Fresh, bold, and beautiful textile prints are the signature of Winter Water Factory. Printed on soft organic cotton and fashioned into classic designs, our line of kids' clothing has been a great success with retailers and consumers alike. We believe in creating high-quality products for a healthy planet. Every item is crafted from 100% organic cotton and is made in the USA—from the fabric to the final stitch." })
        }
        else if (this.state.brand == 'Colored Organics') {
          this.setState({ brand_description: "Honest, ethical, and absolutely adorable. These values have inspired every aspect of what we do at Colored Organics. Our founding Mama, Amanda, knew that making the switch to organic, ethical fashion for her family could make a big difference in the clothing industry. That is why we are committed to creating clothes that do good, not just in our homes, but throughout every stage of production and beyond the clothing industry." })
        }

        content.style.display = "block";
        this.setState({ about_the_brand: 1 });
      }

      else {
        content.style.display = "none";
        this.setState({ about_the_brand: 0 });
      }
    }

  }

  clickedFavorite() {
    if (this.state.favorite == heart_outline) {
      this.setState({ favorite: heart_fill });
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
      if (localStorage.getItem("favoritesList") == null) {
        var tempArr = [];
        tempArr.push(item);
        localStorage.setItem('favoritesList', JSON.stringify(tempArr));
      } else {
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
    } else {
      this.setState({ favorite: heart_outline });
      localStorage.setItem('favorite', JSON.stringify(heart_outline));
      var tempArr = JSON.parse(localStorage.getItem("favoritesList"));
      var newArr = [];
      for (var i = 0; i < tempArr.length; i++) {
        if (this.state.id != tempArr[i].id) {
          tempArr[i].favorite = heart_fill;
          newArr.push(tempArr[i]);
        } else {
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

        <div class="product-buffer"> </div>

        <div class="flex-container-product">

          <div class="flex-child-product">
            <img style={{ width: "500px" }} src={this.state.imgName}></img>


          </div>
          <div class="flex-child-product:first-child" >

            <div style={{ 'display': 'flex' }}>
              <span style={{ 'white-space': 'nowrap', 'font-family': "DM Sans", 'font-style': "normal", 'font-weight': "bold", 'font-size': "32px", 'color': "#333333" }}>{this.state.name}</span>
              <span style={{ width: '100%', 'flex-shrink': '3' }}></span>
              <span><img class="product-heart-size" onClick={() => this.clickedFavorite()} src={this.state.favorite}></img></span>
            </div>
            <div style={{ 'font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': 'bold', 'font-size': '18px', 'line-height': '23px', 'letter-spacing': '0.15em', 'color': '#828282' }}>{this.state.age}</div>
            <div style={{ 'font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': 'normal', 'font-size': '18px', 'line-height': '23px', 'color': '#828282' }}>{this.state.brand}</div>
            <div style={{ 'margin-top': '10px', 'margin-bottom': '10px' }}>
              <span style={{ 'vertical-align': 'middle' }}><img src={headerstars}></img></span>
              <span style={{ 'margin-left': '20px', 'vertical-align': 'middle', 'font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': 'normal', 'font-size': '14px', 'line-height': '16px', 'color': '#828282' }}>34 reviews</span>
            </div>
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

            <div onClick={() => this.revealSizing(1)} style={{ 'cursor': 'pointer', 'display': 'flex', 'margin-top': '50px', 'margin-bottom': '20px' }}>
              <div style={{ 'font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': '500', 'font-size': '18px', 'line-height': '23px', 'letter-spacing': '0.15em', 'color': '#333333', 'flex': '1', 'white-space': 'nowrap' }}>STYLE & FIT</div>
              <div style={{ 'width': '100%', 'flex-shrink': '3' }}></div>
              <div style={{ 'font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': '500', 'font-size': '30px', 'line-height': '23px', 'letter-spacing': '0.15em', 'color': '#333333', 'flex': '1' }}>+</div>
            </div>


            <hr></hr>

            <div onClick={() => this.reveal(2)} style={{ 'cursor': 'pointer','display': 'flex', 'margin-bottom': '20px', 'margin-top': '20px' }}>
              <div style={{ 'font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': '500', 'font-size': '18px', 'line-height': '23px', 'letter-spacing': '0.15em', 'color': '#333333', 'flex': '1', 'white-space': 'nowrap' }}>PRODUCT DETAILS</div>
              <div style={{ 'width': '100%', 'flex-shrink': '3' }}></div>
              <div style={{ 'font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': '500', 'font-size': '30px', 'line-height': '23px', 'letter-spacing': '0.15em', 'color': '#333333', 'flex': '1' }}>+</div>
            </div>

            <div id="product-details" style={{ 'display': 'none', 'font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': '500', 'font-size': '16px', 'line-height': '23px', 'letter-spacing': '0.15em', 'color': '#333333', 'white-space': 'nowrap' }}>100% Cotton</div>

            <hr></hr>

            <div onClick={() => this.reveal(3)} style={{ 'cursor': 'pointer','display': 'flex', 'margin-bottom': '20px', 'margin-top': '20px' }}>
              <div style={{ 'font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': '500', 'font-size': '18px', 'line-height': '23px', 'letter-spacing': '0.15em', 'color': '#333333', 'flex': '1', 'white-space': 'nowrap' }}>ABOUT THE BRAND</div>
              <div style={{ 'width': '100%', 'flex-shrink': '3' }}></div>
              <div style={{ 'font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': '500', 'font-size': '30px', 'line-height': '23px', 'letter-spacing': '0.15em', 'color': '#333333', 'flex': '1' }}>+</div>
            </div>

            <div id="about-the-brand" style={{ 'margin-bottom':'20px','font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': '500', 'font-size': '16px', 'line-height': '23px', 'color': '#333333', 'display': 'none', 'overflow-wrap': 'normal', width: '500px'}}>{this.state.brand_description}</div>

            <hr></hr>

            <div style={{ 'cursor': 'pointer', 'display': 'flex', 'margin-bottom': '20px', 'margin-top': '20px' }}>
              <div style={{ 'font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': '500', 'font-size': '18px', 'line-height': '23px', 'letter-spacing': '0.15em', 'color': '#333333', 'flex': '1', 'white-space': 'nowrap' }}>SHARE</div>
              <div style={{ 'width': '100%', 'flex-shrink': '3' }}></div>
              <div style={{ 'font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': '500', 'font-size': '30px', 'line-height': '23px', 'letter-spacing': '0.15em', 'color': '#333333', 'flex': '1' }}>+</div>
            </div>






          </div>

        </div>


        <div id="style-fit" onClick={() => this.revealSizing(0)} className="modal">
          <div className="modal-content" style={{ 'text-align': 'center', width: '100%', 'background-color': 'transparent' }}><img style={{ 'max-width': '50%' }} src={this.state.sizing_chart_url} ></img></div>
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
            <div >
              <div style={{ 'margin-bottom': '40px' }}>
                <span style={{ 'vertical-align': 'middle', 'font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': 'bold', 'font-size': '18px', 'line-height': '23px', 'color': '#333333' }}>Your Shopping Bag</span>
                <span onClick={() => this.closeMinicart()} style={{ 'cursor': 'pointer', 'margin-left': '120px', 'vertical-align': 'middle' }}><img style={{ 'vertical-align': 'middle' }} src={clear}></img></span>
              </div>
              <div style={{ 'font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': 'bold', 'font-size': '16px', 'line-height': '21px', 'color': '#333333' }}>{this.state.plan_name}</div>

              <hr></hr>

              <div style={{ 'margin-top': '30px', 'margin-bottom': '10px', 'font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': '500', 'font-size': '12px', 'line-height': '18px', 'letter-spacing': '0.15em' }}>DELIVERY + RETURN DATES</div>

              <div style={{ 'margin-bottom': '10px', 'padding-bottom': '5px', 'padding-top': '5px', 'padding-left': '15px', 'border-radius': '4px', 'width': '200px', 'border': '2px solid #BDBDBD', 'font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': '500', 'font-size': '11px', 'line-height': '13px', 'color': '#333333' }} >
                <span style={{ 'vertical-align': 'middle', 'margin-right': '7px' }}><img style={{ height: '25px', 'vertical-align': 'middle' }} src={calender_icon}></img></span>
                <span style={{ 'vertical-align': 'middle' }}>{this.state.date_display}</span>
              </div>
            </div>
            <div style={{ 'margin-bottom': '20px' }}>
              {this.state.items.map(item =>
                (<div >

                  <div onClick={() => this.removeCartItem(item.id)} style={{ 'text-align': 'right' }}><img style={{ 'opacity': '30%', height: '20px', 'cursor': 'pointer' }} src={clear}></img></div>
                  <div style={{ 'display': 'flex' }}>
                    <div style={{ 'flex': '1', 'margin-right': '20px' }}><img style={{ height: '150px' }} src={item.imgName}></img></div>
                    <div style={{ 'flex': '1' }}>
                      <div style={{ 'white-space': 'nowrap', 'font-family': "DM Sans", 'font-style': "normal", 'font-weight': "bold", 'font-size': "16px", 'color': "#333333" }}>{item.name}</div>
                      <div style={{ 'font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': 'bold', 'font-size': '14px', 'line-height': '23px', 'letter-spacing': '0.15em', 'color': '#828282' }}>{item.age}</div>
                      <div style={{ 'font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': 'normal', 'font-size': '12px', 'line-height': '23px', 'color': '#828282' }}>{item.brand}</div>
                    </div>
                  </div>
                </div>))}
            </div>



            <div >
              <hr></hr>
              <div style={{ 'display': 'flex', 'margin-top': '20px', 'padding-bottom': '30px' }}>
                <div style={{ 'flex': '1' }}><img src={frame}></img></div>
                <div style={{ 'flex': '1' }}>
                  <div style={{ 'margin-bottom': '20px', 'font-family': 'DM Sans', 'font-style': 'normal', 'font-weight': '500', 'font-size': '16px', 'line-height': '21px', 'color': '#828282' }}>You have {this.state.items_left} items left in your {this.state.plan_name}.</div>
                  <div ><a href="/shop"><img className="continue-shopping" src={continueshopping}></img></a></div>
                </div>
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