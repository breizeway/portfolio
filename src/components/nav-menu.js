import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'gatsby';

import '../styles/nav-menu.css';
import NavSelected from './nav-selected';

const domAvailable = typeof document !== 'undefined';


const NavMenu = ({ navOptions, path }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const gatsbyWrapper = domAvailable ? document.getElementById('___gatsby') : null;

    const close = () => {
        setDropdownOpen(false);
        gatsbyWrapper.removeEventListener('click', close);
    };

    const open = () => {
        setDropdownOpen(true);
        gatsbyWrapper.addEventListener('click', close);
    };

    const toggleDropdown = () => {
        if (!dropdownOpen) open();
    };

    return (
        <div className='nav-menu'>
            {path && (
                <div
                    className='nav-menu__selected'
                    onClick={() => toggleDropdown()}
                    onKeyDown={() => toggleDropdown()}
                    role='button'
                    tabIndex='0'
                >
                    <NavSelected content={path} />
                    <div className='nav-menu__icon'>
                        {dropdownOpen ? (
                            <FaChevronUp />
                        ) : (
                            <FaChevronDown />
                        )}
                    </div>
                </div>
            )}
            {dropdownOpen && (
                <div className='nav-menu__dropdown'>
                    {navOptions.map((option, key) => (
                        path !== option && (
                            <Link to={`/${option}`} key={key}>
                                <NavSelected content={option}/>
                            </Link>
                        )
                    ))}
                </div>
            )}
        </div>
    );
};


export default NavMenu;
