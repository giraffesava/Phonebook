import React from 'react'
import Person from './../Person/Person'

const Users = ({ searchName, data2, onClick }) => {
  const func = () => {
    if (searchName) {
      return data2.map((item) => {
        if (item.name.toLowerCase().includes(searchName.toLowerCase())) {
          return <Person key={item.id} information={item} onClick={onClick} />
        }
      })
    } else {
      return data2.map((item) => (
        <Person key={item.id} information={item} onClick={onClick} />
      ))
    }
  }
  return func()
}

export default Users
