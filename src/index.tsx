import React from 'react'
import ReactDOM from 'react-dom'
import { rootReducer } from 'store'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import './index.css'
import App from 'containers/App'
import * as serviceWorker from './serviceWorker'
import { DiProvider } from 'providers'
import { DiContainer } from 'utils'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

const diContainer = new DiContainer()

ReactDOM.render(
  <React.StrictMode>
    <DiProvider diContainer={diContainer}>
      <Provider store={store}>
        <App/>
      </Provider>
    </DiProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
