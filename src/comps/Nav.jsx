import React, { useState } from 'react';
import Logout from './Logout'
import { Link } from 'react-router-dom';


export default function Nav(props) {
    let user = localStorage.getItem("user_data")
    user = JSON.parse(user)


    return (
        <div className='nav'>
            <h3>Bet Tracker</h3>

            {props.signedIn && (<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <p style={{ fontSize: '1.4rem', marginRight: '20px', borderBottom: '1px solid white' }}>{user.firstName} {user.lastName}</p>
                <Link className='link' to="/logout">Logout</Link>
            </div>)}


            {!props.signedIn && (
                <div>
                    <Link className='link' to='/login'>Login</Link>
                    <Link className='link' to='/signup'>Sign Up</Link>
                </div>
            )}

        </div>
    )
}
