import React from 'react'

import '../styles/Header.css'
import NavMenu from '../components/NavMenu'


const Header = ({ location }) => {
    const options = [
        'about',
        'resume',
        'projects',
        'contact',
    ]

    return (
        <div className='header'>
            <h1>Tannor Breitigam</h1>
            <NavMenu options={options} />
        </div>
    )
}


export default Header
