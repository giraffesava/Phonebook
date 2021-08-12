import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import classes from './Information.module.css'
import Button from './../UI/Button/Button'
import Input from './../UI/Input/Input'
import { changeUsers } from './../../store/actions'

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
    if (
      user.name.length > 0 &&
      user.phone.length > 0 &&
      user.email.length > 0
    ) {
      setError(false)
      dispatch(changeUsers(user))
      setEdit(false)
    }
    setError(true)
  }

  const userCheck = user.name || user.email || user.phone

  const informationChecking = () => {
    if (userCheck) {
      if (edit) {
        return (
          <div className={classes.inputs}>
            <div className={classes.eachInput}>
              <h1>Name:</h1>
              <Input
                type="text"
                user={user}
                value={user.name}
                onChange={setUser}
                name="name"
              >
                {user.name}
              </Input>
            </div>

            <div className={classes.eachInput}>
              <h1>Email:</h1>
              <Input
                type="text"
                user={user}
                value={user.email}
                onChange={setUser}
                name="email"
              >
                {user.email}
              </Input>
            </div>

            <div className={classes.eachInput}>
              <h1>Phone:</h1>
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
      <h1>INFORMATION:</h1>
      {informationChecking()}
      {(user.name || user.email || user.phone) && (
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
