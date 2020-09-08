import React, { useState, useEffect } from 'react';
import Nav from './Nav'
import axios from 'axios';
import Graph from './Graph';


export default function Home({ id }) {
    const [signedIn, setSignedIn] = useState(localStorage.getItem("token"));

    const [bets, setBets] = useState([]);
    const userId = localStorage.getItem('user')

    useEffect(() => {
        axios
            .get(`http://localhost:8080/bets/all/${userId}`)
            .then(res => {
                setBets(res.data)
                console.log(res.data)
            })
            .catch(err => {
                throw (err);
            })
    }, bets)
    return (
        <div>
            <Nav signedIn={signedIn} />
            <h1>Home</h1>
            <Graph />
            <div>
                {bets.map((bet, id) => (
                    <div key={id}>
                        <p>{bet.opponent1} vs {bet.opponent2}</p>
                        <p>Result: </p>
                    </div>
                ))}
            </div>
        </div>
    )
}