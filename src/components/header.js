import React from 'react';

import '../styles/header.css';
import NavMenu from '../components/nav-menu';


const Header = ({ path }) => {
    const options = [
        'about',
        'contact',
        'projects',
        'resume',
        'technologies',
    ];

    return (
        <div className='header'>
            <h1 className='header__name'>Tannor Breitigam</h1>
            <NavMenu options={options} path={path}/>
        </div>
    );
};


export default Header;
