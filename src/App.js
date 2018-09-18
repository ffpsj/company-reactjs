import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
//BrowserRouter encapsulates all routes and Route creates routes

import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './admin/Admin';
import Login from './admin/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          {/*
            * if I don't put the "exact"
            * every time I go to a route that has the "/"
            * it will load the "about" and the respective component
            */}
          <Route path="/" exact component={About} />
          <Route path="/services" component={Services} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/contact" component={Contact} />
          <Route path="/admin" component={Admin} />
          <Route path="/login" component={Login} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
