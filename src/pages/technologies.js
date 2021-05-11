import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import '../styles/technologies.css';
import Layout from '../components/layout';
import MDXWrapper from '../components/mdx-wrapper';


const Technologies = ({ location }) => {
    const data = useStaticQuery(graphql`query {
        mdx(slug: { eq: "technologies" }) {
            id
            slug
            body
            frontmatter {
                title
            }
        }
    }`);

    const { body } = data.mdx;

    return (
        <Layout location={location}>
            <div className='technologies'>
                <MDXWrapper>
                    <MDXRenderer>
                        {body}
                    </MDXRenderer>
                </MDXWrapper>
            </div>
        </Layout>
    );
};


export default Technologies;
