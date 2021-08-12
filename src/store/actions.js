export const Types = {
  SEND_REQUEST_CONTACTS: 'SEND_REQUEST',
  GET_CONTACTS: 'GET_CONTACTS',
  FAILED_CONTACTS: 'FAILED_CONTACTS',
  CHANGE_USERS: 'CHANGE_USERS',
}

export const sendRequestContacts = () => {
  return {
    type: Types.SEND_REQUEST_CONTACTS,
  }
}

export const changeUsers = (newUser) => {
  return {
    type: Types.CHANGE_USERS,
    newUser,
  }
}

export const getContacts = (data) => {
  return {
    type: Types.GET_CONTACTS,
    data,
  }
}
export const failedContacts = () => {
  return {
    type: Types.FAILED_CONTACTS,
  }
}
