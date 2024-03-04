import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import App from './App.tsx';
import "./input.css";
import { AuthContextProvider } from './context/authContext.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
    </BrowserRouter>
);