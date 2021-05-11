import React from 'react';

import '../styles/Layout.css';
import Header from './Header';
import Footer from './Footer';

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
