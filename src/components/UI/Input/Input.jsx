import React from 'react'
import classes from './Input.module.css'

const Input = ({ type, placeholder, onChange, value }) => {
  return (
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      className={classes.input}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default Input
