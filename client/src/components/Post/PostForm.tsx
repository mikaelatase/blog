import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostItem from './PostItem.tsx';
import postDetails from '../Assets/postDetails.js';

function createPostItem(postItem) {
  return (
    <PostItem
      key = {postItem.id}  //its used for react so it can render elements in the right order, its not a props
      blogsTitle = {postItem.blogsTitle}
      blogsDescription = {postItem.blogsDescription}
      blogsAuthor = {postItem.blogsAuthor}
      creationDate = {postItem.creationDate}
      backgroundImageUrl = {postItem.backgroundImageUrl}
      authorImage = {postItem.authorImage}
    />
  );
}

const PostForm = () => {
  // const dispatch = useDispatch();
  // const {blogs, isLoading, isError, error} = useSelector((state) => state.blogs);

  return (
      <div className= "w-full lg:w-2/3">
        {postDetails.map(createPostItem)}
      </div>
  )
}

export default PostForm
