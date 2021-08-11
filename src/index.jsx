import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import { sagaMiddleware } from './store/store'
import { getContactsFromApiWatcher } from './store/saga'
import { Provider } from 'react-redux'
import { store, persistor } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'

sagaMiddleware.run(getContactsFromApiWatcher)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)
