import React from 'react'
import "./styles.scss"
import { SideBarLinks } from '../../utils'

const SideBar = () => {
    return (
        <div className="SideBar">
            <div className='logo'>
                <span>DaBang</span>
            </div>

            <div className='links'>
                <ul>
                    {SideBarLinks.map((item, i) => (
                        <li key={i}><item.icon />{item.name}</li>
                    ))}
                </ul>
            </div>

            <div className='promotion'>
                <span>Dabang Pro</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>Get Pro</button>
            </div>
        </div>
    )
}

export default SideBar