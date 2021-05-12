import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import '../styles/about.css';
import Layout from '../components/layout';
import MDXWrapper from '../components/mdx-wrapper';


const About = ({ location }) => {
    const data = useStaticQuery(graphql`query {
        mdx(slug: { eq: "about" }) {
            body
        }
    }`);

    const { body } = data.mdx;

    return (
        <Layout location={location}>
            <div className='about'>
                <MDXWrapper>
                    <MDXRenderer>
                        {body}
                    </MDXRenderer>
                </MDXWrapper>
            </div>
        </Layout>
    );
};


export default About;
