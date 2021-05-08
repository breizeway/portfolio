import React from 'react'

import '../styles/Header.css'
import NavMenu from '../components/NavMenu'


const Header = ({ location }) => {
    const options = [
        'about',
        'contact',
        'projects',
        'resume',
    ]

    return (
        <div className='header'>
            <h1>Tannor Breitigam</h1>
            <NavMenu options={options} location={location}/>
        </div>
    )
}


export default Header
