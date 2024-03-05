import React from 'react'
import SidebarItem from './SidebarItem.tsx'

function Sidebar() {
  return (
    <div className="w-full lg:w-1/3 px-3">
    {/* topics */}
    <div className="mb-4">
      <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2"> Popular Topics </h5>

      <SidebarItem 
        articleTag = "Travel"
        articleNumber = "31 articles"
      />
       <SidebarItem 
        articleTag = "Interior Design"
        articleNumber = "22 articles"
      />
       <SidebarItem 
        articleTag = "DIY"
        articleNumber = "34 articles"
      />
       <SidebarItem 
        articleTag = "VIP"
        articleNumber = "13 articles"
      />
    </div>

    {/* divider */}
    <div className="border border-dotted"></div>

    {/* subscribe */}
    <div className="p-1 mt-4 mb-4">
      <h5 className="font-bold text-lg uppercase text-gray-700 mb-2"> Subscribe </h5>
      <p className="text-gray-600">
        Subscribe to our newsletter. Be the first to get the news.
      </p>
      <input placeholder="Email address"
        className="text-gray-700 bg-gray-100 rounded-t hover:outline-none p-2 w-full mt-4 border" />
      <button className="px-4 py-2 bg-purple-800 text-gray-200 rounded-b w-full capitalize tracking-wide">
        Subscribe
      </button>
    </div>

    {/* divider */}
    <div className="border border-dotted"></div>
  </div>
  )
}

export default Sidebar