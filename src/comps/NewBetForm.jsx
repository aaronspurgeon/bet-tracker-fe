import React, { useState } from 'react';
import axiosWithAuth from "../utils/api";
import { Link } from 'react-router-dom'

export default function NewBetForm() {

    let user = localStorage.getItem("user_data");
    user = JSON.parse(user);

    const [betData, setBetData] = useState({
        opponent1: '',
        opponent2: '',
        win_loss: 'win',
        units: '',
        sport: 'MMA',
        user_id: user.id
    })

    const handleChange = (event) => {
        setBetData(
            {
                ...betData,
                [event.target.name]: event.target.value,
            }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post("http://localhost:8080/bets/new", betData)
            .then(res => {
                console.log(res)
                setBetData({
                    opponent1: '',
                    opponent2: '',
                    win_loss: 'win',
                    units: '',
                    sport: 'MMA',
                    user_id: user.id
                })
            })
            .catch(err => {
                console.log(err)
            })

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="sport">Choose a sport:</label>
                <select onChange={handleChange} name="sport" id="sport">
                    <option name="MMA" value="MMA">MMA</option>
                    <option name="NBA" value="NBA">NBA</option>
                    <option name="NFL" value="NFL">NFL</option>
                    <option name="MLB" value="MLB">MLB</option>
                    <option name="NHL" value="NHL">NHL</option>
                </select>
                <div style={{ display: 'flex' }}>
                    <input type="text" placeholder='Opponent One' value={betData.opponent1} name='opponent1' onChange={handleChange} />
                    <p>VS</p>
                    <input type="text" placeholder='Opponent Two' value={betData.opponent2} name='opponent2' onChange={handleChange} />
                </div>
                <input type="radio" id="win" name="win_loss" value="win" defaultChecked='true' onChange={handleChange} />
                <label htmlFor="win">Win</label>
                <input type="radio" id="loss" name="win_loss" value="loss" onChange={handleChange} />
                <label htmlFor="loss">Loss</label>
                <br />
                <input type="text" name='units' onChange={handleChange} value={betData.units} placeholder={betData.win_loss === 'win' ? 'Units gained' : 'Units Lost'} />
                <button type='submit'>Submit</button>
                <Link to='/home'>Home</Link>
            </form>
        </div>
    )
}
