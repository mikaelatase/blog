import React from 'react'
import BlogPage from '../components/Assets/BlogPage.jsx'
import ParticleRing from '../components/Assets/ParticleRing.jsx';

const Blogs = () => {
  return (
    <div>
      {/* <div className="py-40 bg-purple-800 text-center text-gray-200 px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Blog Page
        </h2>
      </div> */}
      <ParticleRing titlePage = " Blog Page"/>

      {/* all blogs container */}
      <div className="max-w-7xl mx-auto">
        <BlogPage />
      </div>
    </div>
  );
}

export default Blogs
