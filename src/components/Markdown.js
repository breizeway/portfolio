import React from 'react'


const Markdown = (data, className='') => {
    const { html } = data.data.allMarkdownRemark.edges[0].node
    return (
        <div
            className={className}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    )
}


export default Markdown;
