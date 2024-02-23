import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from './features/blogs/blogsSlice.js';

export const store = configureStore({
  reducer: {
    blogs: blogsReducer
  },
})