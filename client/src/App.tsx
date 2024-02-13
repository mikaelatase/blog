import React from "react";
import Navbar from "./components/Assets/Navbar.tsx";
import { Provider } from 'react-redux';
import { store } from "./redux/store.js";
import Router from "./Router.tsx"; // Import Router instead of Router.tsx

function App() {
    return (
        <Provider store={store}>
             <div className="max-w-screen-xl mx-auto px-2 bg-gray-50">
                <Navbar />
                <main className="mt-8 min-h-screen bg-gray-50">
                    <Router /> 
                </main>
                <footer className="bg-gray-50">Footer</footer>
            </div>
        </Provider>
    );
}

export default App;