import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import CategorySelection from '../Category/CategorySelection.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../../store/features/blogs/blogsSlice.js';

export let LENGTH = 0;
const pageSize = 9;


const BlogPage = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error, length } = useSelector((state) => state.blogs);
  
  LENGTH = length;

  useEffect(() => {
    dispatch(fetchBlogs(selectedCategory));
  }, [dispatch, currentPage, pageSize, selectedCategory]);


  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (isError) {
    return <div>Error: {error}</div>;
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  }

  const filteredBlogsCount = selectedCategory ? blogs.filter(blog => blog.category === selectedCategory).length : length;

  const shouldRenderPagination = filteredBlogsCount > pageSize;

  return (
    <div>
      <div>
        <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/>
      </div>

      <div>
        <BlogCard blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />
      </div>

      {shouldRenderPagination && (
        <div>
          <Pagination onPageChange={handlePageChange} currentPage={currentPage} pageSize={pageSize} totalItems={filteredBlogsCount} />
        </div>
      )}
    </div>
  )
}

export default BlogPage;