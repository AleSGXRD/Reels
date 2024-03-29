import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ConfigProvider } from './context/ConfigProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ConfigProvider>
        <App />
    </ConfigProvider>
)
