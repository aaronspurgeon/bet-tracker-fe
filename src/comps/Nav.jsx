import React, { useState } from 'react';
import Logout from './Logout'
import { Link } from 'react-router-dom';


export default function Nav(props) {
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token'))
    const logOut = () => {
        localStorage.clear()
    }
    return (
        <div>

            {props.signedIn && (<Link to="/logout">Logout</Link>)}


            {!props.signedIn && (
                <>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Sign Up</Link>
                </>
            )}

        </div>
    )
}
