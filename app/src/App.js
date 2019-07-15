import React, { Component } from 'react';
import Firebase from './firebase/firebase';

import Navbar from './components/navbar/navbar';
import Jumbotron from './components/jumbotron/jumbotron';
import Education from './components/education/education';
import Experience from './components/experience/experience';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import MyCarousel from './components/myCarousel/myCarousel';
import Chat from './components/chat/chat';
import Footer from './components/footer/footer';
import Comments from './components/comments/comments';
import './App.scss';

import { configureAnchors } from 'react-scrollable-anchor';
configureAnchors({offset: -100, scrollDuration: 300})

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
        <Education/>
        <Experience/>
        <Projects/>
        <Skills/>
        <MyCarousel/>
        <Chat firebase={this.state.firebase}/>
        <Comments firebase={this.state.firebase}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
