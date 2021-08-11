import React from 'react'
import classes from './Header.module.css'
import picture from './../../../assets/pictures/phonebook.png'

const Header = () => {
  return (
    <div className={classes.header}>
      <img src={picture} className={classes.headerPicture} />
      <h1 className={classes.title}>Phonebook</h1>
    </div>
  )
}

export default Header
