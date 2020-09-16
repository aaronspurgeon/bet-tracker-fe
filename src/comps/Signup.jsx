import React, { useState, useCallback } from 'react';
import Loading from './Loading';
import axiosWithAuth from "../utils/api";
import axios from 'axios'
import { useEffect } from 'react';
import uuid from 'react-uuid'


function Signup(props) {
    const [error, setError] = useState();
    const [data, setData] = useState({
        id: uuid(),
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        wins: 0,
        loss: 0
    })
    const [userId, setUserId] = useState(null)

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        axiosWithAuth()
            .post('/auth/register', data)
            .then(result => {
                setUserId(result.data)
                setData({
                    email: '',
                    password: '',
                    firstName: '',
                    lastName: ''
                })
                props.history.push("/")
            })
            .catch(err => {
                throw (err)
            })
    }

    return (
        <div className='center'>
            <div className='signupSection'>
                <form onSubmit={handleSubmit} className='signupForm'>
                    {error && <div className='error'>{error}</div>}
                    <h2>Sign Up</h2>
                    <ul className='noBullet'>
                        <li>
                            <label htmlFor="email"></label>
                            <input type="email" name='email' placeholder='Enter your email' value={data.email} onChange={handleChange} className='inputFields' />
                        </li>
                        <li>
                            <label htmlFor="first"></label>
                            <input type="text" name='firstName' placeholder='Enter your first name' value={data.firstName} onChange={handleChange} className='inputFields' />
                        </li>
                        <li>
                            <label htmlFor="last"></label>
                            <input type="text" name='lastName' placeholder='Enter your last name' value={data.lastName} onChange={handleChange} className='inputFields' />
                        </li>
                        <li>
                            <label htmlFor="password"></label>
                            <input type="password" name='password' placeholder='Enter a password' value={data.password} onChange={handleChange} className='inputFields' />
                        </li>
                        <li id='center-btn'>
                            <button id='join-btn' type='submit'>Submit</button>
                        </li>
                    </ul>


                </form>
            </div>
        </div>

    )
}

export default Signup