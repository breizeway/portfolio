import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import '../styles/FlexImages.css'


const FlexImages = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: {eq: "technologies/JS.png"}) {
                childImageSharp {
                    fluid(maxWidth: 750) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    console.log('   :::DATA:::   ', data);

    return (
        <div className='flex-images'>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </div>
    )
}

export default FlexImages
