import React, { Component } from 'react';
import './Profile.scss';
import Login from './../Login/Login'
import zyzz from './zyzz.jpg'
import Logout from './../Logout/Logout'

export default class Profile extends Component {
    constructor(props) {
        super(props);

    };


    render() {

        return (
            <div className="title">
            {this.props.user &&
                <React.Fragment> 
                    <h2 className="pt-1">{this.props.user.profileObj ? this.props.user.profileObj.name : 'MAMALDINHO'}</h2>
                    <img src={this.props.user.profileObj ? this.props.user.profileObj.imageUrl : zyzz} alt="modern god"></img>
                    <span><b>Email:</b>{this.props.user.profileObj ? this.props.user.profileObj.email : 'n tem'}</span>
                    <span>Honors:</span>
                    <Logout />
                </React.Fragment>
            }
                {!this.props.user &&
                <React.Fragment> 
                <h2>Login</h2>
                    <Login updateUserData={this.props.updateUserData}/>
                </React.Fragment>

            }
            </div>
        )
    }
}