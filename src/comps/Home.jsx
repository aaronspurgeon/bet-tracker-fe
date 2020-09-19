import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Bets from './Bets'
import Loading from './Loading';
import axios from 'axios';
import Graph from './Graph';
import SideCar from './SideCar';
import Tabs from './Tabs';

export default function Home(props) {
    const [signedIn, setSignedIn] = useState(localStorage.getItem("token"));

    const [isLoading, setIsLoading] = useState(true);
    let user = localStorage.getItem("user_data")
    user = JSON.parse(user)

    useEffect(() => {
        axios
            .get(`http://localhost:8080/bets/all/${user.id}`)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('bet_list', JSON.stringify(res.data))
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])




    return (
        <div className="home-wrapper">
            <SideCar />

            <div className='content'>
                <Nav signedIn={signedIn} />
                <div className="dashboard">
                    {isLoading && (
                        <Loading />
                    )}
                    <div>

                        {!isLoading && (
                            <>
                                <Tabs />
                                <Graph />
                                <Bets />
                            </>
                        )}
                    </div>
                </div>

            </div>

        </div>
    )
}