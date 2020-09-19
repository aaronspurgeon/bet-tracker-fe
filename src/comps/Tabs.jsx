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

    const activeHandler = (e, index) => {
        e.preventDefault();
        console.log(index)
        setActive(index)
    }



    return (
        <div className='tab_container'>
            {tabs.map((tab, index) => (

                < div onClick={(e, index) => activeHandler(e, index)} key={index} className={active === index ? 'sport_btn active' : 'sport_btn'}>
                    <h4 className='icon'>{tab.icon}</h4> <h4>{tab.sport}</h4></div>
            ))
            }
            {/* <div className='sport_btn'>
                <h4 className='icon'>🥊</h4> <h4>MMA</h4></div>
            <div className='sport_btn'>
                <h4 className='icon'>🏀</h4>  <h4>NBA</h4> </div>
            <div className='sport_btn'>
                <h4 className='icon'>🏈</h4>  <h4>NFL</h4> </div>
            <div className='sport_btn'>
                <h4 className='icon'>⚾️</h4> <h4>MLB</h4> </div>
            <div className='sport_btn'>
                <h4 className='icon'>🏒</h4> <h4>NHL</h4> </div> */}
        </div >
    )
}
