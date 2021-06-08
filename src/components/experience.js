import React from 'react'

import '../styles/experience.css'


const Experience = ({ level }) => {
    const levels = {
        familiar: 'played with',
        knowledgeable: 'used quite a bit',
        proficient: 'very comfortable',
    }

    return (
        <p className='experience'>
            <span>Experience:</span>
            <span className={`experience__level experience__level-${level}`}>
                {` ${level || 'none'} `}
            </span>
            <span>({levels[level]})</span>
        </p>
    )
}


export default Experience
