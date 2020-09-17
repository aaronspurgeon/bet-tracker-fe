import React, { useState } from 'react';
import Logout from './Logout'
import { Link } from 'react-router-dom';


export default function Nav(props) {
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token'))
    const logOut = () => {
        localStorage.clear()
    }


    return (
        <div className='nav'>
            <h3>Bet Tracker</h3>

            {props.signedIn && (<Link className='link' to="/logout">Logout</Link>)}


            {!props.signedIn && (
                <div>
                    <Link className='link' to='/login'>Login</Link>
                    <Link className='link' to='/signup'>Sign Up</Link>
                </div>
            )}

        </div>
    )
}
