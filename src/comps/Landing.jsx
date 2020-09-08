import React, { useState } from 'react';
import Nav from './Nav';

export default function Landing() {

    const [signedIn, setSignedIn] = useState(localStorage.getItem("token"));
    return (

        <div>
            <Nav signedIn={signedIn} />

            <h2>Landing</h2>

        </div>
    )
}
