import React from 'react'

import '../styles/Highlight.css'


const Highlight2 = ({ content, action=() => null, dropdown=true }) => {
    return (
        <div className='highlight2'>
            <div className='highlight2__left' />
            <div className='highlight2__main'>
                <div className='highlight2__inner-left' />
                <div className='highlight2__inner-main'>
                    <h2>{content}</h2>
                </div>
                <div className='highlight2__inner-right' />
            </div>
            <div className='highlight2__right' />
        </div>
    )
}



export default Highlight2
