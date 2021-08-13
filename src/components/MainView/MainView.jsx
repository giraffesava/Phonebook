import React, { useState } from 'react'
import Input from './../UI/Input/Input'
import classes from './MainView.module.css'
import Information from '../Information/Information'
import Users from './../Users/Users'
import Select from './../Select/Select'
import { selector } from './../../store/selector'
import { useSelector } from 'react-redux'

const MainView = () => {
  const usersData = useSelector(selector)
  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: '',
    email: '',
    id: '',
  })
  const [searchName, setSearchName] = useState('')
  const [value, setValue] = useState('default')
  const getInformationHandler = (information) => {
    setUserInfo({
      name: information.name,
      phone: information.phone,
      email: information.email,
      id: information.id,
    })
  }

  const setValueHandler = (keyword) => {
    if (searchName) {
      setValue('default')
    } else {
      setValue(keyword)
    }
  }
  if (!usersData.error) {
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
                name="search"
              />
              <h1>Sort by</h1>
              <Select
                value={value}
                defaultValue="Sort"
                onChange={setValueHandler}
                options={[
                  { value: 'default' },
                  { value: 'group' },
                  { value: 'name' },
                ]}
              />
            </div>
            {
              <div className={classes.users}>
                {!usersData.loading ? (
                  <Users
                    checkSort={value}
                    users={usersData.data}
                    searchName={searchName}
                    onClick={getInformationHandler}
                  />
                ) : (
                  <h1>Loading...</h1>
                )}
              </div>
            }
          </div>
          <div>
            <Information userInfo={userInfo} />
          </div>
        </div>
      </div>
    )
  } else {
    return <h1 className={classes.errorTitle}>Error, try to reload the page</h1>
  }
}

export default MainView
