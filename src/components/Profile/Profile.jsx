import React, { Component } from 'react';
import './Profile.scss';
import Login from './../Login/Login'
import zyzz from './zyzz.jpg'
import Logout from './../Logout/Logout'

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: {}
        };
    };

    sendUserInfoFromLogin = (res) => {
        this.setState({
            userData: res
        }, () => {
            this.props.sendInfo(this.state.userData);
        })
    }


    render() {

        return (
            <div className="title">
                <h2 className="pt-1">{this.state.userData.profileObj ? this.state.userData.profileObj.name : 'MAMALDINHO'}</h2>
                <img src={this.state.userData.profileObj ? this.state.userData.profileObj.imageUrl : zyzz} alt="modern god"></img>
                <span><b>Email:</b>{this.state.userData.profileObj ? this.state.userData.profileObj.email : 'n tem'}</span>
                <span>Honors:</span>
                <Login sendUserInfoFromLogin={this.sendUserInfoFromLogin}/>
                <Logout />
            </div>
        )
    }
}