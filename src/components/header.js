import React from 'react';

import '../styles/header.css';
import NavMenu from '../components/nav-menu';


const Header = ({ path, navOptions }) => {
    return (
        <div className='header'>
            <h1 className='header__name'>Tannor Breitigam</h1>
            <NavMenu navOptions={navOptions} path={path}/>
        </div>
    );
};


export default Header;
