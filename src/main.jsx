import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/main.scss'
import './styles/components.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)