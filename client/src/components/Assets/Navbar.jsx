import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext.js';
import Search from '../Search.jsx';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const { currentUser, logout } = useContext(AuthContext);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        {path: "/", link: "Home"},
        {path: "/about", link: "About"},
        {path: "/blogs", link: "Blogs"},
        {path: "/contact", link: "Contact"},
    ];

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

            <div className="md:block hidden">
                <Search />
            </div>

            <ul className={`md:flex gap-5 text-md ${isMenuOpen ? "block" : "hidden"}`}>
                {navItems.map(({ path, link }) => (
                    <li className="px-2 md:px-4" key={path}>
                        <NavLink onClick={toggleMenu} className="text-gray-500 font-semibold hover:text-purple-500" to={path}>{link}</NavLink>
                    </li>
                ))}

                {currentUser ? (
                    <>
                        <li className="px-2 md:px-4">
                            <span className="text-gray-500 font-semibold hover:text-purple-500 cursor-pointer" onClick={logout}>Logout</span>
                        </li>
                        <li className="px-2 md:px-4">
                            <span className="text-gray-500 font-semibold hover:text-purple-500 cursor-pointer">{currentUser.username}</span>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="px-2 md:px-4">
                            <NavLink className="text-gray-500 font-semibold hover:text-purple-500" to="/login">Login</NavLink>
                        </li>
                        <li className="px-2 md:px-4">
                            <NavLink className="text-gray-500 font-semibold hover:text-purple-500" to="/register">Register</NavLink>
                        </li>
                    </>
                )}
            </ul>
        </header>
    );
}

export default Navbar;
