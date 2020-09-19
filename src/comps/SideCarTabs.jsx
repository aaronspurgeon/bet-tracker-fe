import React, { useState } from 'react';
import { VscGraph } from 'react-icons/vsc';
import { IoIosConstruct } from 'react-icons/io';

export default function SideCarTabs() {
    const [tabs, setTabs] = useState([
        { icon: <VscGraph />, text: 'Dashboard' },
        { icon: <IoIosConstruct />, text: 'Under Construction' },
        { icon: <IoIosConstruct />, text: 'Under Construction' },
        { icon: <IoIosConstruct />, text: 'Under Construction' },
        { icon: <IoIosConstruct />, text: 'Under Construction' },
    ])
    return (
        <div className='side_tab_wrapper'>
            {tabs.map((tab, index) => (
                <div className='side_car_tab' key={index}>
                    <h4>{tab.icon}</h4>
                    <h4>{tab.text}</h4>
                </div>
            ))}
        </div>
    )
}
