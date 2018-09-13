import React, { Component } from 'react';

import Site from './Site';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Services />
        <Site />
        <Footer />
      </div>
    );
  }
}

export default App;
