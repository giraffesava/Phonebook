import React from 'react'
import Person from './../Person/Person'
import classes from './Users.module.css'

const Users = ({ searchName, users, onClick, checkSort }) => {
  const usersData = () => {
    // If have searchName from input component then do search
    if (searchName && users) {
      return users.map((person) => {
        if (person.name.toLowerCase().includes(searchName.toLowerCase())) {
          return (
            <Person key={person.id} information={person} onClick={onClick} />
          )
        }
      })
    }

    // If user choose "sort by group" then do groupping
    else if (checkSort === 'grouped') {
      const grouped =
        users &&
        users.reduce((group, person) => {
          const letter = person.name.charAt(0).toUpperCase()
          if (!group[letter]) {
            group[letter] = []
          }
          group[letter].push(person)
          return group
        }, {})
      return Object.keys(grouped).map((letter) => (
        <>
          <h1 className={classes.groupedLetter}>{letter}</h1>
          {grouped[letter].map((person) => (
            <Person key={person.id} information={person} onClick={onClick} />
          ))}
        </>
      ))
    }

    // If user choose "sort by name" do sorting
    else if (checkSort === 'name' && users) {
      const sorted = [...users].sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
      return sorted.map((person) => (
        <Person key={person.id} information={person} onClick={onClick} />
      ))
    }

    // All other cases
    else {
      return users ? (
        users.map((person) => (
          <Person key={person.id} information={person} onClick={onClick} />
        ))
      ) : (
        <h1>loading...</h1>
      )
    }
  }
  return usersData()
}

export default Users
