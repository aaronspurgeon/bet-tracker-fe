import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Bets from './Bets'
import Loading from './Loading';
import axios from 'axios';
import Graph from './Graph';


export default function Home(props) {
    const [signedIn, setSignedIn] = useState(localStorage.getItem("token"));

    const [isLoading, setIsLoading] = useState(true);
    let user = sessionStorage.getItem("user_data")
    user = JSON.parse(user)

    useEffect(() => {
        axios
            .get(`http://localhost:8080/bets/all/${user.id}`)
            .then(res => {
                console.log(res.data)
                sessionStorage.setItem('bet_list', JSON.stringify(res.data))
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])




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
                        <h1>Hello {user.firstName}</h1>
                        <Graph />
                        <Bets />
                    </>
                )}
            </div>
        </div>
    )
}