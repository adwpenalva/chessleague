import React, { Component } from 'react';
import logo from './../../midia/ACL_Art_FULL.svg';
// import './css/styles.scss'
import './Navbar.scss';
import { Link, NavLink as NLink } from "react-router-dom"
import defaultPic from './../Profile/zyzz.jpg'
import LightDarkToggle from '../LightDarkToggle/LightDarkToggle';

export default class Navbar extends Component {
  constructor(props) {
    super(props);


  };
  

  render () {
    return(
      <div className="Nav">
        <nav className="navbar container-shadow">
            <Link to="/"className="navbar-brand text_primary">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            </Link>

                <ul className="navbar-nav">
                  <li className="nav-item">
                      <Link to="/league" className="nav-link">League</Link>
                  </li>
                </ul>
          
            <LightDarkToggle />

            <Link to="/profile" className="nav-profile">
            {this.props.user && 
            <React.Fragment>
              <img src={this.props.user.profileObj && this.props.user.profileObj.imageUrl}  width="30" height="30" className="d-inline-block align-top round mr-2" alt="user profile"></img>
              <span className="profileName">{this.props.user.profileObj ? this.props.user.profileObj.name : 'Login'}</span>
            </React.Fragment>
            }
            {!this.props.user &&
              <React.Fragment>
                <img src={defaultPic}  width="30" height="30" className="d-inline-block align-top round mr-2" alt="user profile"></img>
                <span className="profileName">{ 'Login'}</span>
              </React.Fragment>
            }
              </Link>
        </nav>
    </div>
    )
  }
}