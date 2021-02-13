import logo from './../../midia/ACL_Art_FULL.svg';
// import './css/styles.scss'
import './Navbar.scss';
import { Link, NavLink as NLink } from "react-router-dom"

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
        </nav>
    </div>
  );
}

export default Navbar;
