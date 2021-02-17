import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '852767129869-lbmh50g021i37kjukuudk0g9tclvfpir.apps.googleusercontent.com';

function Login() {
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
    };

    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                render={renderProps => (
                    <button className="test" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        Login MFER
                    </button>
                )}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px'}}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;