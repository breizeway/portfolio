import React from 'react';

import '../styles/nav-selected.css';


const NavSelected = ({ content }) => {
    return (
        <div className='nav-selected'>
            <div className='nav-selected__left' />
            <div className='nav-selected__main'>
                <div className='nav-selected__inner-left' />
                <div className='nav-selected__inner-main'>
                    <h2>{content}</h2>
                </div>
                <div className='nav-selected__inner-right' />
            </div>
            <div className='nav-selected__right' />
        </div>
    );
};



export default NavSelected;
