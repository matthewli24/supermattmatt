import React, { Component } from 'react';
import Firebase from './firebase/firebase';

import Navbar from './components/navbar/navbar';
import Jumbotron from './components/jumbotron/jumbotron';
import About from './components/about/about'
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import Footer from './components/footer/footer';
import './App.scss';

import { configureAnchors } from 'react-scrollable-anchor';
configureAnchors({offset: -120, scrollDuration: 300})

class App extends Component {
  
  render() {
    return (
      <div className="appContainer">
        <Navbar/>
        <Jumbotron/>
        <About/>
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
    );
  }
}

export default App;
