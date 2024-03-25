import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlog } from "./blogAPI.js";
import { deleteBlog } from "./blogAPI.js";

const initialState = {
    blog: {},
    isLoading: false,
    isError: false,
    error: "",
};

export const fetchBlog = createAsyncThunk("blog/fetchBlog", async (id) => {
    const blog = await getBlog(id);
    return blog;
});

export const deleteBlogPost = createAsyncThunk("blog/deleteBlogPost", async (id) => {
      const response = await deleteBlog(id);
      return response.data;
    }
  );

 const blogSlice = createSlice({
    name: "blog",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchBlog.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
            state.blog={};
        })
        .addCase(fetchBlog.fulfilled, (state, action) => {
            state.isLoading = false;
            state.blog=action.payload;
        })
        .addCase(fetchBlog.rejected, (state, action) => {
            state.isLoading = false;
            state.blog = {};
            state.isError = true;
            state.error = action.error?.message;
        })
        .addCase(deleteBlogPost.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
          })
          .addCase(deleteBlogPost.fulfilled, (state, action) => {
            state.isLoading = false;
            state.blog = {};
          })
          .addCase(deleteBlogPost.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
          });
    
    }
 })

 export default blogSlice.reducer;