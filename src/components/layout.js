import React from 'react';
import Helmet from "react-helmet"

import '../styles/layout.css';
import Header from './header';
import Footer from './footer';

const Layout = ({ children, location }) => {
    let path = location.pathname.split('/').join('');
    if (path === '404.html') {
        path = '404'
    }

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
