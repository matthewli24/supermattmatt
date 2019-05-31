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

    console.log(this.state.hamburgerToggled)
  }


  render() {
    const responsiveNavList = this.state.hamburgerToggled ?
      <nav className="responsiveNavbarContainer">
        <li className="responsiveNavListItem">Bio</li>
        <li className="responsiveNavListItem">Timeline</li>
        <li className="responsiveNavListItem">Projects</li>
        <li className="responsiveNavListItem">Contact</li>
      </nav> 
    : null

    return(
      <div className="navbarWrapper">

        <div className="topNavbarContainer">
          <div className="navbarLogo">SuperMattMatt</div>
          <img className="hamburgerMenu" src={HamburgerMenuIcon} onClick={this.handleOnClick}/>
        </div>
        
        <nav className="navbarContainer">
          <li className="navListItem">Bio</li>
          <li className="navListItem">Timeline</li>
          <li className="navListItem">Projects</li>
          <li className="navListItem">Contact</li>
        </nav>

        {responsiveNavList}
      </div>
    );
  }
}

export default Navbar;