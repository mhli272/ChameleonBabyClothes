import React, { Component } from 'react';
import "./Footer.css";
import ig from "../../images/instagram.png";
import tw from "../../images/twitter.png";
import  fb  from "../../images/facebook.png";
import submit from "../../images/submit.png";

class Footer extends Component {


    waitlistSignup() {
        if (document.getElementById("footer-waitlist").value != "") {
            var modal = document.getElementById("footer-myModal");
            modal.style.display = "block";

        }
    }

    closeModal() {
        var modal = document.getElementById("footer-myModal");
        modal.style.display = "none";
    }


    render() {
        return (
            <div className="flex-container-footer">
                <div class="flex-child-footer">
                    <div class="footer-header">Our Product</div>
                    <div class="footer-body-margin"><a class="footer-body" href="/shop">Shop</a></div>
                    <div class="footer-body-margin"><a class="footer-body" href="/how-it-works">How It Works</a></div>
                    <div class="footer-body-margin"><a class="footer-body" href="/FAQ">FAQ</a></div>
                </div>
                <div class="flex-child-footer">
                    <div class="footer-header">Our Mission</div>
                    <div class="footer-body-margin"><a class="footer-body" href="/about">About</a></div>
                    <div class="footer-body-margin"><a class="footer-body" href="/our-impact">Our Impact</a></div>
                </div>
                <div class="flex-child-footer">
                    <div class="footer-header">Follow Us</div>
                    <a class="footer-body" href="https://www.instagram.com/chameleonbabyclothes/"><img class="icon" src={ig}></img></a>
                    <a class="footer-body" href="https://www.instagram.com/chameleonbabyclothes/"><img class="icon" src={tw}></img></a>
                    <a class="footer-body" href="https://www.instagram.com/chameleonbabyclothes/"><img class="icon" src={fb}></img></a>
                    <div class="footer-header">Stay Connected</div>
                    <input id="footer-waitlist" type="text" className="footer-email-input" placeholder="Type your email here..."></input>
                    <img src={submit} className="footer-sign-up-button" onClick={this.waitlistSignup}></img>
                    {/* The Modal --> */}
                    <div id="footer-myModal" class="modal">
                        {/* Modal content --> */}
                        <div class="modal-content">
                            <span class="close" onClick={this.closeModal}>&times;</span>
                            <p class="pText">Thank you for signing up for our waitlist! We can't wait to bring you our amazing products soon!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer