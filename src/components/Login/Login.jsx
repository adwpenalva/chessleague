import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '852767129869-sus3k6jodceu2786j8iba3cge43n11fg.apps.googleusercontent.com';

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    onSuccess = (res) => {
        this.props.sendUserInfoFromLogin(res)
        console.log('[Login Success] currentUser:', res.profileObj);
    };

    onFailure = (res) => {
        console.log('[Login failed] res:', res);
    };

    render() {
        return (
            <div>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={this.onSuccess}
                    onFailure={this.onFailure}
                    cookiePolicy={'single_host_origin'}
                    style={{ marginTop: '100px'}}
                    isSignedIn={true}
                />
            </div>
        )
    }

}