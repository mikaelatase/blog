import React from 'react'

const BannerElement = (props) => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-2 px-2 lg:p-0">
        <a 
          style={{ height: '24em' }}
          href="#"
        >
          <div className="absolute left-0 bottom-0 w-full h-full z-10"
            style={{ backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0, .3))' }}></div>
          <img src= {props.bannerImage} className="absolute left-0 top-0 w-full px-2 h-full rounded z-0 object-cover" />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">{props.bannerTag}</span>
            <h2 className="text-3xl font-semibold text-gray-100 leading-tight">
            {props.bannerTitle}
            </h2>
            <div className="flex mt-3">
              <img src={props.authorImage} className="h-10 w-10 rounded-full mr-2 object-cover" alt="Author" />
              <div>
                <p className="font-semibold text-gray-200 text-sm"> {props.bannerAuthor} </p>
                <p className="font-semibold text-gray-300 text-xs"> {props.bannerDateOfCreation} </p>
              </div>
            </div>
          </div>
        </a>
    </div>
  )
}

export default BannerElement
