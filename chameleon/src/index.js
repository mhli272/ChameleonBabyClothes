import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
import "./index.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {Main} from './Main.js'
import {Shop} from './Shop.js'

export default function App() {
  return (
   <Router>
    <main>


  <Route path="/" exact component={Main} />
  <Route path="/shop" component={Shop} />
    </main>
  </Router>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));