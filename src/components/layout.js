import React from 'react';
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from 'gatsby'

import '../styles/layout.css';
import Header from './header';
import Footer from './footer';

const Layout = ({ children, location }) => {
    const allSlugs = useStaticQuery(graphql`query allSlugs {
        allSitePage(filter: {path: {nin: ["/dev-404-page/", "/404.html", "/404/", "/"]}}) {
          edges {
            node {
              path
            }
          }
        }
      }`);

    const navOptions = allSlugs.allSitePage.edges.map(edge => edge.node.path.split('/').join(''));

    let path = location.pathname.split('/').join('');
    if (!navOptions.includes(path)) path = '404';

    return (
        <div className='layout'>
            <Helmet>
                <title>{path}</title>
            </Helmet>
            <div className='layout-content'>
                <Header path={path} navOptions={navOptions} />
                {children}
            </div>
            <Footer />
        </div>
    );
};


export default Layout;
