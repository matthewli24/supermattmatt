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
        <li className="responsiveNavListItem">Education</li>
        <li className="responsiveNavListItem">Experience</li>
        <li className="responsiveNavListItem">Projects</li>
        <li className="responsiveNavListItem">Skills</li>
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
          <li className="navListItem">Education</li>
          <li className="navListItem">Experience</li>
          <li className="navListItem">Projects</li>
          <li className="navListItem">Skills</li>
        </nav>

        {responsiveNavList}
      </div>
    );
  }
}

export default Navbar;