import React, { useState } from 'react'

export default function Tabs({ setTabs, tabs, active, activeHandler, setActive }) {






    return (
        <div className='tab_container'>
            {tabs.map((tab, index) => (
                <div key={index}>
                    <div onClick={() => activeHandler(index, tab.sport)} className={active === index ? 'sport_btn active' : 'sport_btn'}>
                        <h4 className={active === index ? 'icon icon_active' : 'icon'}>{tab.icon}</h4>
                        <h4 style={{ marginLeft: '20px' }}>{tab.sport}</h4>
                    </div>
                </div>
            ))
            }
        </div >
    )
}
