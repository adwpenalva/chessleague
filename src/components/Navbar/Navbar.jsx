import logo from './../../midia/ACL_Art_FULL.svg';
// import './css/styles.scss'
import './Navbar.scss';
import { Link, NavLink as NLink } from "react-router-dom"
import profilePic from './../Profile/zyzz.jpg'

function Navbar() {
  return (
    <div className="Navbar">
        <nav className="navbar container-shadow">
            <Link to="/"className="navbar-brand primary-text">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            </Link>

                <ul className="navbar-nav">
                  <li className="nav-item">
                      <Link to="/league" className="nav-link">League</Link>
                  </li>
                </ul>

            <Link to="/profile" className="nav-profile mt-1">
              <img src={profilePic} width="30" height="30" className="d-inline-block align-top round mr-2" alt="user profile"></img><span className="profileName">Penny Penalva</span></Link>
        </nav>
    </div>
  );
}

export default Navbar;
