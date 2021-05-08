import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx";

import '../styles/About.css'
import Layout from '../components/Layout'

const About = ({ location, data }) => {
    const {
      body,
    } = data.mdx;

    return (
        <Layout location={location}>
            <MDXRenderer>{body}</MDXRenderer>
        </Layout>
    )
}

export const query = graphql`
    query {
        mdx(slug: { eq: "about" }) {
            id
            slug
            body
            frontmatter {
                title
            }
        }
    }
`;

export default About
