import React, { useState } from 'react'

export default function Bets() {
    let bets = sessionStorage.getItem("bet_list")
    bets = JSON.parse(bets)
    return (
        <div>
            {
                bets.map((bet, id) => (
                    <div key={id}>
                        <p>{bet.opponent1} vs {bet.opponent2}</p>
                        <p>Result: {bet.win_loss} </p>
                    </div>
                ))
            }
        </div >
    )
}
