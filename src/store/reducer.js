import { Types } from './actions'
import { REHYDRATE } from 'redux-persist/lib/constants'

const InitialStore = {
  loading: false,
  data: [],
  error: false,
}

const contactsReducer = (state = InitialStore, action) => {
  switch (action.type) {
    case Types.SEND_REQUEST_CONTACTS:
      return {
        ...state,
        loading: true,
      }
    case Types.GET_CONTACTS:
      return {
        ...state,
        loading: false,
        data: action.data,
      }
    case Types.FAILED_CONTACTS:
      return {
        ...state,
        error: true,
      }
    case REHYDRATE:
      return {
        ...state,
        persistedState: action.payload,
      }
    default:
      return state
  }
}

export default contactsReducer
