import React, { useState } from 'react'
import Input from './../UI/Input/Input'
import classes from './MainView.module.css'
import Information from '../Information/Information'
import Users from './../Users/Users'
const MainView = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: '',
    email: '',
  })
  const [searchName, setSearchName] = useState('')

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

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div>
          <h1>CONTACTS</h1>
          <Input
            placeholder="Search by name"
            type="text"
            onChange={setSearchName}
            value={searchName}
          />
          <div className={classes.contacts}>
            <Users
              data2={data2}
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
