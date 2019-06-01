import React, { Component } from 'react';

import Navbar from './components/navbar/navbar';
import Jumbotron from './components/jumbotron/jumbotron';

import './App.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Jumbotron/>
        
      </div>
    );
  }
}

export default App;
