import React, { Component } from 'react';

import Navbar from './components/navbar/navbar';
import Jumbotron from './components/jumbotron/jumbotron';
import Bio from './components/bio/bio';
import MyCarousel from './components/myCarousel/myCarousel';
import Chat from './components/chat/chat';
import Footer from './components/footer/footer';

import './App.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Jumbotron/>
        <MyCarousel/>
        <Chat/>
        <Footer/>
      </div>
    );
  }
}

export default App;
