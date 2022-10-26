import React from 'react'

const CVHeader = ({general, experience}) => {

    const name = general.filter(info => info.htmlFor === 'name')[0].value
    const title = experience.filter(info => info.htmlFor === 'title')[0].value

    return (
    <header>
        <h1>{name ? name : 'Full Name'}</h1>
        <h2 className='blue-text'>{title ? title: 'Recent Job Title'}</h2>
    </header>
    )
}

export default CVHeader