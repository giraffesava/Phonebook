import React from 'react'
import classes from './Input.module.css'

const Input = ({ type, placeholder, onChange, value, name, user }) => {
  return (
    <input
      value={value}
      type={type}
      name={name}
      autocomplete="off"
      placeholder={placeholder}
      className={name === 'search' ? classes.input : classes.lines}
      onChange={
        name === 'search'
          ? (e) => onChange(e.target.value.trimStart())
          : (e) =>
              onChange({ ...user, [e.target.name]: e.target.value.trimStart() })
      }
    />
  )
}

export default Input
