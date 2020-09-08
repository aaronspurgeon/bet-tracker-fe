import React, { useState } from "react"
import axiosWithAuth from "../utils/api"

function Login(props) {
    const [error, setError] = useState()
    const [data, setData] = useState({
        password: '',
        email: ''
    })

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        })
        console.log(data.email)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        // We are using are axios instance with predefined values,
        // rather than just plain old axios
        axiosWithAuth()
            .post("/auth/login", data)
            .then(result => {
                // Store our new token in local storage so it persists
                localStorage.setItem("token", result.data.token)
                localStorage.setItem("user", result.data.user.id)
                // props.setId(result.data.user.id)
                console.log(result.data)
                // Redirect the user to their account page after logging in
                props.history.push("/home")
            })
            .catch(err => {
                console.log('this isnt working heres my error ' + err)
            })

    }

    return (
        <div className='form'>
            <div className='signupSection'>
                <form onSubmit={handleSubmit} className='signupForm'>
                    {error && <div className="error">{error}</div>}
                    <h2>Login</h2>
                    <ul className="noBullet">
                        <li>
                            <label htmlFor="email"></label>
                            <input type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange} className='inputFields' />
                        </li>
                        <li>
                            <label htmlFor="password"></label>
                            <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} className='inputFields' />

                        </li>
                        <li id='center-btn'>
                            <button type="submit" id='join-btn'>Sign In</button>

                        </li>
                    </ul>

                </form>
            </div>

        </div>

    )
}

export default Login