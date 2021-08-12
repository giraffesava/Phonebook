import React from 'react'
import classes from './Button.module.css'

const Button = ({ type, onClick, children }) => {
  return (
    <button type={type} onClick={onClick} className={classes.button}>
      {children}
    </button>
  )
}

export default Button
