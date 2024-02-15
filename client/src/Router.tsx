import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';
import Home from './Pages/Home.tsx';
import Error from './Pages/ErrorPage.jsx';
import About from './Pages/About.tsx';
import Blogs from './Pages/Blogs.jsx';
import Contact from './Pages/Contact.tsx';

const Router = () => {
    return (
            <Routes>
                <Route path="/" element={<App />} />
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} /> 
                <Route path="/about" element={<About />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} /> 
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Error />} />
            </Routes>
    );
}

export default Router;
