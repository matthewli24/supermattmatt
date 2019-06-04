import React, { Component } from 'react';

import Navbar from './components/navbar/navbar';
import Jumbotron from './components/jumbotron/jumbotron';
import Footer from './components/footer/footer';

import './App.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Jumbotron/>
        <Footer/>
      </div>
    );
  }
}

export default App;
