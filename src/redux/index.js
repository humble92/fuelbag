import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer'

export default async () => {
  const state = {
    isSignedUp: localStorage.getItem('isSignedUp')
  }
  const store = createStore(
    reducer,
    state,
    composeWithDevTools(applyMiddleware(thunk)),
  )

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(require('./reducer'))
    })
  }

  return store
}
