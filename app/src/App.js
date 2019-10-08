import React, { Component } from 'react';
import Firebase from './firebase/firebase';

import Navbar from './components/navbar/navbar';
import Jumbotron from './components/jumbotron/jumbotron';
import Education from './components/education/education';
import Experience from './components/experience/experience';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import MyCarousel from './components/myCarousel/myCarousel';
import MyCarouselv2 from './components/myCarousel/myCarouselv2';
import Chat from './components/chat/chat';
import Comments from './components/comments/comments';
import About from './components/about/about'
import Footer from './components/footer/footer';
import './App.scss';

import { configureAnchors } from 'react-scrollable-anchor';
configureAnchors({offset: -100, scrollDuration: 300})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //firebase: new Firebase()
    };
}

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Jumbotron/>
        <About/>
        <Experience/>
        <Projects/>
        <Education/>
        <Skills/>
        
        {/* <MyCarousel/> */}
        {/* <MyCarouselv2/> */}
        {/* <Chat firebase={this.state.firebase}/>
        <Comments firebase={this.state.firebase}/> */}
        <Footer/>
      </div>
    );
  }
}

export default App;
