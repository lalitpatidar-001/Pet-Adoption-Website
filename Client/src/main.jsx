import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContextProvider from './context/UserContextProvider.jsx'
import PostContext from './context/PostContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
<PostContext>
<UserContextProvider >
  <React.StrictMode>
    <App />
  </React.StrictMode>,
</UserContextProvider>
</PostContext>
)
