import React, { Component } from 'react';
import Firebase from './firebase/firebase';

import Navbar from './components/navbar/navbar';
import Jumbotron from './components/jumbotron/jumbotron';
import About from './components/about/about'
import Education from './components/education/education';
import Experience from './components/experience/experience';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import Footer from './components/footer/footer';
import './App.scss';

import { configureAnchors } from 'react-scrollable-anchor';
configureAnchors({offset: -120, scrollDuration: 300})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //firebase: new Firebase()
    };
}

  render() {
    return (
      <div className="appContainer">
        <Navbar/>
        <Jumbotron/>
        <About/>
        <Projects/>
        <Education/>
        <Footer/>
      </div>
    );
  }
}

export default App;
