import React from 'react'
import './Home.scss';
import logo from '../../tesaopia.png';


export default function Home(props) {
    return (
        <div className="Home">
        <div className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <br></br>
        <p>
          SOON<sup>(TM)</sup>
        </p>
      </div>
        </div>
    )
}
