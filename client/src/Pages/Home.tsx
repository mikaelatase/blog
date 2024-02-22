import React from "react";
import Banner from "../components/Assets/Banner.tsx";
import PostForm from "../components/Post/PostForm.tsx";
import Sidebar from "../components/Assets/Sidebar.tsx";

const Home = () => {
    return (
    <div>
        <main className="mt-10">
            <Banner />

            <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">

            <PostForm />


            <Sidebar />
            </div>
        </main>

    </div>
    )
}

export default Home;