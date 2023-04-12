import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home'
import GlobalStyles from './styles/global'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles/>
    <Home />
  </React.StrictMode>,
)
