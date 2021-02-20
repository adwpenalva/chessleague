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
                    <span className="test">Honors: A B C D E F G H I J K L M N O P Q R S T U V X W Y Z a b c d e f g h i j k l m n o p q r s t u v x w y z 1 2 3 4 5 6 7 8 9 0 ! @ # $ % ¨ * ( ) . , ; : \ | ' " ^ </span>
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