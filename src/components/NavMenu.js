import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'gatsby'

import '../styles/NavMenu.css'
import Highlight2 from './NavSelected'

const domAvailable = typeof document !== 'undefined'


const NavMenu = ({ options, location }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const site = domAvailable ? document.getElementById('___gatsby') : null

    const close = () => {
        setDropdownOpen(false)
        site.removeEventListener('click', close)
    }

    const open = () => {
        setDropdownOpen(true)
        site.addEventListener('click', close)
    }

    const toggleDropdown = () => {
        if (!dropdownOpen) open()
    }

    const path = location.pathname.replace('/', '')

    return (
        <div className='nav-menu'>
            <div
                className='nav-menu__selected'
                onClick={() => toggleDropdown()}
                onKeyDown={() => toggleDropdown()}
                role='button'
                tabIndex='0'
            >
                <Highlight2 content={path} />
                <div className='nav-menu__down-icon'>
                    {dropdownOpen ? (
                        <FaChevronUp />
                    ) : (
                        <FaChevronDown />
                    )}
                </div>
            </div>
            {dropdownOpen && (
                <div className='nav-menu__dropdown'>
                    {options.map((option, key) => (
                        path !== option && (
                            <Link to={`/${option}`} key={key}>
                                <Highlight2 content={option}/>
                            </Link>
                        )
                    ))}
                </div>
            )}
        </div>
    )
}


export default NavMenu
