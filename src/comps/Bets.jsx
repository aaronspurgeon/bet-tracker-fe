import React, { useState } from 'react';

export default function Bets({ bets }) {
    // let bets = sessionStorage.getItem("bet_list")
    // bets = JSON.parse(bets)
    // setBetState(bets)
    return (
        <div>
            {bets === undefined ? (
                <p>You currently have no saved bets</p>
            ) : (

                    bets.map((bet, id) => (
                        <div className='bets_wrapper' key={id}>
                            <p>{bet.opponent1} vs {bet.opponent2}</p>
                            <p>Result: {bet.win_loss} </p>
                        </div>
                    ))
                )}
        </div >
    )
}
