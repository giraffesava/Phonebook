import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import classes from './Information.module.css'
import Button from './../UI/Button/Button'
import Input from './../UI/Input/Input'
import { changeUsers } from './../../store/actions'
import InputField from '../InputField/InputField'

const Information = ({ userInfo }) => {
  const dispatch = useDispatch()
  const [error, setError] = useState(false)
  const [edit, setEdit] = useState(false)
  const [user, setUser] = useState({
    name: '',
    phone: '',
    email: '',
    id: '',
  })

  const initialUserData = {
    name: userInfo.name,
    phone: userInfo.phone,
    email: userInfo.email,
    id: userInfo.id,
  }

  useEffect(() => {
    if (userInfo) {
      setUser(initialUserData)
    }
    setError(false)
  }, [userInfo])

  const editChangeHandler = () => {
    setEdit((prev) => !prev)
    setUser(initialUserData)
  }

  const saveUserToStore = () => {
    if (
      user.name.length > 0 &&
      user.phone.length > 0 &&
      user.email.length > 0
    ) {
      setError(false)
      dispatch(changeUsers(user))
      setEdit(false)
    } else {
      setError(true)
    }
  }

  // Add checking by id, because we can delete all lines of information except id
  const userCheck = user.id

  const informationChecking = () => {
    if (userCheck || userCheck === 0) {
      if (edit) {
        return (
          <div className={classes.inputs}>
            <InputField
              name="name"
              value={user.name}
              onChange={setUser}
              user={user}
            />
            <InputField
              name="email"
              value={user.email}
              onChange={setUser}
              user={user}
            />
            <InputField
              name="phone"
              value={user.phone}
              onChange={setUser}
              user={user}
            />
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
      return (
        <h1 className={classes.tip}>
          Choose any contact to open full information
        </h1>
      )
    }
  }

  return (
    <div className={classes.container}>
      <h1>INFORMATION:</h1>
      {informationChecking()}
      {(user.id || user.id === 0) && (
        <div className={classes.buttons}>
          <Button type="button" onClick={editChangeHandler}>
            {edit ? 'Cancel' : 'Edit'}
          </Button>
          <Button type="button" onClick={saveUserToStore} error={error}>
            Save
          </Button>
        </div>
      )}
      {error && (
        <h1 className={classes.error}>
          Be sure to write at least 1 letter in each line
        </h1>
      )}
    </div>
  )
}

export default Information
