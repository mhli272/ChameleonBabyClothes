import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import "./index.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {Main} from './Main.js'
import {Shop} from './Shop.js'
import {HowItWorks} from './HowItWorks.js'
import {Favorites} from './Favorites.js'
import {Product} from './Product.js'

import clothing1 from './images/clothing1.png';
import clothing2 from './images/clothing2.png';
import clothing1_og from './images/clothing1_og.png';
import clothing2_og from './images/clothing2_og.png';

export default function App() {

  var favorites = [{
    id: 1,
    imgPath: clothing1,
    age: "5-6 months",
    type: "Dresses",
    name: "Floral Dress",
    brand: "Jacadi",
    imgName: clothing1_og
  },
    {
      id: 2,
      imgPath: clothing2,
      age: "3-4 months",
      type: "Onesies",
      name: "Out and About Romper",
      brand: "Monica + Andy",
      imgName: clothing2_og
    }];
  localStorage.setItem("favorites", JSON.stringify(favorites));

  return (
   <Router>
    <main>


  <Route path="/" exact component={Main} />
  <Route path="/shop" component={Shop} />
  <Route path="/how-it-works" component={HowItWorks} />
  <Route path="/favorites" component={Favorites} />
  <Route path="/product" component={Product} />
    </main>
  </Router>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));