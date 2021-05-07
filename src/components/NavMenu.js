import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import '../styles/NavMenu.css'
import Highlight2 from './Highlight2'


const NavMenu = ({ options }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className='nav-menu'>
            <div
                className='nav-menu__selected'
                onClick={() => setOpen(!open)}
                onKeyDown={() => setOpen(!open)}
                role='button'
                tabIndex='0'
            >
                <Highlight2 content={options[0]} />
                <div className='nav-menu__down-icon'>
                    {open ? (
                        <FaChevronUp />
                    ) : (
                        <FaChevronDown />
                    )}
                </div>
            </div>
            {open && (
                <div className='nav-menu__dropdown'>
                    {options.map((option, key) => (
                        <Highlight2 content={option} key={key} />
                    ))}
                </div>
            )}
        </div>
    )
}


export default NavMenu
