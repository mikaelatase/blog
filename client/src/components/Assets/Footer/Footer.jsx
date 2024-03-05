import React from 'react'
import {FaTwitter, FaFacebook, FaInstagram} from "react-icons/fa6"

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className="bg-purple-800">
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
            <div className="grid mb-8 lg:grid-cols-6">
                <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
                    {/* first category */}
                    <div>
                        <p className="font-medium tracking-wide text-gray-300">Category</p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a href="/home" className="text-gray-400 transition-colors duration-300 hover:text-purple-700 ">Home</a>
                            </li>
                            <li>
                                <a href="/about" className="text-gray-400 transition-colors duration-300 hover:text-purple-700 ">About</a>
                            </li>
                            <li>
                                <a href="/blogs" className="text-gray-400 transition-colors duration-300 hover:text-purple-700 ">Blogs</a>
                            </li>
                            <li>
                                <a href="/login" className="text-gray-400 transition-colors duration-300 hover:text-purple-700 ">Login</a>
                            </li>
                            <li>
                                <a href="/register" className="text-gray-400 transition-colors duration-300 hover:text-purple-700 ">Register</a>
                            </li>
                        </ul>
                    </div>

                    {/* second category */}
                    <div>
                        <p className="font-medium tracking-wide text-gray-300">Category</p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-purple-700 ">Travel</a>
                            </li>
                            <li>
                                <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-purple-700 ">DIY</a>
                            </li>
                            <li>
                                <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-purple-700 ">Startups</a>
                            </li>
                            <li>
                                <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-purple-700 ">Security</a>
                            </li>
                            <li>
                                <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-purple-700 ">AI</a>
                            </li>
                            <li>
                                <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-purple-700 ">Apps</a>
                            </li>
                            <li>
                                <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-purple-700 ">Tech</a>
                            </li>
                        </ul>
                    </div>

                    {/* third category */}
                    <div>
                        <p className="font-medium tracking-wide text-gray-300">Category</p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-purple-700 ">News</a>
                            </li>
                            <li>
                                <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-purple-700 ">World</a>
                            </li>
                            <li>
                                <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-purple-700 ">Games</a>
                            </li>
                            <li>
                                <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-purple-700 ">References</a>
                            </li>
                        </ul>
                    </div>

                    {/* fourth category */}
                    <div>
                        <p className="font-medium tracking-wide text-gray-300">Category</p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-purple-700 ">News</a>
                            </li>
                            <li>
                                <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-purple-700 ">World</a>
                            </li>
                            <li>
                                <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-purple-700 ">Games</a>
                            </li>
                            <li>
                                <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-purple-700 ">References</a>
                            </li>
                        </ul>
                    </div>
                </div>

                 {/* subscription */}
            <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-5">
                <p className="font-medium tracking-wide text-gray-300">Subscribe for updates</p>
                <form className="mt-4 flex flex-col md:flex-row">
                    <input type="email" name="email" id="email" className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0  focus:border-purple-400 focus:outline-none " />

                    <button type="submit" className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-purple-500 focus:outline-none border ">
                        Subscribe
                    </button>
                </form>
                <p className="mt-4 text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima minus, est sint inventore numquam neque nulla beatae distinctio a laudantium ab dolore ad dolor qui molestiae veritatis odit id repellendus?</p>
            </div>
            </div>

            <div className="flex flex-col justify-between pt-5 pb-3 border-t border-gray-500 sm:flex-row">
                <p className="text-sm text-gray-400 ">Copyright ⓒ {currentYear} | All Rights Reserved.</p>
                <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                    <a href="https://twitter.com/" target='_blank' className="text-gray-400 transition-all duration-300 hover:text-purple-400"><FaTwitter className="h-6 w-6"/></a>
                    <a href="https://www.facebook.com/" target='_blank' className="text-gray-400 transition-all duration-300 hover:text-purple-400"><FaFacebook className="h-6 w-6"/></a>
                    <a href="https://www.instagram.com/" target='_blank' className="text-gray-400 transition-all duration-300 hover:text-purple-400"><FaInstagram className="h-6 w-6"/></a>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Footer
