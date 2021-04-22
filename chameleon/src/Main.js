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
import brandImg from './images/OurBrands.png';
import wasteImg from './images/wasteImage.png';
import community1 from './images/community1.png';
import community2 from './images/community2.png';
import community3 from './images/community3.png';
import community4 from './images/community4.png';


import Footer from './components/Footer/Footer.js';
import Navbar from './components/Navbar/Navbar.js';


export class Main extends React.Component {


  waitlistSignup(){
    if (document.getElementById("waitlist").value!="") {
      var modal = document.getElementById("myModal");
      modal.style.display = "block";

    }
  }

  closeModal(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }



  render() {
    return (



      
		<fragment>
 
 {/*header*/}
  <div>
  <Navbar ></Navbar>
  </div> 

  <div class="buffer"> </div>


{/*home photo*/}
<div class="flex-container-main">

  <div class="flex-child">
  <img src={babyclothesImg} ></img>
  </div>

  <div class="flex-child main-background" >
      <div className="main-title">Renting baby clothes has never been easier.</div>
      <div className="main-subtitle">Join Chameleon today and choose from 20+ styles.</div>
      <input id="waitlist" type="text" className="email-input" placeholder="Type your email here..."></input>
      <div><img src={signupImg} className="sign-up-button" onClick={this.waitlistSignup}></img></div>
      {/* The Modal --> */}
      <div id="myModal" class="modal">

        {/* Modal content --> */}
        <div class="modal-content">
          <span class="close" onClick={this.closeModal}>&times;</span>
          <p>Thank you for signing up for our waitlist! We can't wait to bring you our amazing products soon!</p>
        </div>

      </div>
  </div>

</div>

{/*new arrivals list*/}
<div className="new-arrivals">
  <div className="new-arrivals-title">New arrivals</div>

  <div class="scrolling-wrapper">
    <div class="card"><img class="item" src={clothing1}></img></div>
    <div class="card"><img class="item" src={clothing2}></img></div>
    <div class="card"><img class="item" src={clothing3}></img></div>
    <div class="card"><img class="item" src={clothing4}></img></div>
  </div>

  <div><img src={shopall} className="shop-all"></img></div>
</div>    
        
{/*sanitation*/}
<div class="flex-container-sanitation">

  <div class="flex-child" >
    <div className="sanitation-title">Clean and safe.</div>
    <div className="sanitation-subtitle">We make sure every piece undergoes an extensive cleaning process as it gets returned by our customers.</div>
    <div><img src={sanitationImg} className="sign-up-button"></img></div>
  </div>

  <div className="sanitation-buffer"></div>

  <div class="flex-child">
  <img src={washingmachines} ></img>
</div>

</div>

{/*Our Brands*/}

<div class="brand">
  <img src={brandImg}></img>
</div>

{/*Textile Waste*/}

<div class="flex-container-waste">

  <div class="flex-child">
    <img src={wasteImg} ></img>
  </div>


  <div class="flex-child">
    <div className="waste-title">Over 15 million tons of textile waste is generated annually in the United States.</div>
    <div className="waste-subtitle">Join Chameleon today. It's the sustainable choice for you, your baby, and the planet. Read more about our impact here.</div>
  </div>
</div>

{/*Community*/}
<div className="new-arrivals">
  <div className="new-arrivals-title">Community</div>

  <div class="scrolling-wrapper">
    <div class="post-card"><img class="post" src={community1}></img></div>
    <div class="post-card"><img class="post" src={community2}></img></div>
    <div class="post-card"><img class="post" src={community3}></img></div>
    <div class="post-card"><img class="post" src={community4}></img></div>
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