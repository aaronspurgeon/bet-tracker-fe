import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Bets from './Bets'
import Loading from './Loading';
import axios from 'axios';
import Graph from './Graph';


export default function Home(props) {
    const [signedIn, setSignedIn] = useState(localStorage.getItem("token"));

    const [bets, setBets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const userId = localStorage.getItem('user')
    console.log(props.userData)

    useEffect(() => {
        axios
            .get(`http://localhost:8080/bets/all/${props.userData.id}`)
            .then(res => {
                setBets(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                throw (err);
            })
    }, bets, isLoading)
    return (
        <div>
            <Nav signedIn={signedIn} />
            <h1>Home</h1>
            {isLoading && (
                <Loading />
            )}
            <div>

                {!isLoading && (
                    <>
                        <Graph />
                        <Bets bets={bets} />
                        <h1>Hello {props.userData.firstName}</h1>
                    </>
                )}
            </div>
        </div>
    )
}