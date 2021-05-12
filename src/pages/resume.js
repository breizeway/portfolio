import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';
import MDXWrapper from '../components/mdx-wrapper';


const Resume = ({ location }) => {
    const data = useStaticQuery(graphql`query {
        mdx(slug: { eq: "resume" }) {
            body
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
