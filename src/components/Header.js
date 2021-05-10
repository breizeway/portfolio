import React from 'react'

import '../styles/Header.css'
import NavMenu from '../components/NavMenu'


const Header = ({ location }) => {
    const options = [
        'about',
        'contact',
        'projects',
        'resume',
        'technologies',
    ]

    return (
        <div className='header'>
            <h1 className='header__name'>Tannor Breitigam</h1>
            <NavMenu options={options} location={location}/>
        </div>
    )
}


export default Header
