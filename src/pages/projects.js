import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx';

import '../styles/Projects.css'
import Layout from '../components/Layout'
import MDXWrapper from '../components/MdxWrapper';


const Projects = ({ location, data }) => {
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
    )
}

export const query = graphql`query {
    mdx(slug: { eq: "projects" }) {
        id
        slug
        body
        frontmatter {
            title
        }
    }
}`;


export default Projects
