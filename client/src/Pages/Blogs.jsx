import React from 'react'
import BlogPage from '../components/Assets/Blog/BlogPage.jsx'
import ExtraDesign from '../components/Assets/ExtraAssets/ExtraDesign.jsx';

const Blogs = () => {
  return (
    <div>
      <ExtraDesign titlePage = " Blog Page"/>

      {/* all blogs container */}
      <div className="max-w-7xl mx-auto">
        <BlogPage />
      </div>
    </div>
  );
}

export default Blogs
