import React, { useEffect, useState } from 'react'
import classes from './Information.module.css'
import Button from './../UI/Button/Button'
import localStore from '../../utils'
import Input from './../UI/Input/Input'

const Information = ({ userInfo }) => {
  const [edit, setEdit] = useState(false)
  const [user, setUser] = useState({
    name: '',
    phone: '',
    email: '',
    id: '',
  })

  useEffect(() => {
    if (userInfo) {
      setUser({
        name: userInfo.name,
        phone: userInfo.phone,
        email: userInfo.email,
        id: userInfo.id,
      })
    }
  }, [userInfo])

  const editChangeHandler = () => {
    setEdit((prev) => !prev)
  }

  const saveUserToStore = () => {
    const foundIndex = localStore.users.findIndex((item) => item.id === user.id)
    localStore.users[foundIndex] = user
    setEdit(false)
    const stringUsers = JSON.stringify(localStore.users)
    localStore.data.data = stringUsers
    localStorage.setItem('persist:root', JSON.stringify(localStore.data))
  }

  const informationChecking = () => {
    if (user.name) {
      if (edit) {
        return (
          <div>
            <Input
              type="text"
              user={user}
              value={user.name}
              onChange={setUser}
              name="name"
            >
              {user.name}
            </Input>

            <Input
              type="text"
              user={user}
              value={user.email}
              onChange={setUser}
              name="email"
            >
              {user.email}
            </Input>

            <Input
              type="text"
              user={user}
              value={user.phone}
              onChange={setUser}
              name="phone"
            >
              {user.phone}
            </Input>
          </div>
        )
      } else {
        return (
          <div>
            <h1>Name: {user.name}</h1>
            <h1>Email: {user.email}</h1>
            <h1>Phone: {user.phone}</h1>
          </div>
        )
      }
    } else {
      return <h1>Choose any contact to open full information</h1>
    }
  }

  return (
    <div className={classes.container}>
      <h1>Information:</h1>
      {informationChecking()}
      <div>
        <Button type="button" onClick={editChangeHandler}>
          {edit ? 'Cancel' : 'Edit'}
        </Button>
        <Button type="button" onClick={saveUserToStore}>
          Save
        </Button>
      </div>
    </div>
  )
}

export default Information
