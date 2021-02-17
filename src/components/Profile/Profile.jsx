import React, { Component } from 'react';
import './Profile.scss';
import profilePic from './zyzz.jpg';
import Login from './../Login/Login'
import Logout from './../Logout/Logout'

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playerName: "Penny Penalva",
            lichessRating: 1130,
            picUrl: ''
        }
    };

    // getUserInfo () {
    //     this.setState({
    //         ...this.state,
    //         playerName: {playerName}
    //     })
    // }

    

    render() {
        return (
            <div className="title">
                <h2 className="pt-1">{this.state.playerName}</h2>
                <img src={profilePic} alt="modern god"></img>
                <span>Lichess Rating: <b>{this.state.lichessRating}</b></span>
                <span>Honors:</span>
                <Login />
                <Logout />
            </div>
        )
    }
}