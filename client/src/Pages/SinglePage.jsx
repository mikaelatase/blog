import React, { useEffect, useState } from "react";
import {useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Sidebar from "../components/Assets/Sidebar/Sidebar.tsx";
import ParticleRing from "../components/Assets/ExtraAssets/ExtraDesign.jsx";
import axios from "axios";
import { AiOutlineArrowRight, AiOutlineHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import PopularBlog from "../components/Assets/Blog/PopularBlog.jsx";
import SwipeCarousel from "../components/Assets/ExtraAssets/SwipeCarousel.jsx";

const SinglePage = () => {
  return (
    <div>
      <ParticleRing titlePage="Single Blog Page" />

      <article className="mt-8">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="text-4xl font-semibold text-purple-700 leading-tight">
              The most visited cities in France.
            </h2>
            <a
              href="#"
              className="py-2 text-purple-500 inline-flex items-center justify-center mb-2"
            >
              Travel
            </a>
          </div>

          {/* <img
            src="https://worldofwanderlust.com/wp-content/uploads/2022/04/Paris-World-of-Wanderlust25-scaled.jpg"
            className="w-full object-cover lg:rounded"
            style={{ height: "28em" }}
            alt="Blog Cover"
          /> */}

          <SwipeCarousel />

        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="px-4 lg:px-0 mt-8 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
            {/* ... Existing code ... */}
            <br /> <br />
            <p>
              France is the most popular tourist destination in the world. Known
              as a country of art, culture, and romance, millions of travelers
              arrive in France every year.Some head for the mountains, others to
              the seaside, and some to the picturesque villages of rural France.
              Millions, however, are drawn to the urban heartlands of French
              culture — the cities of France.
              <br /> <br />
              <b>Paris: </b>The Most Visited City in France France’s cosmopolitan
              capital holds the number one spot on this list and it is not hard
              to see why. A truly global city and one of the largest in Europe,
              Paris has a reputation for being among the most beautiful and
              romantic places in the world. It is a focal point of tourism in
              France. The “City of Light” is renowned for having been a center
              of European art for centuries, from Baroque to Impressionism and
              its many world-famous art museums reflect this history. A world
              capital of fashion, food, and culture, visitors can enjoy fine
              dining, stroll along the banks of the Seine, and visit the cobbled
              streets of the historic Montmartre district where artists from
              Manet and Van Gogh to Picasso set up their studios.
              <br /> <br />
              <b>Nice:</b> Located on the French Riviera close to the Italian border,
              Nice is the second most-visited city in France. The city has a
              long history dating back to the Ancient Greeks. It has been a
              tourist destination since the 18th century, when wealthy English
              visitors would take advantage of the Mediterranean climate during
              the winter. This is why the main walkway on the seafront is dubbed
              “La Promenade des Anglais”. With its beautiful sand, clear blue
              waters, and hot, sunny weather, Nice is the perfect French city
              for beachgoers.
            </p>
          </div>

          <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
            <div className="p-4 border-t border-b md:border md:rounded">
              <div className="flex py-2">
                <img
                  src="https://randomuser.me/api/portraits/men/97.jpg"
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                  alt="Author"
                />
                <div>
                  <p className="font-semibold text-gray-700 text-sm">
                    "Stuart Roth"
                  </p>
                  <p className="font-semibold text-gray-600 text-xs">
                    {" "}
                    Editor{" "}
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