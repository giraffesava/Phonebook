export const Types = {
  SEND_REQUEST_CONTACTS: 'SEND_REQUEST',
  GET_CONTACTS: 'GET_CONTACTS',
  FAILED_CONTACTS: 'FAILED_CONTACTS',
}

export const sendRequestContacts = () => {
  return {
    type: Types.SEND_REQUEST_CONTACTS,
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
