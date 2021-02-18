import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    onSuccess = (res) => {
        this.props.updateUserData(res)
        console.log('[Login Success] currentUser:', res.profileObj);
    };

    onFailure = (res) => {
        console.log('[Login failed] res:', res);
    };

    render() {
        console.log("clientId", clientId)
        return (
            <div>
            {clientId && 
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={this.onSuccess}
                    onFailure={this.onFailure}
                    cookiePolicy={'single_host_origin'}
                    style={{ marginTop: '100px'}}
                    isSignedIn={true}
                />
            }
            </div>
        )
    }

}