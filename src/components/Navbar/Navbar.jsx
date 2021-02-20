import React, { Component } from 'react';
import logo from './../../midia/ACL_Art_FULL.svg';
// import './css/styles.scss'
import './Navbar.scss';
import { Link, NavLink as NLink } from "react-router-dom"
import defaultPic from './../Profile/zyzz.jpg'

export default class Navbar extends Component {
  constructor(props) {
    super(props);
      this.state= {
        lightMode: false,
        style: null,
      }

  };
  toggleLightMode =(e) => {
      this.setState({
        ...this.state,
        lightMode: !this.state.lightMode,
      }, () =>{
        this.toggleStyle();
      });
  };

    toggleStyle = () => {
      if(this.state.lightMode) {
        /* LIGHT MODE STYLE */
        this.setState({
            ...this.state,
          style:{
            primary: "#ffffff" ,
            secondary: "#282c34",
            text_primary:"#282c34" ,
            text_secondary:"#ffffff" ,
            primary_button_bg: "#ffffff",
            primary_bg: "#ffffff",
            secondary_bg: "rgb(20, 20, 20)",
            primary_gray: "#dcd9d9",
            main_background: "linear-gradient(0deg, rgba(68,66,66,1) 14%, rgba(147,139,139,0.9110994739692753) 37%, rgba(255,251,251,0.8158613787311799) 80%)",

            }
        }, () => {
          this.applyStyle();
        });
      }
      else if(!this.state.lightMode) {
        /* DARK MODE STYLE */
        this.setState({
          style:{
            primary: "#282c34",
            secondary: "#ffffff",
            text_primary: "#ffffff",
            text_secondary: "#282c34",
            primary_button_bg: "rgb(20, 20, 20)",
            primary_bg: "rgb(20, 20, 20)",
            secondary_bg: "#ffffff",
            primary_gray: "#272727",
            main_background: " linear-gradient(0deg, rgba(13,11,11,1) 20%, rgba(0,0,0,0.9110994739692753) 45%, rgba(13,12,12,0.8158613787311799) 80%)",
          }
        }, () => {
          this.applyStyle();
        });
      };
    };

    applyStyle = () => {
        document.documentElement.style.setProperty('--primary',this.state.style.primary);
        document.documentElement.style.setProperty('-secondary',this.state.style.secondary);
        document.documentElement.style.setProperty('--text-primary',this.state.style.text_primary);
        document.documentElement.style.setProperty('--text-secondary',this.state.style.text_secondary);
        document.documentElement.style.setProperty('--primary-button-bg',this.state.style.primary_button_bg);
        document.documentElement.style.setProperty('--primary-bg',this.state.style.primary_bg);
        document.documentElement.style.setProperty('--secondary-bg',this.state.style.secondary_bg);
        document.documentElement.style.setProperty('--primary-gray',this.state.style.primary_gray);
        document.documentElement.style.setProperty('--main-background',this.state.style.main_background);
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
                <div className="d-flex text_primary align-items-center ml-3">
               {this.state.lightMode ? "Light" : "Dark"}
                <label className="switch">
                  <input type="checkbox"  onClick={e => this.toggleLightMode(e)} />
                  <span className="slider"></span>
                </label>
                </div>

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