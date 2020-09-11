import React from 'react'

export default function Bets({ bets }) {
    return (
        <div>
            {
                bets.map((bet, id) => (
                    <div key={id}>
                        <p>{bet.opponent1} vs {bet.opponent2}</p>
                        <p>Result: </p>
                    </div>
                ))
            }
        </div>
    )
}
