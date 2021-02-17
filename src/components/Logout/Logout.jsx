import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '852767129869-lbmh50g021i37kjukuudk0g9tclvfpir.apps.googleusercontent.com';

function Logout() {
    const onSuccess = () => {
        alert('Logout made successfully');
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    );
}

export default Logout;