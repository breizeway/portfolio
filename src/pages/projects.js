import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import '../styles/Projects.css';
import Layout from '../components/Layout';
import MDXWrapper from '../components/MdxWrapper';


const Projects = ({ location }) => {
    const data = useStaticQuery(graphql`query {
        mdx(slug: { eq: "projects" }) {
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
            <div className='projects'>
                <MDXWrapper>
                    <MDXRenderer>
                        {body}
                    </MDXRenderer>
                </MDXWrapper>
            </div>
        </Layout>
    );
};


export default Projects;
