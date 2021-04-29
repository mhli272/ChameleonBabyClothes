import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import "./index.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {Main} from './Main.js'
import {Shop} from './Shop.js'
import {HowItWorks} from './HowItWorks.js'
import {Favorites} from './Favorites.js'
import {Product} from './Product.js'
import {Community} from './Community.js'

export default function App() {

  return (
   <Router>
    <main>


  <Route path="/" exact component={Main} />
  <Route path="/shop" component={Shop} />
  <Route path="/how-it-works" component={HowItWorks} />
  <Route path="/community" component={Community} />
  <Route path="/favorites" component={Favorites} />
  <Route path="/product" component={Product} />
    </main>
  </Router>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));