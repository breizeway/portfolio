import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/Layout';
import MDXWrapper from '../components/MdxWrapper';


const Resume = ({ location }) => {
    const data = useStaticQuery(graphql`query {
        mdx(slug: { eq: "resume" }) {
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
            <div className='resume'>
                <MDXWrapper>
                    <MDXRenderer>
                        {body}
                    </MDXRenderer>
                </MDXWrapper>
            </div>
        </Layout>
    );
};


export default Resume;
