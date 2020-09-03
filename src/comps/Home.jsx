import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Graph from './Graph';


export default function Home() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8080/success')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                throw (err);
            })
    }, user)
    return (
        <div>
            <h1>Home</h1>
            <Graph />
        </div>
    )
}