import React from 'react'

const PostItem = (props) => {
  return (
      <div >
          <a className="block rounded w-full lg:flex mb-10"
            href="#"
          >
            <div 
              className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
              style={{ backgroundImage: `url("${props.backgroundImageUrl}")` }}
            ></div>
            <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
              <div>
                <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                    {props.blogsTitle}
                </div>
                <p className="text-gray-700 text-base">
                    {props.blogsDescription}
                </p>
              </div>
              <div className="flex mt-3">
                <img src= {props.authorImage}
                  className="h-10 w-10 rounded-full mr-2 object-cover" alt="Author" />
                <div>
                  <p className="font-semibold text-gray-700 text-sm capitalize"> {props.blogsAuthor} </p>
                  <p className="text-gray-600 text-xs"> {props.creationDate} </p>
                </div>
              </div>
            </div>
          </a>

        </div>
  )
}

export default PostItem
