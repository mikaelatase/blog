import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from './features/blogs/blogsSlice.js';
import blogReducer from './features/singleBlog/blogSlice.js';

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog:  blogReducer
  },
})