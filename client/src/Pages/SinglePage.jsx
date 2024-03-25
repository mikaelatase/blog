import React, { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import ParticleRing from "../components/Assets/ExtraAssets/ExtraDesign.jsx";
import { AiOutlineArrowRight, AiOutlineHeart, AiOutlineDelete } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import SwipeCarousel from "../components/Assets/ExtraAssets/SwipeCarousel.jsx";
import { AuthContext } from "../context/authContext.js";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlog, deleteBlogPost } from "../store/features/singleBlog/blogSlice.js";

const SinglePage = () => {
  const { id } = useParams();
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

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

  const { title, desc, image, author, authorPic, category, notes } = blog || {};

  const isAuthor = currentUser && (author === currentUser.username || blog.uid === currentUser.id);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      dispatch(deleteBlogPost(id));
      navigate("/blogs");
    }
  };

  return (
    <div>
      <ParticleRing titlePage="Single Blog Page" />

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

          {/* <SwipeCarousel /> */}

          <img
            src={image}
            className="w-full object-cover lg:rounded"
            style={{ height: "28em" }}
          />
        </div>

        {isAuthor && (
          <div className="flex items-center mt-7 text-gray-500 cursor-pointer " onClick={handleDelete}>
            <AiOutlineDelete className=" " />
            <span className="text-sm">Delete post</span>
          </div>
        )}

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="px-4 lg:px-0 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
            <br /> <br />
            <p>{desc}</p>
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
              <p className="text-gray-700 py-3">{notes}</p>
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

export default SinglePage;