import React, { Component } from 'react';

import Site from './Site';
import Footer from './components/Footer';
import Header from './components/Header';
import Top from './components/Top';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Top />
        <Site />
        <Footer />
      </div>
    );
  }
}

export default App;
