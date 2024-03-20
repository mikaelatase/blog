import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addPosts } from './postsApi.js';

const initialState = {
    posts: [],
    isLoading: false,
    isError: false,
    error: "",
  }

  export const addPost = createAsyncThunk('posts/addPost', async (postData) => {
    const post = await addPosts(postData);
    return post;
  });

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addPost.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
        state.posts = [];
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.posts = action.payload;
        state.posts.push(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {
        state.isLoading = false;
        state.posts = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default postsSlice.reducer;