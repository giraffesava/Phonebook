import React from 'react'
import classes from './Person.module.css'

const Person = ({ onClick, information }) => {
  return (
    <h1 className={classes.person} onClick={() => onClick(information)}>
      {information.name}
    </h1>
  )
}

export default Person
