import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogs } from "./blogsAPI.js";

const initialState = {
    blogs: [],
    length: 0,
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async (category) => {
    const blogs = await getBlogs(category);
    return blogs;
});

const blogsSlice = createSlice({
    name: "blogs",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchBlogs.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
            state.blogs = [];
            state.length = 0;
        })
        .addCase(fetchBlogs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.blogs = action.payload;
            state.length = action.payload.length;
        })
        .addCase(fetchBlogs.rejected, (state, action) => {
            state.isLoading = false;
            state.blogs = [];
            state.isError = true;
            state.error = action.error?.message;
            state.length = 0;
        });
    }
});

export default blogsSlice.reducer;