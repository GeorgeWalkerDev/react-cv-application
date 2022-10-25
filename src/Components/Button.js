import React from 'react'

const Button = ({ type, text, btnBackgroundColor, toggleSection, className, visible }) => {
    return (
        <button type={type} style={{backgroundColor: btnBackgroundColor, border: btnBackgroundColor, display: `${visible ? 'inline-block' : 'none'}`}} className={className} onClick={(e) => toggleSection(e)}>{text}</button>
    )
}

Button.defaultProps = {
    type: '',
    text: 'Submit',
    className: 'btn btn-primary',
    visible: true
}

export default Button