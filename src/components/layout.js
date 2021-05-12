import React from 'react';

import '../styles/layout.css';
import Header from './header';
import Footer from './footer';

const Layout = ({ children, location }) => {
    return (
        <div className='layout'>
            <div className='layout-content'>
                <Header location={location} />
                {children}
            </div>
            <Footer />
        </div>
    );
};


export default Layout;
