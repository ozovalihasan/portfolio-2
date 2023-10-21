import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.css"
import App from './components/App/App';

const Base = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Base></Base>,
)
