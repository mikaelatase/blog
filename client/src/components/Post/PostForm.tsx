import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


const PostForm = () => {
  // const dispatch = useDispatch();
  // const {blogs, isLoading, isError, error} = useSelector((state) => state.blogs);

  return (
       <div className="w-full lg:w-2/3">
          <a className="block rounded w-full lg:flex mb-10"
            href="#"
          >
            <div 
              className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
              style={{ backgroundImage: 'url("https://media.pitchfork.com/photos/65c9771d44fd12d935916072/2:1/w_2240,c_limit/Usher,%20Alicia%20Keys.jpg")' }} 
              title="Usher"
            ></div>
            <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
              <div>
                <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                Watch Usher’s 2024 Super Bowl Halftime Show With Alicia Keys, Ludacris, More
                </div>
                <p className="text-gray-700 text-base">
                Usher took the stage for the 2024 Super Bowl Halftime Show, and you can watch what went down below. The singer brought out Alicia Keys, Ludacris, Lil Jon, H.E.R., and Jermaine Dupri during his show, which he performed amid dozens of dancers and gymnasts in sparkly getups and feathered wings. 
                </p>
              </div>
              <div className="flex mt-3">
                <img src="https://randomuser.me/api/portraits/men/86.jpg"
                  className="h-10 w-10 rounded-full mr-2 object-cover" alt="Author" />
                <div>
                  <p className="font-semibold text-gray-700 text-sm capitalize"> Zachary Blackburn </p>
                  <p className="text-gray-600 text-xs"> 14 November </p>
                </div>
              </div>
            </div>
          </a>

          <div className="rounded w-full lg:flex mb-10">
            <div className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
              style={{ backgroundImage: 'url("https://media.pitchfork.com/photos/65c94e89c54c5b1b4a4185be/2:1/w_2240,c_limit/Beyonce%20.jpg")' }} title="Beyonce">
            </div>
            <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
              <div>
                <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                Beyoncé Announces New Album Act II, Shares Two New Songs: Listen
                </div>
                <p className="text-gray-700 text-base">
                Beyoncé has announced a new album; Act II arrives March 29. She’s also graced us with two new songs: “Texas Hold ’Em” and “16 Carriages.” Listen to those below, and scroll down for Bey’s teaser clip.
                </p>
              </div>
              <div className="flex mt-3">
                <img src="https://randomuser.me/api/portraits/women/54.jpg"
                  className="h-10 w-10 rounded-full mr-2 object-cover" alt="Author" />
                <div>
                  <p className="font-semibold text-gray-700 text-sm capitalize"> Marilyn Gates </p>
                  <p className="text-gray-600 text-xs"> 4 March </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded w-full lg:flex mb-10">
            <div className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
              style={{ backgroundImage: 'url("https://thediyplaybook.com/wp-content/uploads/2024/01/organize-purge-toys-20.jpg")' }} title="interior">
            </div>
            <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
              <div>
                <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                How to Purge, Declutter, and Organize Kids’ Toys
                </div>
                <p className="text-gray-700 text-base">
                We had a lovely Christmas together and our kids received some amazing gifts from friends and family. However, once the tree was taken down and the new items were stowed away, we realized our house was packed to the brim with toys. Every single cabinet and closet seemed to be bursting with stuff!
                </p>
              </div>
              <div className="flex mt-3">
                <img src="https://unavatar.io/github/1stevengrant"
                  className="h-10 w-10 rounded-full mr-2 object-cover" alt="Author" />
                <div>
                  <p className="font-semibold text-gray-700 text-sm capitalize"> Barnaby Ray </p>
                  <p className="text-gray-600 text-xs"> 28 July </p>
                </div>
              </div>
            </div>
          </div>

        </div>
  )
}

export default PostForm
