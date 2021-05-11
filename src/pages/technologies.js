import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import '../styles/Technologies.css';
import Layout from '../components/Layout';
import MDXWrapper from '../components/MdxWrapper';


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
