import React from 'react'
import { Redirect } from 'react-router-dom'

function Logout(props) {
    localStorage.clear()
    sessionStorage.clear()
    return <Redirect to='/' />
}

export default Logout;