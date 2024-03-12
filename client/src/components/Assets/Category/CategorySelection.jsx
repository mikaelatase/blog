import React from 'react'
import { Link } from 'react-router-dom';

const CategorySelection = ({onSelectCategory, activeCategory}) => {
    const categories = ["Travel", "DIY" ,"VIP", "Security", "AI", "Apps", "Tech"];
  return (
    <div className='px-4 mb-8 lg:space-x-16 flex flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold'>
      <Link to = "/blogs/">
      <button onClick={() => onSelectCategory(null)} className={`lg:ml-12 ${activeCategory ? "" : "active-button"}`}>All</button>
      </Link>
      {
        categories.map((category) => (
            <Link to = {`/blogs/${category}`}>
            <button 
              onClick={() => onSelectCategory(category)}
              className={`mr-2 space-x-16 ${activeCategory === category ? "active-button" : "" }`}
              key={category}>
              {category}
            </button>
            </Link>
        ))
      }
    </div>
  )
}

export default CategorySelection
