import React from 'react'
import classes from './Information.module.css'

const Information = ({ userInfo }) => {
  return (
    <div className={classes.container}>
      <h1>Information:</h1>
      {userInfo.name && <h1>Name: {userInfo.name}</h1>}
      {userInfo.phone && <h1>Phone: {userInfo.phone}</h1>}
      {userInfo.email && <h1>Email: {userInfo.email}</h1>}
    </div>
  )
}

export default Information
