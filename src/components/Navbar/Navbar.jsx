import logo from './../../midia/ACL_Art_FULL.svg';
// import './css/styles.scss'
import './Navbar.scss';
import { Link, NavLink as NLink } from "react-router-dom"
import defaultPic from './../Profile/zyzz.jpg'
import { Component } from 'react';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  };

  render () {

    console.log('navbar', this.props.props.profileObj)

    return(
      <div className="Nav">
        <nav className="navbar container-shadow">
            <Link to="/"className="navbar-brand primary-text">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            </Link>

                <ul className="navbar-nav">
                  <li className="nav-item">
                      <Link to="/league" className="nav-link">League</Link>
                  </li>
                </ul>

            <Link to="/profile" className="nav-profile">
              <img src={this.props.props.profileObj ? this.props.props.profileObj.imageUrl : defaultPic}  width="30" height="30" className="d-inline-block align-top round mr-2" alt="user profile"></img><span className="profileName">{this.props.props.profileObj ? this.props.props.profileObj.name : 'Login'}</span>
              </Link>
        </nav>
    </div>
    )
  }
}