import React from 'react'
import classes from './Input.module.css'

const Input = ({ type, placeholder, onChange, value, name, user }) => {
  return (
    <input
      value={value}
      type={type}
      name={name}
      placeholder={placeholder}
      className={classes.input}
      onChange={
        name === 'search'
          ? (e) => onChange(e.target.value.trimLeft())
          : (e) => onChange({ ...user, [e.target.name]: e.target.value })
      }
    />
  )
}

export default Input
