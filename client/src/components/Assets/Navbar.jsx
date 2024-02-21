import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext.js';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        {path: "/", link: "Home"},
        {path: "/about", link: "About"},
        {path: "/blogs", link: "Blogs"},
        {path: "/contact", link: "Contact"},
        {path: "/login", link: "Login"},
        {path: "/register", link: "Register"}
    ];

    const {currentUser, logout} = useContext(AuthContext);

    return (
        <header className="flex items-start justify-between py-4 border-b bg-gray-50 px-4">
            <NavLink to="/" className="px-2 lg:px-0 uppercase font-bold text-purple-800">
                BlogSphere
            </NavLink>
            
            <div className="md:hidden">
                <button onClick={toggleMenu} className="cursor-pointer">
                    {isMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
                </button>
            </div>

            <ul className={`md:flex gap-8 text-lg ${isMenuOpen ? "block" : "hidden"}`}>
                {navItems.map(({ path, link }) => (
                    <li className="px-2 md:px-4" key={path}>
                        <NavLink onClick={toggleMenu} className="text-gray-500 font-semibold hover:text-purple-500" to={path}>{link}</NavLink>
                    </li>
                ))}
            </ul>

            {/* <span className = "text-gray-500 font-semibold hover:text-purple-500 cursor-pointer">{currentUser?.username}</span>

            {currentUser ? (<span className = "text-gray-500 font-semibold hover:text-purple-500 cursor-pointer" onClick={logout}>Logout</span>) : (<NavLink className="text-gray-500 font-semibold hover:text-purple-500" to = "/login">Login</NavLink>)} */}
        </header>
    );
}

export default Navbar;
