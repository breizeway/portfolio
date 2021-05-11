import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import '../styles/About.css';
import Layout from '../components/Layout';
import MDXWrapper from '../components/MdxWrapper';


const About = ({ location, data }) => {
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

export const query = graphql`query {
    mdx(slug: { eq: "about" }) {
        id
        slug
        body
        frontmatter {
            title
        }
    }
}`;


export default About;
