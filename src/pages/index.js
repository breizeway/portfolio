import React from 'react';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import '../styles/index.css';
import Layout from '../components/layout';
import MDXWrapper from '../components/mdx-wrapper';

const windowAvailable = typeof window !== 'undefined';

const Index = ({ location }) => {
    if (windowAvailable) navigate('/about')

    const data = useStaticQuery(graphql`query {
        mdx(slug: { eq: "home" }) {
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
            <div className='index'>
                <MDXWrapper>
                    <MDXRenderer>
                        {body}
                    </MDXRenderer>
                </MDXWrapper>
            </div>
        </Layout>
    );
};


export default Index;
