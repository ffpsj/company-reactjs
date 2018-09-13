import React, { Component } from 'react';

import Site from './Site';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Site />
        <Footer />
      </div>
    );
  }
}

export default App;
