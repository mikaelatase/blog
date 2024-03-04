import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import CategorySelection from '../Category/CategorySelection.jsx';
import axios from 'axios';

const BlogPage = () => {

  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; //blogs per page
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  // useEffect (() => {
  //   async function fetchBlogs() {
  //     //let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`; 
  //     let url = `http://localhost:5000/blogs?`; 

  //     //filter by category
  //     if(selectedCategory){
  //       url += `&category=${selectedCategory}`;
  //     }

  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setBlogs(data);
  //   }

  //   fetchBlogs();
  // }, [currentPage, pageSize, selectedCategory])

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(selectedCategory);
        const res = await axios.get('/blogs', {
          params: { category: selectedCategory }
        });
        setBlogs(res.data);
      } catch (err) {
        console.log(err);
      }
    };    
    fetchData();
  }, [currentPage, pageSize, selectedCategory])

  //page changing btn
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  }

  return (
    <div>
     {/* category section */}
     <div>
      <CategorySelection onSelectCategory = {handleCategoryChange} selectedCategory={selectedCategory} activeCategory = {activeCategory}/>
     </div>

      {/* blogcard section */}
      <div>
        <BlogCard blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />
      </div>

       {/* pagination section */}
       <div>
        <Pagination onPageChange = {handlePageChange} currentPage = {currentPage} blogs = {blogs} pageSize = {pageSize}/>
       </div>
    </div>
  )
}

export default BlogPage