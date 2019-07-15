import React, { Component } from 'react';
import './navbar.scss';
import HamburgerMenuIcon from '../../assets/icons/hamburgerMenuIcon.svg'


class Navbar extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      hamburgerToggled: false
    }
  }


  handleOnClick = () => {
    this.state.hamburgerToggled ? 
      this.setState({
        hamburgerToggled: false
      }) :
      this.setState({
        hamburgerToggled: true
      })
  }


  render() {
    const responsiveNavList = this.state.hamburgerToggled ?
      <nav className="responsiveNavbarContainer">
        <a className="responsiveNavListItem" href="#education">Education</a>
        <a className="responsiveNavListItem" href="#experience">Experience</a>
        <a className="responsiveNavListItem" href="#projects">Projects</a>
        <a className="responsiveNavListItem" href="#skills">Skills</a>
      </nav> 
    : null

    return(
      <div className="navbarWrapper">

        <div className="topNavbarContainer">
          <div className="navbarLogo">SuperMattMatt</div>
          <img className="hamburgerMenu" 
               src={HamburgerMenuIcon} 
               alt="HamburgerMenuIcon"
               onClick={this.handleOnClick}/>
        </div>
        
        <nav className="navbarContainer">
          <a className="navListItem" href="#education">Education</a>
          <a className="navListItem" href="#experience">Experience</a>
          <a className="navListItem" href="#projects">Projects</a>
          <a className="navListItem" href="#skills">Skills</a>
        </nav>

        {responsiveNavList}
      </div>
    );
  }
}

export default Navbar;