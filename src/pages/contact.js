import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/Layout';
import MDXWrapper from '../components/MdxWrapper';


const Contact = ({ location }) => {
    const data = useStaticQuery(graphql`query {
        mdx(slug: { eq: "contact" }) {
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
            <div className='contact'>
                <MDXWrapper>
                    <MDXRenderer>
                        {body}
                    </MDXRenderer>
                </MDXWrapper>
            </div>
        </Layout>
    );
};


export default Contact;
