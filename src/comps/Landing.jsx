import React, { useState } from 'react';
import Nav from './Nav';
import landingImage from '../scrap.gif'

export default function Landing() {

    const [signedIn, setSignedIn] = useState(localStorage.getItem("token"));
    return (

        <div className='landing-wrapper'>
            <Nav signedIn={signedIn} />

            <h2>Landing</h2>
            <img src={landingImage} alt="" />
        </div>
    )
}
