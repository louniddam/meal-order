import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
    return(
        <button onclick={props.onClick}>
        {props.children}
        </button>
    )
}

export default Button