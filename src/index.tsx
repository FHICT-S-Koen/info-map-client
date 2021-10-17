import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Auth0Provider } from '@auth0/auth0-react'
import StoreProvider from './Store'

const providerConfig = {
  domain: process.env.REACT_APP_AUTH0_DOMAIN || '',
  clientId: process.env.REACT_APP_AUTH0_CLIENT_KEY || '',
  redirectUri: window.location.origin,
  audience: process.env.REACT_APP_AUTH0_AUDIENCE || '',
  scope: 'read:current_user update:current_user_metadata',
}

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Auth0Provider {...providerConfig}>
        <App />
      </Auth0Provider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
