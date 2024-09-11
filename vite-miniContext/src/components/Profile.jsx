import React from 'react'
import { useContext } from 'react';
import UserContext from '../Contex/UserContex';

function Profile() {
    const { user } = useContext(UserContext); // Fix typo here

    if (!user.username) {
        return <div>Please Login</div>; // If user is not defined, display 'Please Login'
    }

    return <div>Welcome {user.username}</div>; // If user exists, display the username
}

export default Profile;
