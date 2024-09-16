import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@/assets/css/style.min.css'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/tiny-slider.css'
import '@/assets/css/tobii.min.css'
import '@/assets/css/colors/default.css'


import '@/assets/js/app.js'
import '@/assets/js/bootstrap.bundle.min.js'
import '@/assets/js/easy_background.js'
import '@/assets/js/feather.min.js'
import '@/assets/js/gumshoe.polyfills.min.js'
import '@/assets/js/parallax.js'
import '@/assets/js/tiny-slider.js' 
import '@/assets/js/tobii.min.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
