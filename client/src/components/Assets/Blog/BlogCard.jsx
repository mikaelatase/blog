import React from 'react';
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const BlogCard = ({blogs, currentPage, selectedCategory, pageSize}) => {
  const filteredBlogs = blogs
  .filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
  .slice((currentPage-1) * pageSize, currentPage * pageSize);

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {
        filteredBlogs.map(({id, image, title, author, published_date}) => 
          <Link to = {`/blog/${id}`} key={id} className="p-5 shadow-lg rounded cursor-pointer">
            <div>
              <img src={image} alt="" className="w-full" />
            </div>
            <h3 className="mt-4 mb-2 font-bold hover:text-purple-500 cursor-pointer">{title}</h3>
            <p className="mb-2 text-gray-500"><span className='inline-flex items-center mr-2'><FaUser/></span>{author}</p>
            <p className="text-sm text-gray-500">Published: {published_date}</p>
          </Link>
        )
      }
    </div>
  )
}

export default BlogCard;