import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import AppContextProvider from './context/TitleContext.jsx';
import { UIProvider } from './context/UIContext.jsx';

window.global = window;

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <UIProvider>
        <App />
      </UIProvider>
    </AppContextProvider>
  </BrowserRouter>,
)
