import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import '../styles/Technologies.css';
import Layout from '../components/Layout';
import MDXWrapper from '../components/MdxWrapper';


const Technologies = ({ location, data }) => {
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

export const query = graphql`query {
    mdx(slug: { eq: "technologies" }) {
        id
        slug
        body
        frontmatter {
            title
        }
    }
}`;


export default Technologies;
