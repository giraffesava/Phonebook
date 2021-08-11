import React, { useState } from 'react'
import Input from './../UI/Input/Input'
import classes from './MainView.module.css'
import Information from '../Information/Information'
import Users from './../Users/Users'
import Select from './../Select/Select'

const MainView = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: '',
    email: '',
  })
  const [searchName, setSearchName] = useState('')
  const [value, setValue] = useState('default')
  const data = JSON.parse(localStorage.getItem('persist:root'))
  const data2 = JSON.parse(data.data)

  const getInformationHandler = (information) => {
    setUserInfo({
      name: information.name,
      avatar: information.avatar,
      phone: information.phone,
      email: information.email,
    })
  }

  const setValueHandler = (keyword) => {
    if (searchName) {
      setValue('default')
    } else {
      setValue(keyword)
    }
  }
  console.log('value', value)

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.contacts}>
          <h1>CONTACTS</h1>
          <div className={classes.select}>
            <Input
              placeholder="Search by name"
              type="text"
              onChange={setSearchName}
              value={searchName}
            />
            <h1>Sort by</h1>
            <Select
              value={value}
              defaultValue="Sort"
              onChange={setValueHandler}
              options={[
                { value: 'default' },
                { value: 'grouped' },
                { value: 'name' },
              ]}
            />
          </div>
          <div className={classes.users}>
            <Users
              checkSort={value}
              users={data2}
              searchName={searchName}
              onClick={getInformationHandler}
            />
          </div>
        </div>
        <div>
          <Information userInfo={userInfo} />
        </div>
      </div>
    </div>
  )
}

export default MainView
