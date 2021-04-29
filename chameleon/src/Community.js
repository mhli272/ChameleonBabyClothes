import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import './Community.css';
import { Redirect } from "react-router-dom";

import community1 from './images/community_post_1.png';
import community2 from './images/community_post_2.png';
import community3 from './images/community_post_3.png';
import community4 from './images/community_post_4.png';

import Footer from './components/Footer/Footer.js';
import Navbar from './components/Navbar/Navbar.js';

export class Community extends React.Component {

    render() {
        return (
            <fragment>
                {/*header*/}
                <div>
                    <Navbar ></Navbar>
                </div>

                <div class="marginFix"> </div>

                <div class="community-title">Community</div>
                <div class="subtitle">We want Chameleon to be a place for parents to share their clothing and tips and tricks for taking care of their newborns</div>
                <div class="community-img"><img src={community1}></img></div>
                <div class="community-img"><img src={community2}></img></div>
                <div class="community-img"><img src={community3}></img></div>
                <div class="community-img"><img src={community4}></img></div>
                <div class="see-more-text">See more posts</div>
                {/*footer*/}
                <div>
                    <Footer></Footer>
                </div>
            </fragment>


        );
    }
}