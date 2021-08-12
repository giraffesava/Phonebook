import React from 'react'
import classes from './Select.module.css'

const Select = ({ value, defaultValue, options, onChange }) => {
  return (
    <select
      value={value}
      className={classes.select}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled value={defaultValue}>
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  )
}

export default Select
