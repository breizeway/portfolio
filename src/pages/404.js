import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/Layout';
import MDXWrapper from '../components/MdxWrapper';


const NotFound = ({ location, data }) => {
    const { body } = data.mdx;

    return (
        <Layout location={location}>
            <div className='not-found'>
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
    mdx(slug: { eq: "404" }) {
        id
        slug
        body
        frontmatter {
            title
        }
    }
}`;


export default NotFound;
