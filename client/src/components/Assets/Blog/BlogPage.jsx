import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import CategorySelection from '../Category/CategorySelection.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../../store/features/blogs/blogsSlice.js';

const BlogPage = () => {

  // const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get('/posts/blogs', {
          // params: { category: selectedCategory }
  //       });
  //       setBlogs(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };    
  //   fetchData();
  // }, [currentPage, pageSize, selectedCategory])

  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs(selectedCategory));
  }, [dispatch, currentPage, pageSize, selectedCategory]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (isError) {
    return <div>Error: {error}</div>;
  }

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