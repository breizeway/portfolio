import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/Layout';
import MDXWrapper from '../components/MdxWrapper';


const Resume = ({ location, data }) => {
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

export const query = graphql`query {
    mdx(slug: { eq: "resume" }) {
        id
        slug
        body
        frontmatter {
            title
        }
    }
}`;


export default Resume;
