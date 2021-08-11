import React, { useEffect } from 'react'
import classes from './App.module.css'
import { useDispatch } from 'react-redux'
import Header from './../Header/Header'
import MainView from '../MainView/MainView'
import { sendRequestContacts } from './../../store/actions'
const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(sendRequestContacts())
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
