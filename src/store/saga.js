import { takeEvery, put } from '@redux-saga/core/effects'
import { Types } from './actions'
import axios from 'axios'
import { getContacts, failedContacts } from './actions'

const url = 'https://demo.sibers.com/users'

function* getContactsFromApiWorker() {
  try {
    const contactsArray = yield axios.get(url).then((data) => data.data)
    const contacts = yield contactsArray.map((person) => {
      return {
        name: person.name,
        phone: person.phone,
        avatar: person.avatar,
        email: person.email,
        id: person.id,
      }
    })
    yield put(getContacts(contacts))
  } catch {
    yield put(failedContacts())
  }
}

export function* getContactsFromApiWatcher() {
  yield takeEvery(Types.SEND_REQUEST_CONTACTS, getContactsFromApiWorker)
}
