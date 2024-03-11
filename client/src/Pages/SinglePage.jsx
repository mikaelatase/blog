import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import ParticleRing from "../components/Assets/ExtraAssets/ExtraDesign.jsx";
import axios from "axios";
import { AiOutlineArrowRight, AiOutlineHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import PopularBlog from "../components/Assets/Blog/PopularBlog.jsx";
import SwipeCarousel from "../components/Assets/ExtraAssets/SwipeCarousel.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../store/features/singleBlog/blogSlice.js";

const SinglePage = () => {
  const { id } = useParams();

  const { blog, isLoading, isError, error } = useSelector(
    (state) => state.blog
);

const dispatch = useDispatch();
useEffect(() => {
  dispatch(fetchBlog(id));
  window.scrollTo(0, 0);
}, [dispatch, id]);

if (isLoading) {
  return <div>Loading...</div>;
}

if (isError) {
  return <div>Error: {error}</div>;
}

const {title, desc, image, author, authorPic, category } = blog || {};

  return (
    <div>
      <ParticleRing titlePage="Single Blog Page"/>

      <article className="mt-8">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="text-4xl font-semibold text-purple-700 leading-tight">
              {title}
            </h2>
            <a
              href="#"
              className="py-2 text-purple-500 inline-flex items-center justify-center mb-2"
            >
              {category}
            </a>
          </div>

          <SwipeCarousel />

        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="px-4 lg:px-0 mt-8 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
            <br /> <br />
            <p>
              {desc}
            </p>
          </div>

          <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
            <div className="p-4 border-t border-b md:border md:rounded">
              <div className="flex py-2">
                <img
                  src={authorPic}
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                  alt="Author"
                />
                <div>
                  <p className="font-semibold text-gray-700 text-sm">
                    {author}
                  </p>
                  <p className="font-semibold text-gray-600 text-xs">
                    {" "}
                    Author{" "}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 py-3">
                Stuart writes about travelling and describes some of the most visited spots of France. 
                He has been to France multiple times and has a lot of experience in travelling. He is also a travel blogger.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae et rem repellat id. Rem veritatis aliquam fugit, 
                illo dolore pariatur quisquam voluptatibus aspernatur facere rerum! Nemo nesciunt voluptate ipsa.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 md:w-2/3">
          <div className="flex items-center space-x-2">
            <BiCommentDetail className="text-gray-600" />
            <span className="text-gray-600">15 comments</span>
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlineHeart className="text-red-500" />
            <span className="text-gray-600">120 likes</span>
          </div>
          <div className="flex items-center space-x-2 mt-8">
            <a
              href="/blogs"
              className="text-purple-500 inline-flex items-center justify-center"
            >
              Back to Blogs
              <AiOutlineArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

export default SinglePage