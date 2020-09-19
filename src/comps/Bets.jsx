import React, { useState } from 'react';

export default function Bets({ bets }) {
    // let bets = sessionStorage.getItem("bet_list")
    // bets = JSON.parse(bets)
    // setBetState(bets)
    return (
        <div>
            <h3 style={{ fontSize: '2rem' }}>Your bets</h3>
            {bets === undefined ? (
                <p>You currently have no saved bets</p>
            ) : (
                    <div className="bets_wrapper">

                        {bets.map((bet, id) => (
                            <div className='bets' key={id}>
                                <p>{bet.opponent1} vs {bet.opponent2}</p>
                                <p>Result: {bet.win_loss} </p>
                            </div>
                        ))}
                    </div>

                )}
        </div >
    )
}
