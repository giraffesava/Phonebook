import Input from './../UI/Input/Input'
import React from 'react'
import classes from './InputField.module.css'

const InputField = ({ name, value, user, onChange }) => {
  return (
    <div className={classes.eachInput}>
      <h1 className={classes.line}>{name}:</h1>
      <Input
        type="text"
        user={user}
        value={value}
        onChange={onChange}
        name={name}
      >
        {user[name]}
      </Input>
    </div>
  )
}
export default InputField
