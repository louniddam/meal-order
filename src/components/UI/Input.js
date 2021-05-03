import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {
    return(
    <div>
        <lbale>{props.label}</lbale>
        <input
        onClick={props.onClick}
        onBlur={props.onBlur}
        value={props.value}
        type={props.type}
        htmlFor={props.htmlFor}
        >
        {props.children}
        </input>
    </div>
)}

export default Input