import React, { Component } from 'react';
import "./Footer.css";
import ig from "../../images/instagram.png";
import tw from "../../images/twitter.png";
import  fb  from "../../images/facebook.png";


class Footer extends Component {

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
                </div>

            </div>
        )
    }
}

export default Footer