import React from 'react';
import Helmet from "react-helmet"

import '../styles/layout.css';
import Header from './header';
import Footer from './footer';

const Layout = ({ children, location }) => {
    const path = location.pathname.split('/').join('');

    return (
        <div className='layout'>
            <Helmet>
                <title>{path}</title>
            </Helmet>
            <div className='layout-content'>
                <Header path={path} />
                {children}
            </div>
            <Footer />
        </div>
    );
};


export default Layout;
