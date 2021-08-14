import React from 'react'
import Person from './../Person/Person'
import classes from './Users.module.css'
import { v4 as uuidv4 } from 'uuid'

const Users = ({ searchName, users, onClick, checkSort }) => {
  //Add function to create <Person /> component and do code more lean
  const personComponentCreator = (person) => {
    return <Person key={person.id} information={person} onClick={onClick} />
  }

  const usersData = () => {
    // If have searchName from input component then do search
    if (searchName && users) {
      return users.map((person) => {
        if (person.name.toLowerCase().includes(searchName.toLowerCase())) {
          return personComponentCreator(person)
        }
      })
    }

    // If user choose "sort by group" then do groupping
    else if (checkSort === 'group') {
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
        <div key={uuidv4()}>
          <h1 className={classes.groupedLetter}>{letter}</h1>
          {grouped[letter].map((person) => personComponentCreator(person))}
        </div>
      ))
    }

    // If user choose "sort by name" do sorting
    else if (checkSort === 'name' && users) {
      const sorted = [...users].sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
      return sorted.map((person) => personComponentCreator(person))
    }

    // All other cases
    else {
      return users.map((person) => personComponentCreator(person))
    }
  }
  return usersData()
}

export default Users
