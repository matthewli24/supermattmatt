import React, { Component } from 'react';
import Firebase from './firebase/firebase';

import Navbar from './components/navbar/navbar';
import Jumbotron from './components/jumbotron/jumbotron';
import Bio from './components/bio/bio';
import MyCarousel from './components/myCarousel/myCarousel';
import Chat from './components/chat/chat';
import Footer from './components/footer/footer';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firebase: new Firebase()
    };
}

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Jumbotron/>
        <MyCarousel/>
        <Chat firebase={this.state.firebase}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
