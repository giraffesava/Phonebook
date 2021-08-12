import React, { useEffect } from 'react'
import classes from './App.module.css'
import { useDispatch } from 'react-redux'
import Header from './../Header/Header'
import MainView from '../MainView/MainView'
import { sendRequestContacts } from './../../store/actions'
import localStore from './../../utils'

const App = () => {
  // Send request to server to get user's data
  const dispatch = useDispatch()

  useEffect(() => {
    // Checking browsers on the presence of a localstorage
    if (!localStore.users) {
      dispatch(sendRequestContacts())
    }
  }, [])

  return (
    <div className={classes.container}>
      <Header />
      <MainView />
      <h1 className={classes.author}>Created by Sava</h1>
    </div>
  )
}

export default App
