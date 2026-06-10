import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { I18nProvider } from './lib/I18nProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </StrictMode>,
)
document.body.insertAdjacentHTML(
  'afterbegin',
  '<div style="position:fixed;top:40px;left:0;z-index:999999;background:blue;color:white;padding:8px">REACT JS VERSION d28bc76</div>',
)
