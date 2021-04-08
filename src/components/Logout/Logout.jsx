import React from 'react';
import { GoogleLogout } from 'react-google-login';
import api from "../../services/api";

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

function Logout() {
    const onSuccess = () => {
        alert('Logout made successfully');
        api.logoutGoogleUser();
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