import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';
import Home from './pages/Home.tsx';
import Error from './pages/ErrorPage.jsx';
import About from './pages/About.tsx';
import Blogs from './pages/Blogs.jsx';
import Contact from './pages/Contact.tsx';
import SinglePage from './pages/SinglePage.jsx';
import WriteBlog from './components/Assets/Blog/WriteBlog.jsx';

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
                <Route path="/blogs/:id" element={<SinglePage />}/>
                <Route path="/upload" element={<WriteBlog />}/>
                <Route path="*" element={<Error />} />
            </Routes>
    );
}

export default Router;
