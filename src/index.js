import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App/App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import createStore from './redux'

const renderApp = (store) => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  )
}

const loadApp = async () => {
  const store = await createStore()
  renderApp(store)

  if (module.hot) {
    module.hot.accept(
      './App/App',
      () => renderApp(store),
    )
  }
}

loadApp()
registerServiceWorker()
