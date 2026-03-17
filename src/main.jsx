import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import TitleContextProvider from './context/TitleContext.jsx';

window.global = window;

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TitleContextProvider>
      <App />
    </TitleContextProvider>
  </BrowserRouter>,
)
