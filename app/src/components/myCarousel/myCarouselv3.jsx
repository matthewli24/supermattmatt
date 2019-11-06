import React, { Component }  from 'react';
import './myCarouselv3.scss'

import CppLogo from '../../assets/techStack/c++.svg'
import FirebaseLogo from '../../assets/techStack/firebase.svg'
import GithubLogo from '../../assets/techStack/github.svg'
import MySQLLogo from '../../assets/techStack/mySQL.svg'
import NodeJsLogo from '../../assets/techStack/nodejs.svg'
import ReactLogo from '../../assets/techStack/react.svg'
import PythonLogo from '../../assets/techStack/python.svg'
import HtmlCssJsLogos from '../../assets/techStack/htmlcssjs.svg'
import SassLogo from '../../assets/techStack/sass.svg'
import SketchLogo from '../../assets/techStack/sketch.svg'
import SwiftLogo from '../../assets/techStack/swift.svg'


class MyCarouselv3 extends Component {
  render() {
    return(
      <div className="myCarouselv3Wrapper">
        <div className="carouselItemContainer">
          <img className="carouselItem" src={CppLogo} alt="cpp"/>
          <img className="carouselItem" src={FirebaseLogo} alt="firebase"/>
          <img className="carouselItem" src={GithubLogo} alt="github"/>
          <img className="carouselItem" src={MySQLLogo} alt="mysql"/>
          <img className="carouselItem" src={NodeJsLogo} alt="node"/>
          <img className="carouselItem" src={ReactLogo} alt="react"/>
          <img className="carouselItem" src={PythonLogo} alt="python"/>
          <img className="carouselItem" src={HtmlCssJsLogos} alt="html"/>
          <img className="carouselItem" src={SassLogo} alt="sass"/>
          <img className="carouselItem" src={SketchLogo} alt="sketch"/>
          <img className="carouselItem" src={SwiftLogo} alt="swift"/>
        </div>

      </div>
    )
  }

};

export default MyCarouselv3