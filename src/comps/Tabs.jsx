import React, { useState } from 'react'

export default function Tabs() {
    const [tabs, setTabs] = useState([
        { sport: 'All', icon: '💰' },
        { sport: "MMA", icon: "🥊" },
        { sport: "NBA", icon: "🏀" },
        { sport: "NFL", icon: "🏈" },
        { sport: "MLB", icon: "⚾️" },
        { sport: "NHL", icon: "🏒" },
    ])

    const [active, setActive] = useState(0)

    const activeHandler = (id) => {
        // e.preventDefault();
        console.log(id)
        setActive(id)
    }



    return (
        <div className='tab_container'>
            {tabs.map((tab, index) => (
                <div key={index}>
                    <div onClick={() => activeHandler(index)} className={active === index ? 'sport_btn active' : 'sport_btn'}>
                        <h4 className={active === index ? 'icon icon_active' : 'icon'}>{tab.icon}</h4>
                        <h4 style={{ marginLeft: '20px' }}>{tab.sport}</h4>
                    </div>
                </div>
            ))
            }
        </div >
    )
}
