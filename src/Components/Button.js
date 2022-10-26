import React from 'react'

const Button = ({ type, text, btnBackgroundColor, onClick, className, visible }) => {
    return (
        <button type={type} style={{backgroundColor: btnBackgroundColor, border: btnBackgroundColor, display: `${visible ? 'inline-block' : 'none'}`}} className={className} onClick={(e) => onClick(e)}>{text}</button>
    )
}

Button.defaultProps = {
    type: '',
    text: 'Submit',
    className: 'btn btn-primary',
    visible: true
}

export default Button