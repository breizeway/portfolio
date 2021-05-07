import React from 'react'

import Header from './Header'

const SiteLayout = ({ children, location }) => {
    return (
        <div className='site-layout'>
            <Header location={location} />
            {children}
        </div>
    )
}


export default SiteLayout
