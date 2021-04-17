import React from 'react'
import './Button.css'

const Button = (props) => {
    return (
        <button><a href={props.url}>{props.name}</a></button>
    )
}

export default Button;