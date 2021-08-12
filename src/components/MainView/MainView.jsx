import React, { useEffect, useState } from 'react'
import Input from './../UI/Input/Input'
import classes from './MainView.module.css'
import Information from '../Information/Information'
import Users from './../Users/Users'
import Select from './../Select/Select'
import localStore from '../../utils'
import { selector } from './../../store/selector'
import { useSelector } from 'react-redux'

const MainView = () => {
  const load = useSelector(selector)
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
                { value: 'grouped' },
                { value: 'name' },
              ]}
            />
          </div>
          {
            <div className={classes.users}>
              {!load.loading ? (
                <Users
                  checkSort={value}
                  users={localStore.users}
                  searchName={searchName}
                  onClick={getInformationHandler}
                />
              ) : (
                <h1>Loading</h1>
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
}

export default MainView
