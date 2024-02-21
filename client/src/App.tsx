import React from "react";
import Navbar from "./components/Assets/Navbar.jsx";
import { Provider } from 'react-redux';
import { store } from "./store/store.js";
import Router from "./Router.tsx";
import Footer from "./components/Assets/Footer.jsx";

function App() {
    return (
        <Provider store={store}>
             <div className="max-w-screen-xl mx-auto px-2 bg-gray-50">
                <Navbar />
                <main className="mt-8 min-h-screen bg-gray-50">
                    <Router /> 
                </main>
                <Footer />
            </div>
        </Provider>
    );
}

export default App;