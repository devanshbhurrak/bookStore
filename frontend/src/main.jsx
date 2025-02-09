import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className='dark:bg-gray-800 dark:text-gray-100' data-theme="light">
      <App /> 
    </div>
  </BrowserRouter>,
);
