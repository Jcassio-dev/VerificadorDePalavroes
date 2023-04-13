import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './routes'
import GlobalStyles from './styles/global'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles/>
    <ToastContainer 
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    draggable
    theme="dark"
    />
    <AppRoutes />
  </React.StrictMode>,
)
