import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = process.env.GOOGLE_CLIENT_ID;

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