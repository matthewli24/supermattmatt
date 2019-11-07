import React, { Component } from 'react';
import './navbar.scss';
import HamburgerMenuIcon from '../../assets/icons/hamburgerMenuIcon.svg';
import CloseMenuIcon from '../../assets/icons/closebtn.svg';
import Logo from '../../assets/icons/whiteLogo.svg';
import { goToTop } from 'react-scrollable-anchor'



class Navbar extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      hamburgerToggled: false,
      btnImage: {HamburgerMenuIcon}
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

  handleLogoClick = () => {
    goToTop();
  }


  render() {
    const responsiveNavList = this.state.hamburgerToggled ?
      <nav className="responsiveNavbarContainer">
        <a className="responsiveNavListItem" href="#about">About</a>
        <a className="responsiveNavListItem" href="#projects">Projects</a>
        <a className="responsiveNavListItem" href="#skills">Skills</a>
        <a className="responsiveNavListItem" href="#contacts">Contact</a>   
      </nav> 
    : null

    const buttonImage = this.state.hamburgerToggled ?
      <img className="hamburgerMenu" src={CloseMenuIcon} alt="HamburgerMenuIcon" onClick={this.handleOnClick}/>
      : <img className="hamburgerMenu" src={HamburgerMenuIcon} alt="HamburgerMenuIcon" onClick={this.handleOnClick}/>



    return(
      <div className="navbarWrapper">

        <div className="topNavbarContainer">
          <div className="navbarLogo" onClick={this.handleLogoClick}>
            <img className="logo" src={Logo} alt="logo"/>
          </div>
          {buttonImage}
        </div>
        
        <div className="navbarContainer">
          <a className="navListItem" href="#about">About</a>
          <a className="navListItem" href="#projects">Projects</a>
          <a className="navListItem" href="#skills">Skills</a>
          <a className="navListItem" href="#contacts">Contact</a>   
          
        </div>

        {responsiveNavList}
      </div>
    );
  }
}

export default Navbar;