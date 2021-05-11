import React from 'react'
import { graphql, navigate } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx';

import '../styles/index.css'
import Layout from '../components/Layout'
import MDXWrapper from '../components/MdxWrapper';

const windowAvailable = typeof window !== 'undefined'

const Index = ({ location, data }) => {
    if (windowAvailable) navigate('/about')

    const { body } = data.mdx;

    return (
        <Layout location={location}>
            <div className='index'>
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
    mdx(slug: { eq: "home" }) {
        id
        slug
        body
        frontmatter {
            title
        }
    }
}`;


export default Index
